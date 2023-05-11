goog.provide("goog.fs.ProgressEvent");
goog.require("goog.events.Event");
goog.fs.ProgressEvent = function(event, target) {
  goog.fs.ProgressEvent.base(this, "constructor", event.type, target);
  this.event_ = event;
};
goog.inherits(goog.fs.ProgressEvent, goog.events.Event);
goog.fs.ProgressEvent.prototype.isLengthComputable = function() {
  return this.event_.lengthComputable;
};
goog.fs.ProgressEvent.prototype.getLoaded = function() {
  return this.event_.loaded;
};
goog.fs.ProgressEvent.prototype.getTotal = function() {
  return this.event_.total;
};

//# sourceMappingURL=goog.fs.progressevent.js.map
