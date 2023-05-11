["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/fs/error.js"],"~:js","goog.provide(\"goog.fs.DOMErrorLike\");\ngoog.provide(\"goog.fs.Error\");\ngoog.provide(\"goog.fs.Error.ErrorCode\");\ngoog.require(\"goog.asserts\");\ngoog.require(\"goog.debug.Error\");\ngoog.require(\"goog.object\");\ngoog.require(\"goog.string\");\ngoog.fs.DOMErrorLike = function() {\n};\ngoog.fs.DOMErrorLike.prototype.name;\ngoog.fs.DOMErrorLike.prototype.code;\ngoog.fs.Error = function(error, action) {\n  this.name;\n  this.code;\n  if (error.name !== undefined) {\n    this.name = error.name;\n    this.code = goog.fs.Error.getCodeFromName_(error.name);\n  } else {\n    const code = goog.asserts.assertNumber(error.code);\n    this.code = code;\n    this.name = goog.fs.Error.getNameFromCode_(code);\n  }\n  goog.fs.Error.base(this, \"constructor\", goog.string.subs(\"%s %s\", this.name, action));\n};\ngoog.inherits(goog.fs.Error, goog.debug.Error);\ngoog.fs.Error.ErrorName = {ABORT:\"AbortError\", ENCODING:\"EncodingError\", INVALID_MODIFICATION:\"InvalidModificationError\", INVALID_STATE:\"InvalidStateError\", NOT_FOUND:\"NotFoundError\", NOT_READABLE:\"NotReadableError\", NO_MODIFICATION_ALLOWED:\"NoModificationAllowedError\", PATH_EXISTS:\"PathExistsError\", QUOTA_EXCEEDED:\"QuotaExceededError\", SECURITY:\"SecurityError\", SYNTAX:\"SyntaxError\", TYPE_MISMATCH:\"TypeMismatchError\"};\ngoog.fs.Error.ErrorCode = {NOT_FOUND:1, SECURITY:2, ABORT:3, NOT_READABLE:4, ENCODING:5, NO_MODIFICATION_ALLOWED:6, INVALID_STATE:7, SYNTAX:8, INVALID_MODIFICATION:9, QUOTA_EXCEEDED:10, TYPE_MISMATCH:11, PATH_EXISTS:12};\ngoog.fs.Error.getNameFromCode_ = function(code) {\n  const name = goog.object.findKey(goog.fs.Error.NameToCodeMap_, function(c) {\n    return code == c;\n  });\n  if (name === undefined) {\n    throw new Error(\"Invalid code: \" + code);\n  }\n  return name;\n};\ngoog.fs.Error.getCodeFromName_ = function(name) {\n  return goog.fs.Error.NameToCodeMap_[name];\n};\ngoog.fs.Error.NameToCodeMap_ = {[goog.fs.Error.ErrorName.ABORT]:goog.fs.Error.ErrorCode.ABORT, [goog.fs.Error.ErrorName.ENCODING]:goog.fs.Error.ErrorCode.ENCODING, [goog.fs.Error.ErrorName.INVALID_MODIFICATION]:goog.fs.Error.ErrorCode.INVALID_MODIFICATION, [goog.fs.Error.ErrorName.INVALID_STATE]:goog.fs.Error.ErrorCode.INVALID_STATE, [goog.fs.Error.ErrorName.NOT_FOUND]:goog.fs.Error.ErrorCode.NOT_FOUND, [goog.fs.Error.ErrorName.NOT_READABLE]:goog.fs.Error.ErrorCode.NOT_READABLE, [goog.fs.Error.ErrorName.NO_MODIFICATION_ALLOWED]:goog.fs.Error.ErrorCode.NO_MODIFICATION_ALLOWED, \n[goog.fs.Error.ErrorName.PATH_EXISTS]:goog.fs.Error.ErrorCode.PATH_EXISTS, [goog.fs.Error.ErrorName.QUOTA_EXCEEDED]:goog.fs.Error.ErrorCode.QUOTA_EXCEEDED, [goog.fs.Error.ErrorName.SECURITY]:goog.fs.Error.ErrorCode.SECURITY, [goog.fs.Error.ErrorName.SYNTAX]:goog.fs.Error.ErrorCode.SYNTAX, [goog.fs.Error.ErrorName.TYPE_MISMATCH]:goog.fs.Error.ErrorCode.TYPE_MISMATCH};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview A wrapper for the HTML5 FileError object.\n */\n\n\n// TODO(user): We're trying to migrate all ES5 subclasses of Closure\n// Library to ES6. In ES6 this cannot be referenced before super is called. This\n// file has at least one this before a super call (in ES5) and cannot be\n// automatically upgraded to ES6 as a result. Please fix this if you have a\n// chance. Note: This can sometimes be caused by not calling the super\n// constructor at all. You can run the conversion tool yourself to see what it\n// does on this file: blaze run //javascript/refactoring/es6_classes:convert.\n\ngoog.provide('goog.fs.DOMErrorLike');\ngoog.provide('goog.fs.Error');\ngoog.provide('goog.fs.Error.ErrorCode');\n\ngoog.require('goog.asserts');\ngoog.require('goog.debug.Error');\ngoog.require('goog.object');\ngoog.require('goog.string');\n\n/** @record */\ngoog.fs.DOMErrorLike = function() {};\n\n/** @type {string|undefined} */\ngoog.fs.DOMErrorLike.prototype.name;\n\n/** @type {!goog.fs.Error.ErrorCode|undefined} */\ngoog.fs.DOMErrorLike.prototype.code;\n\n\n\n/**\n * A filesystem error. Since the filesystem API is asynchronous, stack traces\n * are less useful for identifying where errors come from, so this includes a\n * large amount of metadata in the message.\n *\n * @param {!DOMError|!goog.fs.DOMErrorLike} error\n * @param {string} action The action being undertaken when the error was raised.\n * @constructor\n * @extends {goog.debug.Error}\n * @final\n */\ngoog.fs.Error = function(error, action) {\n  'use strict';\n  /** @type {string} */\n  this.name;\n\n  /**\n   * @type {!goog.fs.Error.ErrorCode}\n   * @deprecated Use the 'name' or 'message' field instead.\n   */\n  this.code;\n\n  if (error.name !== undefined) {\n    this.name = error.name;\n    // TODO(user): Remove warning suppression after JSCompiler stops\n    // firing a spurious warning here.\n    /** @suppress {deprecated} */\n    this.code = goog.fs.Error.getCodeFromName_(error.name);\n  } else {\n    const code =\n        /** @type {!goog.fs.Error.ErrorCode} */ (goog.asserts.assertNumber(\n            /** @type {!goog.fs.DOMErrorLike} */ (error).code));\n    this.code = code;\n    this.name = goog.fs.Error.getNameFromCode_(code);\n  }\n  goog.fs.Error.base(\n      this, 'constructor', goog.string.subs('%s %s', this.name, action));\n};\ngoog.inherits(goog.fs.Error, goog.debug.Error);\n\n\n/**\n * Names of errors that may be thrown by the File API, the File System API, or\n * the File Writer API.\n *\n * @see http://dev.w3.org/2006/webapi/FileAPI/#ErrorAndException\n * @see http://www.w3.org/TR/file-system-api/#definitions\n * @see http://dev.w3.org/2009/dap/file-system/file-writer.html#definitions\n * @enum {string}\n */\ngoog.fs.Error.ErrorName = {\n  ABORT: 'AbortError',\n  ENCODING: 'EncodingError',\n  INVALID_MODIFICATION: 'InvalidModificationError',\n  INVALID_STATE: 'InvalidStateError',\n  NOT_FOUND: 'NotFoundError',\n  NOT_READABLE: 'NotReadableError',\n  NO_MODIFICATION_ALLOWED: 'NoModificationAllowedError',\n  PATH_EXISTS: 'PathExistsError',\n  QUOTA_EXCEEDED: 'QuotaExceededError',\n  SECURITY: 'SecurityError',\n  SYNTAX: 'SyntaxError',\n  TYPE_MISMATCH: 'TypeMismatchError'\n};\n\n\n/**\n * Error codes for file errors.\n * @see http://www.w3.org/TR/file-system-api/#idl-def-FileException\n *\n * @enum {number}\n * @deprecated Use the 'name' or 'message' attribute instead.\n */\ngoog.fs.Error.ErrorCode = {\n  NOT_FOUND: 1,\n  SECURITY: 2,\n  ABORT: 3,\n  NOT_READABLE: 4,\n  ENCODING: 5,\n  NO_MODIFICATION_ALLOWED: 6,\n  INVALID_STATE: 7,\n  SYNTAX: 8,\n  INVALID_MODIFICATION: 9,\n  QUOTA_EXCEEDED: 10,\n  TYPE_MISMATCH: 11,\n  PATH_EXISTS: 12\n};\n\n\n/**\n * @param {goog.fs.Error.ErrorCode|undefined} code\n * @return {string} name\n * @private\n */\ngoog.fs.Error.getNameFromCode_ = function(code) {\n  'use strict';\n  const name = goog.object.findKey(goog.fs.Error.NameToCodeMap_, function(c) {\n    'use strict';\n    return code == c;\n  });\n  if (name === undefined) {\n    throw new Error('Invalid code: ' + code);\n  }\n  return name;\n};\n\n\n/**\n * Returns the code that corresponds to the given name.\n * @param {string} name\n * @return {goog.fs.Error.ErrorCode} code\n * @private\n */\ngoog.fs.Error.getCodeFromName_ = function(name) {\n  'use strict';\n  return goog.fs.Error.NameToCodeMap_[name];\n};\n\n\n/**\n * Mapping from error names to values from the ErrorCode enum.\n * @see http://www.w3.org/TR/file-system-api/#definitions.\n * @private {!Object<string, goog.fs.Error.ErrorCode>}\n */\ngoog.fs.Error.NameToCodeMap_ = {\n  [goog.fs.Error.ErrorName.ABORT]: goog.fs.Error.ErrorCode.ABORT,\n  [goog.fs.Error.ErrorName.ENCODING]: goog.fs.Error.ErrorCode.ENCODING,\n  [goog.fs.Error.ErrorName.INVALID_MODIFICATION]:\n      goog.fs.Error.ErrorCode.INVALID_MODIFICATION,\n  [goog.fs.Error.ErrorName.INVALID_STATE]:\n      goog.fs.Error.ErrorCode.INVALID_STATE,\n  [goog.fs.Error.ErrorName.NOT_FOUND]: goog.fs.Error.ErrorCode.NOT_FOUND,\n  [goog.fs.Error.ErrorName.NOT_READABLE]: goog.fs.Error.ErrorCode.NOT_READABLE,\n  [goog.fs.Error.ErrorName.NO_MODIFICATION_ALLOWED]:\n      goog.fs.Error.ErrorCode.NO_MODIFICATION_ALLOWED,\n  [goog.fs.Error.ErrorName.PATH_EXISTS]: goog.fs.Error.ErrorCode.PATH_EXISTS,\n  [goog.fs.Error.ErrorName.QUOTA_EXCEEDED]:\n      goog.fs.Error.ErrorCode.QUOTA_EXCEEDED,\n  [goog.fs.Error.ErrorName.SECURITY]: goog.fs.Error.ErrorCode.SECURITY,\n  [goog.fs.Error.ErrorName.SYNTAX]: goog.fs.Error.ErrorCode.SYNTAX,\n  [goog.fs.Error.ErrorName.TYPE_MISMATCH]: goog.fs.Error.ErrorCode.TYPE_MISMATCH\n};\n","~:compiled-at",1683761004117,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.fs.error.js\",\n\"lineCount\":42,\n\"mappings\":\"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\",\n\"sources\":[\"goog/fs/error.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview A wrapper for the HTML5 FileError object.\\n */\\n\\n\\n// TODO(user): We're trying to migrate all ES5 subclasses of Closure\\n// Library to ES6. In ES6 this cannot be referenced before super is called. This\\n// file has at least one this before a super call (in ES5) and cannot be\\n// automatically upgraded to ES6 as a result. Please fix this if you have a\\n// chance. Note: This can sometimes be caused by not calling the super\\n// constructor at all. You can run the conversion tool yourself to see what it\\n// does on this file: blaze run //javascript/refactoring/es6_classes:convert.\\n\\ngoog.provide('goog.fs.DOMErrorLike');\\ngoog.provide('goog.fs.Error');\\ngoog.provide('goog.fs.Error.ErrorCode');\\n\\ngoog.require('goog.asserts');\\ngoog.require('goog.debug.Error');\\ngoog.require('goog.object');\\ngoog.require('goog.string');\\n\\n/** @record */\\ngoog.fs.DOMErrorLike = function() {};\\n\\n/** @type {string|undefined} */\\ngoog.fs.DOMErrorLike.prototype.name;\\n\\n/** @type {!goog.fs.Error.ErrorCode|undefined} */\\ngoog.fs.DOMErrorLike.prototype.code;\\n\\n\\n\\n/**\\n * A filesystem error. Since the filesystem API is asynchronous, stack traces\\n * are less useful for identifying where errors come from, so this includes a\\n * large amount of metadata in the message.\\n *\\n * @param {!DOMError|!goog.fs.DOMErrorLike} error\\n * @param {string} action The action being undertaken when the error was raised.\\n * @constructor\\n * @extends {goog.debug.Error}\\n * @final\\n */\\ngoog.fs.Error = function(error, action) {\\n  'use strict';\\n  /** @type {string} */\\n  this.name;\\n\\n  /**\\n   * @type {!goog.fs.Error.ErrorCode}\\n   * @deprecated Use the 'name' or 'message' field instead.\\n   */\\n  this.code;\\n\\n  if (error.name !== undefined) {\\n    this.name = error.name;\\n    // TODO(user): Remove warning suppression after JSCompiler stops\\n    // firing a spurious warning here.\\n    /** @suppress {deprecated} */\\n    this.code = goog.fs.Error.getCodeFromName_(error.name);\\n  } else {\\n    const code =\\n        /** @type {!goog.fs.Error.ErrorCode} */ (goog.asserts.assertNumber(\\n            /** @type {!goog.fs.DOMErrorLike} */ (error).code));\\n    this.code = code;\\n    this.name = goog.fs.Error.getNameFromCode_(code);\\n  }\\n  goog.fs.Error.base(\\n      this, 'constructor', goog.string.subs('%s %s', this.name, action));\\n};\\ngoog.inherits(goog.fs.Error, goog.debug.Error);\\n\\n\\n/**\\n * Names of errors that may be thrown by the File API, the File System API, or\\n * the File Writer API.\\n *\\n * @see http://dev.w3.org/2006/webapi/FileAPI/#ErrorAndException\\n * @see http://www.w3.org/TR/file-system-api/#definitions\\n * @see http://dev.w3.org/2009/dap/file-system/file-writer.html#definitions\\n * @enum {string}\\n */\\ngoog.fs.Error.ErrorName = {\\n  ABORT: 'AbortError',\\n  ENCODING: 'EncodingError',\\n  INVALID_MODIFICATION: 'InvalidModificationError',\\n  INVALID_STATE: 'InvalidStateError',\\n  NOT_FOUND: 'NotFoundError',\\n  NOT_READABLE: 'NotReadableError',\\n  NO_MODIFICATION_ALLOWED: 'NoModificationAllowedError',\\n  PATH_EXISTS: 'PathExistsError',\\n  QUOTA_EXCEEDED: 'QuotaExceededError',\\n  SECURITY: 'SecurityError',\\n  SYNTAX: 'SyntaxError',\\n  TYPE_MISMATCH: 'TypeMismatchError'\\n};\\n\\n\\n/**\\n * Error codes for file errors.\\n * @see http://www.w3.org/TR/file-system-api/#idl-def-FileException\\n *\\n * @enum {number}\\n * @deprecated Use the 'name' or 'message' attribute instead.\\n */\\ngoog.fs.Error.ErrorCode = {\\n  NOT_FOUND: 1,\\n  SECURITY: 2,\\n  ABORT: 3,\\n  NOT_READABLE: 4,\\n  ENCODING: 5,\\n  NO_MODIFICATION_ALLOWED: 6,\\n  INVALID_STATE: 7,\\n  SYNTAX: 8,\\n  INVALID_MODIFICATION: 9,\\n  QUOTA_EXCEEDED: 10,\\n  TYPE_MISMATCH: 11,\\n  PATH_EXISTS: 12\\n};\\n\\n\\n/**\\n * @param {goog.fs.Error.ErrorCode|undefined} code\\n * @return {string} name\\n * @private\\n */\\ngoog.fs.Error.getNameFromCode_ = function(code) {\\n  'use strict';\\n  const name = goog.object.findKey(goog.fs.Error.NameToCodeMap_, function(c) {\\n    'use strict';\\n    return code == c;\\n  });\\n  if (name === undefined) {\\n    throw new Error('Invalid code: ' + code);\\n  }\\n  return name;\\n};\\n\\n\\n/**\\n * Returns the code that corresponds to the given name.\\n * @param {string} name\\n * @return {goog.fs.Error.ErrorCode} code\\n * @private\\n */\\ngoog.fs.Error.getCodeFromName_ = function(name) {\\n  'use strict';\\n  return goog.fs.Error.NameToCodeMap_[name];\\n};\\n\\n\\n/**\\n * Mapping from error names to values from the ErrorCode enum.\\n * @see http://www.w3.org/TR/file-system-api/#definitions.\\n * @private {!Object<string, goog.fs.Error.ErrorCode>}\\n */\\ngoog.fs.Error.NameToCodeMap_ = {\\n  [goog.fs.Error.ErrorName.ABORT]: goog.fs.Error.ErrorCode.ABORT,\\n  [goog.fs.Error.ErrorName.ENCODING]: goog.fs.Error.ErrorCode.ENCODING,\\n  [goog.fs.Error.ErrorName.INVALID_MODIFICATION]:\\n      goog.fs.Error.ErrorCode.INVALID_MODIFICATION,\\n  [goog.fs.Error.ErrorName.INVALID_STATE]:\\n      goog.fs.Error.ErrorCode.INVALID_STATE,\\n  [goog.fs.Error.ErrorName.NOT_FOUND]: goog.fs.Error.ErrorCode.NOT_FOUND,\\n  [goog.fs.Error.ErrorName.NOT_READABLE]: goog.fs.Error.ErrorCode.NOT_READABLE,\\n  [goog.fs.Error.ErrorName.NO_MODIFICATION_ALLOWED]:\\n      goog.fs.Error.ErrorCode.NO_MODIFICATION_ALLOWED,\\n  [goog.fs.Error.ErrorName.PATH_EXISTS]: goog.fs.Error.ErrorCode.PATH_EXISTS,\\n  [goog.fs.Error.ErrorName.QUOTA_EXCEEDED]:\\n      goog.fs.Error.ErrorCode.QUOTA_EXCEEDED,\\n  [goog.fs.Error.ErrorName.SECURITY]: goog.fs.Error.ErrorCode.SECURITY,\\n  [goog.fs.Error.ErrorName.SYNTAX]: goog.fs.Error.ErrorCode.SYNTAX,\\n  [goog.fs.Error.ErrorName.TYPE_MISMATCH]: goog.fs.Error.ErrorCode.TYPE_MISMATCH\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"fs\",\"DOMErrorLike\",\"goog.fs.DOMErrorLike\",\"prototype\",\"name\",\"code\",\"Error\",\"goog.fs.Error\",\"error\",\"action\",\"undefined\",\"getCodeFromName_\",\"asserts\",\"assertNumber\",\"getNameFromCode_\",\"base\",\"string\",\"subs\",\"inherits\",\"debug\",\"ErrorName\",\"ABORT\",\"ENCODING\",\"INVALID_MODIFICATION\",\"INVALID_STATE\",\"NOT_FOUND\",\"NOT_READABLE\",\"NO_MODIFICATION_ALLOWED\",\"PATH_EXISTS\",\"QUOTA_EXCEEDED\",\"SECURITY\",\"SYNTAX\",\"TYPE_MISMATCH\",\"ErrorCode\",\"goog.fs.Error.getNameFromCode_\",\"object\",\"findKey\",\"NameToCodeMap_\",\"c\",\"goog.fs.Error.getCodeFromName_\"]\n}\n"]