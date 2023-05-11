["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/fs/filesaver.js"],"~:js","goog.provide(\"goog.fs.FileSaver\");\ngoog.provide(\"goog.fs.FileSaver.EventType\");\ngoog.provide(\"goog.fs.FileSaver.ReadyState\");\ngoog.require(\"goog.events.EventTarget\");\ngoog.require(\"goog.fs.Error\");\ngoog.require(\"goog.fs.ProgressEvent\");\ngoog.fs.FileSaver = function(fileSaver) {\n  goog.fs.FileSaver.base(this, \"constructor\");\n  this.saver_ = fileSaver;\n  this.saver_.onwritestart = goog.bind(this.dispatchProgressEvent_, this);\n  this.saver_.onprogress = goog.bind(this.dispatchProgressEvent_, this);\n  this.saver_.onwrite = goog.bind(this.dispatchProgressEvent_, this);\n  this.saver_.onabort = goog.bind(this.dispatchProgressEvent_, this);\n  this.saver_.onerror = goog.bind(this.dispatchProgressEvent_, this);\n  this.saver_.onwriteend = goog.bind(this.dispatchProgressEvent_, this);\n};\ngoog.inherits(goog.fs.FileSaver, goog.events.EventTarget);\ngoog.fs.FileSaver.ReadyState = {INIT:0, WRITING:1, DONE:2};\ngoog.fs.FileSaver.EventType = {WRITE_START:\"writestart\", PROGRESS:\"progress\", WRITE:\"write\", ABORT:\"abort\", ERROR:\"error\", WRITE_END:\"writeend\"};\ngoog.fs.FileSaver.prototype.abort = function() {\n  try {\n    this.saver_.abort();\n  } catch (e) {\n    throw new goog.fs.Error(e, \"aborting save\");\n  }\n};\ngoog.fs.FileSaver.prototype.getReadyState = function() {\n  return this.saver_.readyState;\n};\ngoog.fs.FileSaver.prototype.getError = function() {\n  return this.saver_.error && new goog.fs.Error(this.saver_.error, \"saving file\");\n};\ngoog.fs.FileSaver.prototype.dispatchProgressEvent_ = function(event) {\n  this.dispatchEvent(new goog.fs.ProgressEvent(event, this));\n};\ngoog.fs.FileSaver.prototype.disposeInternal = function() {\n  delete this.saver_;\n  goog.fs.FileSaver.base(this, \"disposeInternal\");\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview A wrapper for the HTML5 FileSaver object.\n */\n\ngoog.provide('goog.fs.FileSaver');\ngoog.provide('goog.fs.FileSaver.EventType');\ngoog.provide('goog.fs.FileSaver.ReadyState');\n\ngoog.require('goog.events.EventTarget');\ngoog.require('goog.fs.Error');\ngoog.require('goog.fs.ProgressEvent');\n\n\n\n/**\n * An object for monitoring the saving of files. This emits ProgressEvents of\n * the types listed in {@link goog.fs.FileSaver.EventType}.\n *\n * This should not be instantiated directly. Instead, its subclass\n * {@link goog.fs.FileWriter} should be accessed via\n * {@link goog.fs.FileEntry#createWriter}.\n *\n * @param {!FileSaver} fileSaver The underlying FileSaver object.\n * @constructor\n * @extends {goog.events.EventTarget}\n */\ngoog.fs.FileSaver = function(fileSaver) {\n  'use strict';\n  goog.fs.FileSaver.base(this, 'constructor');\n\n  /**\n   * The underlying FileSaver object.\n   *\n   * @type {!FileSaver}\n   * @private\n   */\n  this.saver_ = fileSaver;\n\n  this.saver_.onwritestart = goog.bind(this.dispatchProgressEvent_, this);\n  this.saver_.onprogress = goog.bind(this.dispatchProgressEvent_, this);\n  this.saver_.onwrite = goog.bind(this.dispatchProgressEvent_, this);\n  this.saver_.onabort = goog.bind(this.dispatchProgressEvent_, this);\n  this.saver_.onerror = goog.bind(this.dispatchProgressEvent_, this);\n  this.saver_.onwriteend = goog.bind(this.dispatchProgressEvent_, this);\n};\ngoog.inherits(goog.fs.FileSaver, goog.events.EventTarget);\n\n\n/**\n * Possible states for a FileSaver.\n *\n * @enum {number}\n */\ngoog.fs.FileSaver.ReadyState = {\n  /**\n   * The object has been constructed, but there is no pending write.\n   */\n  INIT: 0,\n  /**\n   * Data is being written.\n   */\n  WRITING: 1,\n  /**\n   * The data has been written to the file, the write was aborted, or an error\n   * occurred.\n   */\n  DONE: 2\n};\n\n\n/**\n * Events emitted by a FileSaver.\n *\n * @enum {string}\n */\ngoog.fs.FileSaver.EventType = {\n  /**\n   * Emitted when the writing begins. readyState will be WRITING.\n   */\n  WRITE_START: 'writestart',\n  /**\n   * Emitted when progress has been made in saving the file. readyState will be\n   * WRITING.\n   */\n  PROGRESS: 'progress',\n  /**\n   * Emitted when the data has been successfully written. readyState will be\n   * WRITING.\n   */\n  WRITE: 'write',\n  /**\n   * Emitted when the writing has been aborted. readyState will be WRITING.\n   */\n  ABORT: 'abort',\n  /**\n   * Emitted when an error is encountered or the writing has been aborted.\n   * readyState will be WRITING.\n   */\n  ERROR: 'error',\n  /**\n   * Emitted when the writing is finished, whether successfully or not.\n   * readyState will be DONE.\n   */\n  WRITE_END: 'writeend'\n};\n\n\n/**\n * Abort the writing of the file.\n */\ngoog.fs.FileSaver.prototype.abort = function() {\n  'use strict';\n  try {\n    this.saver_.abort();\n  } catch (e) {\n    throw new goog.fs.Error(e, 'aborting save');\n  }\n};\n\n\n/**\n * @return {goog.fs.FileSaver.ReadyState} The current state of the FileSaver.\n */\ngoog.fs.FileSaver.prototype.getReadyState = function() {\n  'use strict';\n  return /** @type {goog.fs.FileSaver.ReadyState} */ (this.saver_.readyState);\n};\n\n\n/**\n * @return {goog.fs.Error} The error encountered while writing, if any.\n */\ngoog.fs.FileSaver.prototype.getError = function() {\n  'use strict';\n  return this.saver_.error &&\n      new goog.fs.Error(this.saver_.error, 'saving file');\n};\n\n\n/**\n * Wrap a progress event emitted by the underlying file saver and re-emit it.\n *\n * @param {!ProgressEvent} event The underlying event.\n * @private\n */\ngoog.fs.FileSaver.prototype.dispatchProgressEvent_ = function(event) {\n  'use strict';\n  this.dispatchEvent(new goog.fs.ProgressEvent(event, this));\n};\n\n\n/** @override */\ngoog.fs.FileSaver.prototype.disposeInternal = function() {\n  'use strict';\n  delete this.saver_;\n  goog.fs.FileSaver.base(this, 'disposeInternal');\n};\n","~:compiled-at",1683761004120,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.fs.filesaver.js\",\n\"lineCount\":40,\n\"mappings\":\"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\",\n\"sources\":[\"goog/fs/filesaver.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview A wrapper for the HTML5 FileSaver object.\\n */\\n\\ngoog.provide('goog.fs.FileSaver');\\ngoog.provide('goog.fs.FileSaver.EventType');\\ngoog.provide('goog.fs.FileSaver.ReadyState');\\n\\ngoog.require('goog.events.EventTarget');\\ngoog.require('goog.fs.Error');\\ngoog.require('goog.fs.ProgressEvent');\\n\\n\\n\\n/**\\n * An object for monitoring the saving of files. This emits ProgressEvents of\\n * the types listed in {@link goog.fs.FileSaver.EventType}.\\n *\\n * This should not be instantiated directly. Instead, its subclass\\n * {@link goog.fs.FileWriter} should be accessed via\\n * {@link goog.fs.FileEntry#createWriter}.\\n *\\n * @param {!FileSaver} fileSaver The underlying FileSaver object.\\n * @constructor\\n * @extends {goog.events.EventTarget}\\n */\\ngoog.fs.FileSaver = function(fileSaver) {\\n  'use strict';\\n  goog.fs.FileSaver.base(this, 'constructor');\\n\\n  /**\\n   * The underlying FileSaver object.\\n   *\\n   * @type {!FileSaver}\\n   * @private\\n   */\\n  this.saver_ = fileSaver;\\n\\n  this.saver_.onwritestart = goog.bind(this.dispatchProgressEvent_, this);\\n  this.saver_.onprogress = goog.bind(this.dispatchProgressEvent_, this);\\n  this.saver_.onwrite = goog.bind(this.dispatchProgressEvent_, this);\\n  this.saver_.onabort = goog.bind(this.dispatchProgressEvent_, this);\\n  this.saver_.onerror = goog.bind(this.dispatchProgressEvent_, this);\\n  this.saver_.onwriteend = goog.bind(this.dispatchProgressEvent_, this);\\n};\\ngoog.inherits(goog.fs.FileSaver, goog.events.EventTarget);\\n\\n\\n/**\\n * Possible states for a FileSaver.\\n *\\n * @enum {number}\\n */\\ngoog.fs.FileSaver.ReadyState = {\\n  /**\\n   * The object has been constructed, but there is no pending write.\\n   */\\n  INIT: 0,\\n  /**\\n   * Data is being written.\\n   */\\n  WRITING: 1,\\n  /**\\n   * The data has been written to the file, the write was aborted, or an error\\n   * occurred.\\n   */\\n  DONE: 2\\n};\\n\\n\\n/**\\n * Events emitted by a FileSaver.\\n *\\n * @enum {string}\\n */\\ngoog.fs.FileSaver.EventType = {\\n  /**\\n   * Emitted when the writing begins. readyState will be WRITING.\\n   */\\n  WRITE_START: 'writestart',\\n  /**\\n   * Emitted when progress has been made in saving the file. readyState will be\\n   * WRITING.\\n   */\\n  PROGRESS: 'progress',\\n  /**\\n   * Emitted when the data has been successfully written. readyState will be\\n   * WRITING.\\n   */\\n  WRITE: 'write',\\n  /**\\n   * Emitted when the writing has been aborted. readyState will be WRITING.\\n   */\\n  ABORT: 'abort',\\n  /**\\n   * Emitted when an error is encountered or the writing has been aborted.\\n   * readyState will be WRITING.\\n   */\\n  ERROR: 'error',\\n  /**\\n   * Emitted when the writing is finished, whether successfully or not.\\n   * readyState will be DONE.\\n   */\\n  WRITE_END: 'writeend'\\n};\\n\\n\\n/**\\n * Abort the writing of the file.\\n */\\ngoog.fs.FileSaver.prototype.abort = function() {\\n  'use strict';\\n  try {\\n    this.saver_.abort();\\n  } catch (e) {\\n    throw new goog.fs.Error(e, 'aborting save');\\n  }\\n};\\n\\n\\n/**\\n * @return {goog.fs.FileSaver.ReadyState} The current state of the FileSaver.\\n */\\ngoog.fs.FileSaver.prototype.getReadyState = function() {\\n  'use strict';\\n  return /** @type {goog.fs.FileSaver.ReadyState} */ (this.saver_.readyState);\\n};\\n\\n\\n/**\\n * @return {goog.fs.Error} The error encountered while writing, if any.\\n */\\ngoog.fs.FileSaver.prototype.getError = function() {\\n  'use strict';\\n  return this.saver_.error &&\\n      new goog.fs.Error(this.saver_.error, 'saving file');\\n};\\n\\n\\n/**\\n * Wrap a progress event emitted by the underlying file saver and re-emit it.\\n *\\n * @param {!ProgressEvent} event The underlying event.\\n * @private\\n */\\ngoog.fs.FileSaver.prototype.dispatchProgressEvent_ = function(event) {\\n  'use strict';\\n  this.dispatchEvent(new goog.fs.ProgressEvent(event, this));\\n};\\n\\n\\n/** @override */\\ngoog.fs.FileSaver.prototype.disposeInternal = function() {\\n  'use strict';\\n  delete this.saver_;\\n  goog.fs.FileSaver.base(this, 'disposeInternal');\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"fs\",\"FileSaver\",\"goog.fs.FileSaver\",\"fileSaver\",\"base\",\"saver_\",\"onwritestart\",\"bind\",\"dispatchProgressEvent_\",\"onprogress\",\"onwrite\",\"onabort\",\"onerror\",\"onwriteend\",\"inherits\",\"events\",\"EventTarget\",\"ReadyState\",\"INIT\",\"WRITING\",\"DONE\",\"EventType\",\"WRITE_START\",\"PROGRESS\",\"WRITE\",\"ABORT\",\"ERROR\",\"WRITE_END\",\"prototype\",\"abort\",\"goog.fs.FileSaver.prototype.abort\",\"e\",\"Error\",\"getReadyState\",\"goog.fs.FileSaver.prototype.getReadyState\",\"readyState\",\"getError\",\"goog.fs.FileSaver.prototype.getError\",\"error\",\"goog.fs.FileSaver.prototype.dispatchProgressEvent_\",\"event\",\"dispatchEvent\",\"ProgressEvent\",\"disposeInternal\",\"goog.fs.FileSaver.prototype.disposeInternal\"]\n}\n"]