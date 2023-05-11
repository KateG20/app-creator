goog.provide("goog.fs.DOMErrorLike");
goog.provide("goog.fs.Error");
goog.provide("goog.fs.Error.ErrorCode");
goog.require("goog.asserts");
goog.require("goog.debug.Error");
goog.require("goog.object");
goog.require("goog.string");
goog.fs.DOMErrorLike = function() {
};
goog.fs.DOMErrorLike.prototype.name;
goog.fs.DOMErrorLike.prototype.code;
goog.fs.Error = function(error, action) {
  this.name;
  this.code;
  if (error.name !== undefined) {
    this.name = error.name;
    this.code = goog.fs.Error.getCodeFromName_(error.name);
  } else {
    const code = goog.asserts.assertNumber(error.code);
    this.code = code;
    this.name = goog.fs.Error.getNameFromCode_(code);
  }
  goog.fs.Error.base(this, "constructor", goog.string.subs("%s %s", this.name, action));
};
goog.inherits(goog.fs.Error, goog.debug.Error);
goog.fs.Error.ErrorName = {ABORT:"AbortError", ENCODING:"EncodingError", INVALID_MODIFICATION:"InvalidModificationError", INVALID_STATE:"InvalidStateError", NOT_FOUND:"NotFoundError", NOT_READABLE:"NotReadableError", NO_MODIFICATION_ALLOWED:"NoModificationAllowedError", PATH_EXISTS:"PathExistsError", QUOTA_EXCEEDED:"QuotaExceededError", SECURITY:"SecurityError", SYNTAX:"SyntaxError", TYPE_MISMATCH:"TypeMismatchError"};
goog.fs.Error.ErrorCode = {NOT_FOUND:1, SECURITY:2, ABORT:3, NOT_READABLE:4, ENCODING:5, NO_MODIFICATION_ALLOWED:6, INVALID_STATE:7, SYNTAX:8, INVALID_MODIFICATION:9, QUOTA_EXCEEDED:10, TYPE_MISMATCH:11, PATH_EXISTS:12};
goog.fs.Error.getNameFromCode_ = function(code) {
  const name = goog.object.findKey(goog.fs.Error.NameToCodeMap_, function(c) {
    return code == c;
  });
  if (name === undefined) {
    throw new Error("Invalid code: " + code);
  }
  return name;
};
goog.fs.Error.getCodeFromName_ = function(name) {
  return goog.fs.Error.NameToCodeMap_[name];
};
goog.fs.Error.NameToCodeMap_ = {[goog.fs.Error.ErrorName.ABORT]:goog.fs.Error.ErrorCode.ABORT, [goog.fs.Error.ErrorName.ENCODING]:goog.fs.Error.ErrorCode.ENCODING, [goog.fs.Error.ErrorName.INVALID_MODIFICATION]:goog.fs.Error.ErrorCode.INVALID_MODIFICATION, [goog.fs.Error.ErrorName.INVALID_STATE]:goog.fs.Error.ErrorCode.INVALID_STATE, [goog.fs.Error.ErrorName.NOT_FOUND]:goog.fs.Error.ErrorCode.NOT_FOUND, [goog.fs.Error.ErrorName.NOT_READABLE]:goog.fs.Error.ErrorCode.NOT_READABLE, [goog.fs.Error.ErrorName.NO_MODIFICATION_ALLOWED]:goog.fs.Error.ErrorCode.NO_MODIFICATION_ALLOWED, 
[goog.fs.Error.ErrorName.PATH_EXISTS]:goog.fs.Error.ErrorCode.PATH_EXISTS, [goog.fs.Error.ErrorName.QUOTA_EXCEEDED]:goog.fs.Error.ErrorCode.QUOTA_EXCEEDED, [goog.fs.Error.ErrorName.SECURITY]:goog.fs.Error.ErrorCode.SECURITY, [goog.fs.Error.ErrorName.SYNTAX]:goog.fs.Error.ErrorCode.SYNTAX, [goog.fs.Error.ErrorName.TYPE_MISMATCH]:goog.fs.Error.ErrorCode.TYPE_MISMATCH};

//# sourceMappingURL=goog.fs.error.js.map
