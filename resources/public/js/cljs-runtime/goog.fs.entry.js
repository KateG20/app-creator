goog.provide("goog.fs.DirectoryEntry");
goog.provide("goog.fs.DirectoryEntry.Behavior");
goog.provide("goog.fs.Entry");
goog.provide("goog.fs.FileEntry");
goog.requireType("goog.async.Deferred");
goog.requireType("goog.fs.FileSystem");
goog.requireType("goog.fs.FileWriter");
goog.fs.Entry = function() {
};
goog.fs.Entry.prototype.isFile = function() {
};
goog.fs.Entry.prototype.isDirectory = function() {
};
goog.fs.Entry.prototype.getName = function() {
};
goog.fs.Entry.prototype.getFullPath = function() {
};
goog.fs.Entry.prototype.getFileSystem = function() {
};
goog.fs.Entry.prototype.getLastModified = function() {
};
goog.fs.Entry.prototype.getMetadata = function() {
};
goog.fs.Entry.prototype.moveTo = function(parent, opt_newName) {
};
goog.fs.Entry.prototype.copyTo = function(parent, opt_newName) {
};
goog.fs.Entry.prototype.wrapEntry = function(entry) {
};
goog.fs.Entry.prototype.toUrl = function(opt_mimeType) {
};
goog.fs.Entry.prototype.toUri = function(opt_mimeType) {
};
goog.fs.Entry.prototype.remove = function() {
};
goog.fs.Entry.prototype.getParent = function() {
};
goog.fs.DirectoryEntry = function() {
};
goog.fs.DirectoryEntry.Behavior = {DEFAULT:1, CREATE:2, CREATE_EXCLUSIVE:3};
goog.fs.DirectoryEntry.prototype.getFile = function(path, opt_behavior) {
};
goog.fs.DirectoryEntry.prototype.getDirectory = function(path, opt_behavior) {
};
goog.fs.DirectoryEntry.prototype.createPath = function(path) {
};
goog.fs.DirectoryEntry.prototype.listDirectory = function() {
};
goog.fs.DirectoryEntry.prototype.removeRecursively = function() {
};
goog.fs.FileEntry = function() {
};
goog.fs.FileEntry.prototype.createWriter = function() {
};
goog.fs.FileEntry.prototype.file = function() {
};

//# sourceMappingURL=goog.fs.entry.js.map
