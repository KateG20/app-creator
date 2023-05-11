goog.provide("goog.fs.FileSystemImpl");
goog.require("goog.fs.DirectoryEntryImpl");
goog.require("goog.fs.FileSystem");
goog.fs.FileSystemImpl = function(fs) {
  this.fs_ = fs;
};
goog.fs.FileSystemImpl.prototype.getName = function() {
  return this.fs_.name;
};
goog.fs.FileSystemImpl.prototype.getRoot = function() {
  return new goog.fs.DirectoryEntryImpl(this, this.fs_.root);
};
goog.fs.FileSystemImpl.prototype.getBrowserFileSystem = function() {
  return this.fs_;
};

//# sourceMappingURL=goog.fs.filesystemimpl.js.map
