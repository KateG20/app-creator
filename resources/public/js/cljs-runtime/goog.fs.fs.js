goog.provide("goog.fs");
goog.require("goog.async.Deferred");
goog.require("goog.fs.Error");
goog.require("goog.fs.FileSystemImpl");
goog.fs.get_ = function(type, size) {
  const requestFileSystem = goog.global.requestFileSystem || goog.global.webkitRequestFileSystem;
  if (typeof requestFileSystem !== "function") {
    return goog.async.Deferred.fail(new Error("File API unsupported"));
  }
  const d = new goog.async.Deferred();
  requestFileSystem(type, size, function(fs) {
    d.callback(new goog.fs.FileSystemImpl(fs));
  }, function(err) {
    d.errback(new goog.fs.Error(err, "requesting filesystem"));
  });
  return d;
};
goog.fs.FileSystemType_ = {TEMPORARY:0, PERSISTENT:1};
goog.fs.getTemporary = function(size) {
  return goog.fs.get_(goog.fs.FileSystemType_.TEMPORARY, size);
};
goog.fs.getPersistent = function(size) {
  return goog.fs.get_(goog.fs.FileSystemType_.PERSISTENT, size);
};
goog.fs.sliceBlob = function(blob, start, opt_end) {
  if (opt_end === undefined) {
    opt_end = blob.size;
  }
  if (blob.slice) {
    return blob.slice(start, opt_end);
  }
  return null;
};

//# sourceMappingURL=goog.fs.fs.js.map
