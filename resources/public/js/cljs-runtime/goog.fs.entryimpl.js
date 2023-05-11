goog.provide("goog.fs.DirectoryEntryImpl");
goog.provide("goog.fs.EntryImpl");
goog.provide("goog.fs.FileEntryImpl");
goog.require("goog.async.Deferred");
goog.require("goog.fs.DirectoryEntry");
goog.require("goog.fs.Entry");
goog.require("goog.fs.Error");
goog.require("goog.fs.FileEntry");
goog.require("goog.fs.FileWriter");
goog.require("goog.functions");
goog.require("goog.string");
goog.requireType("goog.fs.FileSystem");
goog.fs.EntryImpl = function(fs, entry) {
  this.fs_ = fs;
  this.entry_ = entry;
};
goog.fs.EntryImpl.prototype.isFile = function() {
  return this.entry_.isFile;
};
goog.fs.EntryImpl.prototype.isDirectory = function() {
  return this.entry_.isDirectory;
};
goog.fs.EntryImpl.prototype.getName = function() {
  return this.entry_.name;
};
goog.fs.EntryImpl.prototype.getFullPath = function() {
  return this.entry_.fullPath;
};
goog.fs.EntryImpl.prototype.getFileSystem = function() {
  return this.fs_;
};
goog.fs.EntryImpl.prototype.getLastModified = function() {
  return this.getMetadata().addCallback(function(metadata) {
    return metadata.modificationTime;
  });
};
goog.fs.EntryImpl.prototype.getMetadata = function() {
  const d = new goog.async.Deferred();
  this.entry_.getMetadata(function(metadata) {
    d.callback(metadata);
  }, goog.bind(function(err) {
    const msg = "retrieving metadata for " + this.getFullPath();
    d.errback(new goog.fs.Error(err, msg));
  }, this));
  return d;
};
goog.fs.EntryImpl.prototype.moveTo = function(parent, opt_newName) {
  const d = new goog.async.Deferred();
  this.entry_.moveTo(parent.dir_, opt_newName, goog.bind(function(entry) {
    d.callback(this.wrapEntry(entry));
  }, this), goog.bind(function(err) {
    const msg = "moving " + this.getFullPath() + " into " + parent.getFullPath() + (opt_newName ? ", renaming to " + opt_newName : "");
    d.errback(new goog.fs.Error(err, msg));
  }, this));
  return d;
};
goog.fs.EntryImpl.prototype.copyTo = function(parent, opt_newName) {
  const d = new goog.async.Deferred();
  this.entry_.copyTo(parent.dir_, opt_newName, goog.bind(function(entry) {
    d.callback(this.wrapEntry(entry));
  }, this), goog.bind(function(err) {
    const msg = "copying " + this.getFullPath() + " into " + parent.getFullPath() + (opt_newName ? ", renaming to " + opt_newName : "");
    d.errback(new goog.fs.Error(err, msg));
  }, this));
  return d;
};
goog.fs.EntryImpl.prototype.wrapEntry = function(entry) {
  return entry.isFile ? new goog.fs.FileEntryImpl(this.fs_, entry) : new goog.fs.DirectoryEntryImpl(this.fs_, entry);
};
goog.fs.EntryImpl.prototype.toUrl = function(opt_mimeType) {
  return this.entry_.toURL(opt_mimeType);
};
goog.fs.EntryImpl.prototype.toUri = goog.fs.EntryImpl.prototype.toUrl;
goog.fs.EntryImpl.prototype.remove = function() {
  const d = new goog.async.Deferred();
  this.entry_.remove(goog.bind(d.callback, d, true), goog.bind(function(err) {
    const msg = "removing " + this.getFullPath();
    d.errback(new goog.fs.Error(err, msg));
  }, this));
  return d;
};
goog.fs.EntryImpl.prototype.getParent = function() {
  const d = new goog.async.Deferred();
  this.entry_.getParent(goog.bind(function(parent) {
    d.callback(new goog.fs.DirectoryEntryImpl(this.fs_, parent));
  }, this), goog.bind(function(err) {
    const msg = "getting parent of " + this.getFullPath();
    d.errback(new goog.fs.Error(err, msg));
  }, this));
  return d;
};
goog.fs.DirectoryEntryImpl = function(fs, dir) {
  goog.fs.DirectoryEntryImpl.base(this, "constructor", fs, dir);
  this.dir_ = dir;
};
goog.inherits(goog.fs.DirectoryEntryImpl, goog.fs.EntryImpl);
goog.fs.DirectoryEntryImpl.prototype.getFile = function(path, opt_behavior) {
  const d = new goog.async.Deferred();
  this.dir_.getFile(path, this.getOptions_(opt_behavior), goog.bind(function(entry) {
    d.callback(new goog.fs.FileEntryImpl(this.fs_, entry));
  }, this), goog.bind(function(err) {
    const msg = "loading file " + path + " from " + this.getFullPath();
    d.errback(new goog.fs.Error(err, msg));
  }, this));
  return d;
};
goog.fs.DirectoryEntryImpl.prototype.getDirectory = function(path, opt_behavior) {
  const d = new goog.async.Deferred();
  this.dir_.getDirectory(path, this.getOptions_(opt_behavior), goog.bind(function(entry) {
    d.callback(new goog.fs.DirectoryEntryImpl(this.fs_, entry));
  }, this), goog.bind(function(err) {
    const msg = "loading directory " + path + " from " + this.getFullPath();
    d.errback(new goog.fs.Error(err, msg));
  }, this));
  return d;
};
goog.fs.DirectoryEntryImpl.prototype.createPath = function(path) {
  if (goog.string.startsWith(path, "/")) {
    const root = this.getFileSystem().getRoot();
    if (this.getFullPath() != root.getFullPath()) {
      return root.createPath(path);
    }
  }
  const parts = path.split("/").filter(goog.functions.identity);
  function getNextDirectory(dir) {
    if (!parts.length) {
      return goog.async.Deferred.succeed(dir);
    }
    let def;
    const nextDir = parts.shift();
    if (nextDir == "..") {
      def = dir.getParent();
    } else if (nextDir == ".") {
      def = goog.async.Deferred.succeed(dir);
    } else {
      def = dir.getDirectory(nextDir, goog.fs.DirectoryEntry.Behavior.CREATE);
    }
    return def.addCallback(getNextDirectory);
  }
  return getNextDirectory(this);
};
goog.fs.DirectoryEntryImpl.prototype.listDirectory = function() {
  const d = new goog.async.Deferred();
  const reader = this.dir_.createReader();
  const results = [];
  const errorCallback = goog.bind(function(err) {
    const msg = "listing directory " + this.getFullPath();
    d.errback(new goog.fs.Error(err, msg));
  }, this);
  const successCallback = goog.bind(function(entries) {
    if (entries.length) {
      for (let i = 0, entry; entry = entries[i]; i++) {
        results.push(this.wrapEntry(entry));
      }
      reader.readEntries(successCallback, errorCallback);
    } else {
      d.callback(results);
    }
  }, this);
  reader.readEntries(successCallback, errorCallback);
  return d;
};
goog.fs.DirectoryEntryImpl.prototype.removeRecursively = function() {
  const d = new goog.async.Deferred();
  this.dir_.removeRecursively(goog.bind(d.callback, d, true), goog.bind(function(err) {
    const msg = "removing " + this.getFullPath() + " recursively";
    d.errback(new goog.fs.Error(err, msg));
  }, this));
  return d;
};
goog.fs.DirectoryEntryImpl.prototype.getOptions_ = function(opt_behavior) {
  if (opt_behavior == goog.fs.DirectoryEntry.Behavior.CREATE) {
    return {"create":true};
  } else if (opt_behavior == goog.fs.DirectoryEntry.Behavior.CREATE_EXCLUSIVE) {
    return {"create":true, "exclusive":true};
  } else {
    return {};
  }
};
goog.fs.FileEntryImpl = function(fs, file) {
  goog.fs.FileEntryImpl.base(this, "constructor", fs, file);
  this.file_ = file;
};
goog.inherits(goog.fs.FileEntryImpl, goog.fs.EntryImpl);
goog.fs.FileEntryImpl.prototype.createWriter = function() {
  const d = new goog.async.Deferred();
  this.file_.createWriter(function(w) {
    d.callback(new goog.fs.FileWriter(w));
  }, goog.bind(function(err) {
    const msg = "creating writer for " + this.getFullPath();
    d.errback(new goog.fs.Error(err, msg));
  }, this));
  return d;
};
goog.fs.FileEntryImpl.prototype.file = function() {
  const d = new goog.async.Deferred();
  this.file_.file(function(f) {
    d.callback(f);
  }, goog.bind(function(err) {
    const msg = "getting file for " + this.getFullPath();
    d.errback(new goog.fs.Error(err, msg));
  }, this));
  return d;
};

//# sourceMappingURL=goog.fs.entryimpl.js.map
