["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/asserts/dom.js"],"~:js","goog.loadModule(function(exports) {\n  \"use strict\";\n  goog.module(\"goog.asserts.dom\");\n  goog.module.declareLegacyNamespace();\n  const TagName = goog.require(\"goog.dom.TagName\");\n  const asserts = goog.require(\"goog.asserts\");\n  const element = goog.require(\"goog.dom.element\");\n  const assertIsElement = value => {\n    if (asserts.ENABLE_ASSERTS && !element.isElement(value)) {\n      asserts.fail(`Argument is not an Element; got: ${debugStringForType(value)}`);\n    }\n    return value;\n  };\n  const assertIsHtmlElement = value => {\n    if (asserts.ENABLE_ASSERTS && !element.isHtmlElement(value)) {\n      asserts.fail(`Argument is not an HTML Element; got: ${debugStringForType(value)}`);\n    }\n    return value;\n  };\n  const assertIsHtmlElementOfType = (value, tagName) => {\n    if (asserts.ENABLE_ASSERTS && !element.isHtmlElementOfType(value, tagName)) {\n      asserts.fail(`Argument is not an HTML Element with tag name ` + `${tagName.toString()}; got: ${debugStringForType(value)}`);\n    }\n    return value;\n  };\n  const assertIsHtmlAnchorElement = value => {\n    return assertIsHtmlElementOfType(value, TagName.A);\n  };\n  const assertIsHtmlButtonElement = value => {\n    return assertIsHtmlElementOfType(value, TagName.BUTTON);\n  };\n  const assertIsHtmlLinkElement = value => {\n    return assertIsHtmlElementOfType(value, TagName.LINK);\n  };\n  const assertIsHtmlImageElement = value => {\n    return assertIsHtmlElementOfType(value, TagName.IMG);\n  };\n  const assertIsHtmlAudioElement = value => {\n    return assertIsHtmlElementOfType(value, TagName.AUDIO);\n  };\n  const assertIsHtmlVideoElement = value => {\n    return assertIsHtmlElementOfType(value, TagName.VIDEO);\n  };\n  const assertIsHtmlInputElement = value => {\n    return assertIsHtmlElementOfType(value, TagName.INPUT);\n  };\n  const assertIsHtmlTextAreaElement = value => {\n    return assertIsHtmlElementOfType(value, TagName.TEXTAREA);\n  };\n  const assertIsHtmlCanvasElement = value => {\n    return assertIsHtmlElementOfType(value, TagName.CANVAS);\n  };\n  const assertIsHtmlEmbedElement = value => {\n    return assertIsHtmlElementOfType(value, TagName.EMBED);\n  };\n  const assertIsHtmlFormElement = value => {\n    return assertIsHtmlElementOfType(value, TagName.FORM);\n  };\n  const assertIsHtmlFrameElement = value => {\n    return assertIsHtmlElementOfType(value, TagName.FRAME);\n  };\n  const assertIsHtmlIFrameElement = value => {\n    return assertIsHtmlElementOfType(value, TagName.IFRAME);\n  };\n  const assertIsHtmlObjectElement = value => {\n    return assertIsHtmlElementOfType(value, TagName.OBJECT);\n  };\n  const assertIsHtmlScriptElement = value => {\n    return assertIsHtmlElementOfType(value, TagName.SCRIPT);\n  };\n  const debugStringForType = value => {\n    if (goog.isObject(value)) {\n      try {\n        return value.constructor.displayName || value.constructor.name || Object.prototype.toString.call(value);\n      } catch (e) {\n        return \"\\x3cobject could not be stringified\\x3e\";\n      }\n    } else {\n      return value === undefined ? \"undefined\" : value === null ? \"null\" : typeof value;\n    }\n  };\n  exports = {assertIsElement, assertIsHtmlElement, assertIsHtmlElementOfType, assertIsHtmlAnchorElement, assertIsHtmlButtonElement, assertIsHtmlLinkElement, assertIsHtmlImageElement, assertIsHtmlAudioElement, assertIsHtmlVideoElement, assertIsHtmlInputElement, assertIsHtmlTextAreaElement, assertIsHtmlCanvasElement, assertIsHtmlEmbedElement, assertIsHtmlFormElement, assertIsHtmlFrameElement, assertIsHtmlIFrameElement, assertIsHtmlObjectElement, assertIsHtmlScriptElement,};\n  return exports;\n});\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\ngoog.module('goog.asserts.dom');\ngoog.module.declareLegacyNamespace();\n\nconst TagName = goog.require('goog.dom.TagName');\nconst asserts = goog.require('goog.asserts');\nconst element = goog.require('goog.dom.element');\n\n/**\n * Checks if the value is a DOM Element if goog.asserts.ENABLE_ASSERTS is true.\n * @param {*} value The value to check.\n * @return {!Element} The value, likely to be a DOM Element when asserts are\n *     enabled.\n * @throws {!asserts.AssertionError} When the value is not an Element.\n * @closurePrimitive {asserts.matchesReturn}\n */\nconst assertIsElement = (value) => {\n  if (asserts.ENABLE_ASSERTS && !element.isElement(value)) {\n    asserts.fail(\n        `Argument is not an Element; got: ${debugStringForType(value)}`);\n  }\n  return /** @type {!Element} */ (value);\n};\n\n/**\n * Checks if the value is a DOM HTMLElement if goog.asserts.ENABLE_ASSERTS is\n * true.\n * @param {*} value The value to check.\n * @return {!HTMLElement} The value, likely to be a DOM HTMLElement when asserts\n *     are enabled.\n * @throws {!asserts.AssertionError} When the value is not an HTMLElement.\n * @closurePrimitive {asserts.matchesReturn}\n */\nconst assertIsHtmlElement = (value) => {\n  if (asserts.ENABLE_ASSERTS && !element.isHtmlElement(value)) {\n    asserts.fail(\n        `Argument is not an HTML Element; got: ${debugStringForType(value)}`);\n  }\n  return /** @type {!HTMLElement} */ (value);\n};\n\n/**\n * Checks if the value is a DOM HTMLElement of the specified tag name / subclass\n * if goog.asserts.ENABLE_ASSERTS is true.\n * @param {*} value The value to check.\n * @param {!TagName<T>} tagName The element tagName to verify the value against.\n * @return {T} The value, likely to be a DOM HTMLElement when asserts are\n *     enabled. The exact return type will match the parameterized type\n *     of the tagName as specified in goog.dom.TagName.\n * @throws {!asserts.AssertionError} When the value is not an HTMLElement with\n *     the appropriate tagName.\n * @template T\n * @closurePrimitive {asserts.matchesReturn}\n */\nconst assertIsHtmlElementOfType = (value, tagName) => {\n  if (asserts.ENABLE_ASSERTS && !element.isHtmlElementOfType(value, tagName)) {\n    asserts.fail(\n        `Argument is not an HTML Element with tag name ` +\n        `${tagName.toString()}; got: ${debugStringForType(value)}`);\n  }\n  return /** @type {T} */ (value);\n};\n\n/**\n * Checks if the value is an HTMLAnchorElement if goog.asserts.ENABLE_ASSERTS is\n * true.\n * @param {*} value\n * @return {!HTMLAnchorElement}\n * @throws {!asserts.AssertionError}\n * @closurePrimitive {asserts.matchesReturn}\n */\nconst assertIsHtmlAnchorElement = (value) => {\n  return assertIsHtmlElementOfType(value, TagName.A);\n};\n\n/**\n * Checks if the value is an HTMLButtonElement if goog.asserts.ENABLE_ASSERTS is\n * true.\n * @param {*} value\n * @return {!HTMLButtonElement}\n * @throws {!asserts.AssertionError}\n * @closurePrimitive {asserts.matchesReturn}\n */\nconst assertIsHtmlButtonElement = (value) => {\n  return assertIsHtmlElementOfType(value, TagName.BUTTON);\n};\n\n/**\n * Checks if the value is an HTMLLinkElement if goog.asserts.ENABLE_ASSERTS is\n * true.\n * @param {*} value\n * @return {!HTMLLinkElement}\n * @throws {!asserts.AssertionError}\n * @closurePrimitive {asserts.matchesReturn}\n */\nconst assertIsHtmlLinkElement = (value) => {\n  return assertIsHtmlElementOfType(value, TagName.LINK);\n};\n\n/**\n * Checks if the value is an HTMLImageElement if goog.asserts.ENABLE_ASSERTS is\n * true.\n * @param {*} value\n * @return {!HTMLImageElement}\n * @throws {!asserts.AssertionError}\n * @closurePrimitive {asserts.matchesReturn}\n */\nconst assertIsHtmlImageElement = (value) => {\n  return assertIsHtmlElementOfType(value, TagName.IMG);\n};\n\n/**\n * Checks if the value is an HTMLAudioElement if goog.asserts.ENABLE_ASSERTS is\n * true.\n * @param {*} value\n * @return {!HTMLAudioElement}\n * @throws {!asserts.AssertionError}\n * @closurePrimitive {asserts.matchesReturn}\n */\nconst assertIsHtmlAudioElement = (value) => {\n  return assertIsHtmlElementOfType(value, TagName.AUDIO);\n};\n\n/**\n * Checks if the value is an HTMLVideoElement if goog.asserts.ENABLE_ASSERTS is\n * true.\n * @param {*} value\n * @return {!HTMLVideoElement}\n * @throws {!asserts.AssertionError}\n * @closurePrimitive {asserts.matchesReturn}\n */\nconst assertIsHtmlVideoElement = (value) => {\n  return assertIsHtmlElementOfType(value, TagName.VIDEO);\n};\n\n/**\n * Checks if the value is an HTMLInputElement if goog.asserts.ENABLE_ASSERTS is\n * true.\n * @param {*} value\n * @return {!HTMLInputElement}\n * @throws {!asserts.AssertionError}\n * @closurePrimitive {asserts.matchesReturn}\n */\nconst assertIsHtmlInputElement = (value) => {\n  return assertIsHtmlElementOfType(value, TagName.INPUT);\n};\n\n/**\n * Checks if the value is an HTMLTextAreaElement if goog.asserts.ENABLE_ASSERTS\n * is true.\n * @param {*} value\n * @return {!HTMLTextAreaElement}\n * @throws {!asserts.AssertionError}\n * @closurePrimitive {asserts.matchesReturn}\n */\nconst assertIsHtmlTextAreaElement = (value) => {\n  return assertIsHtmlElementOfType(value, TagName.TEXTAREA);\n};\n\n/**\n * Checks if the value is an HTMLCanvasElement if goog.asserts.ENABLE_ASSERTS is\n * true.\n * @param {*} value\n * @return {!HTMLCanvasElement}\n * @throws {!asserts.AssertionError}\n * @closurePrimitive {asserts.matchesReturn}\n */\nconst assertIsHtmlCanvasElement = (value) => {\n  return assertIsHtmlElementOfType(value, TagName.CANVAS);\n};\n\n/**\n * Checks if the value is an HTMLEmbedElement if goog.asserts.ENABLE_ASSERTS is\n * true.\n * @param {*} value\n * @return {!HTMLEmbedElement}\n * @throws {!asserts.AssertionError}\n * @closurePrimitive {asserts.matchesReturn}\n */\nconst assertIsHtmlEmbedElement = (value) => {\n  return assertIsHtmlElementOfType(value, TagName.EMBED);\n};\n\n/**\n * Checks if the value is an HTMLFormElement if goog.asserts.ENABLE_ASSERTS is\n * true.\n * @param {*} value\n * @return {!HTMLFormElement}\n * @throws {!asserts.AssertionError}\n * @closurePrimitive {asserts.matchesReturn}\n */\nconst assertIsHtmlFormElement = (value) => {\n  return assertIsHtmlElementOfType(value, TagName.FORM);\n};\n\n/**\n * Checks if the value is an HTMLFrameElement if goog.asserts.ENABLE_ASSERTS is\n * true.\n * @param {*} value\n * @return {!HTMLFrameElement}\n * @throws {!asserts.AssertionError}\n * @closurePrimitive {asserts.matchesReturn}\n */\nconst assertIsHtmlFrameElement = (value) => {\n  return assertIsHtmlElementOfType(value, TagName.FRAME);\n};\n\n/**\n * Checks if the value is an HTMLIFrameElement if goog.asserts.ENABLE_ASSERTS is\n * true.\n * @param {*} value\n * @return {!HTMLIFrameElement}\n * @throws {!asserts.AssertionError}\n * @closurePrimitive {asserts.matchesReturn}\n */\nconst assertIsHtmlIFrameElement = (value) => {\n  return assertIsHtmlElementOfType(value, TagName.IFRAME);\n};\n\n/**\n * Checks if the value is an HTMLObjectElement if goog.asserts.ENABLE_ASSERTS is\n * true.\n * @param {*} value\n * @return {!HTMLObjectElement}\n * @throws {!asserts.AssertionError}\n * @closurePrimitive {asserts.matchesReturn}\n */\nconst assertIsHtmlObjectElement = (value) => {\n  return assertIsHtmlElementOfType(value, TagName.OBJECT);\n};\n\n/**\n * Checks if the value is an HTMLScriptElement if goog.asserts.ENABLE_ASSERTS is\n * true.\n * @param {*} value\n * @return {!HTMLScriptElement}\n * @throws {!asserts.AssertionError}\n * @closurePrimitive {asserts.matchesReturn}\n */\nconst assertIsHtmlScriptElement = (value) => {\n  return assertIsHtmlElementOfType(value, TagName.SCRIPT);\n};\n\n/**\n * Returns a string representation of a value's type.\n * @param {*} value An object, or primitive.\n * @return {string} The best display name for the value.\n */\nconst debugStringForType = (value) => {\n  if (goog.isObject(value)) {\n    try {\n      return /** @type {string|undefined} */ (value.constructor.displayName) ||\n          value.constructor.name ||\n          Object.prototype.toString.call(value);\n    } catch (e) {\n      return '<object could not be stringified>';\n    }\n  } else {\n    return value === undefined ? 'undefined' :\n                                 value === null ? 'null' : typeof value;\n  }\n};\n\nexports = {\n  assertIsElement,\n  assertIsHtmlElement,\n  assertIsHtmlElementOfType,\n  assertIsHtmlAnchorElement,\n  assertIsHtmlButtonElement,\n  assertIsHtmlLinkElement,\n  assertIsHtmlImageElement,\n  assertIsHtmlAudioElement,\n  assertIsHtmlVideoElement,\n  assertIsHtmlInputElement,\n  assertIsHtmlTextAreaElement,\n  assertIsHtmlCanvasElement,\n  assertIsHtmlEmbedElement,\n  assertIsHtmlFormElement,\n  assertIsHtmlFrameElement,\n  assertIsHtmlIFrameElement,\n  assertIsHtmlObjectElement,\n  assertIsHtmlScriptElement,\n};\n","~:compiled-at",1683761003758,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.asserts.dom.js\",\n\"lineCount\":85,\n\"mappings\":\"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\",\n\"sources\":[\"goog/asserts/dom.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\ngoog.module('goog.asserts.dom');\\ngoog.module.declareLegacyNamespace();\\n\\nconst TagName = goog.require('goog.dom.TagName');\\nconst asserts = goog.require('goog.asserts');\\nconst element = goog.require('goog.dom.element');\\n\\n/**\\n * Checks if the value is a DOM Element if goog.asserts.ENABLE_ASSERTS is true.\\n * @param {*} value The value to check.\\n * @return {!Element} The value, likely to be a DOM Element when asserts are\\n *     enabled.\\n * @throws {!asserts.AssertionError} When the value is not an Element.\\n * @closurePrimitive {asserts.matchesReturn}\\n */\\nconst assertIsElement = (value) => {\\n  if (asserts.ENABLE_ASSERTS && !element.isElement(value)) {\\n    asserts.fail(\\n        `Argument is not an Element; got: ${debugStringForType(value)}`);\\n  }\\n  return /** @type {!Element} */ (value);\\n};\\n\\n/**\\n * Checks if the value is a DOM HTMLElement if goog.asserts.ENABLE_ASSERTS is\\n * true.\\n * @param {*} value The value to check.\\n * @return {!HTMLElement} The value, likely to be a DOM HTMLElement when asserts\\n *     are enabled.\\n * @throws {!asserts.AssertionError} When the value is not an HTMLElement.\\n * @closurePrimitive {asserts.matchesReturn}\\n */\\nconst assertIsHtmlElement = (value) => {\\n  if (asserts.ENABLE_ASSERTS && !element.isHtmlElement(value)) {\\n    asserts.fail(\\n        `Argument is not an HTML Element; got: ${debugStringForType(value)}`);\\n  }\\n  return /** @type {!HTMLElement} */ (value);\\n};\\n\\n/**\\n * Checks if the value is a DOM HTMLElement of the specified tag name / subclass\\n * if goog.asserts.ENABLE_ASSERTS is true.\\n * @param {*} value The value to check.\\n * @param {!TagName<T>} tagName The element tagName to verify the value against.\\n * @return {T} The value, likely to be a DOM HTMLElement when asserts are\\n *     enabled. The exact return type will match the parameterized type\\n *     of the tagName as specified in goog.dom.TagName.\\n * @throws {!asserts.AssertionError} When the value is not an HTMLElement with\\n *     the appropriate tagName.\\n * @template T\\n * @closurePrimitive {asserts.matchesReturn}\\n */\\nconst assertIsHtmlElementOfType = (value, tagName) => {\\n  if (asserts.ENABLE_ASSERTS && !element.isHtmlElementOfType(value, tagName)) {\\n    asserts.fail(\\n        `Argument is not an HTML Element with tag name ` +\\n        `${tagName.toString()}; got: ${debugStringForType(value)}`);\\n  }\\n  return /** @type {T} */ (value);\\n};\\n\\n/**\\n * Checks if the value is an HTMLAnchorElement if goog.asserts.ENABLE_ASSERTS is\\n * true.\\n * @param {*} value\\n * @return {!HTMLAnchorElement}\\n * @throws {!asserts.AssertionError}\\n * @closurePrimitive {asserts.matchesReturn}\\n */\\nconst assertIsHtmlAnchorElement = (value) => {\\n  return assertIsHtmlElementOfType(value, TagName.A);\\n};\\n\\n/**\\n * Checks if the value is an HTMLButtonElement if goog.asserts.ENABLE_ASSERTS is\\n * true.\\n * @param {*} value\\n * @return {!HTMLButtonElement}\\n * @throws {!asserts.AssertionError}\\n * @closurePrimitive {asserts.matchesReturn}\\n */\\nconst assertIsHtmlButtonElement = (value) => {\\n  return assertIsHtmlElementOfType(value, TagName.BUTTON);\\n};\\n\\n/**\\n * Checks if the value is an HTMLLinkElement if goog.asserts.ENABLE_ASSERTS is\\n * true.\\n * @param {*} value\\n * @return {!HTMLLinkElement}\\n * @throws {!asserts.AssertionError}\\n * @closurePrimitive {asserts.matchesReturn}\\n */\\nconst assertIsHtmlLinkElement = (value) => {\\n  return assertIsHtmlElementOfType(value, TagName.LINK);\\n};\\n\\n/**\\n * Checks if the value is an HTMLImageElement if goog.asserts.ENABLE_ASSERTS is\\n * true.\\n * @param {*} value\\n * @return {!HTMLImageElement}\\n * @throws {!asserts.AssertionError}\\n * @closurePrimitive {asserts.matchesReturn}\\n */\\nconst assertIsHtmlImageElement = (value) => {\\n  return assertIsHtmlElementOfType(value, TagName.IMG);\\n};\\n\\n/**\\n * Checks if the value is an HTMLAudioElement if goog.asserts.ENABLE_ASSERTS is\\n * true.\\n * @param {*} value\\n * @return {!HTMLAudioElement}\\n * @throws {!asserts.AssertionError}\\n * @closurePrimitive {asserts.matchesReturn}\\n */\\nconst assertIsHtmlAudioElement = (value) => {\\n  return assertIsHtmlElementOfType(value, TagName.AUDIO);\\n};\\n\\n/**\\n * Checks if the value is an HTMLVideoElement if goog.asserts.ENABLE_ASSERTS is\\n * true.\\n * @param {*} value\\n * @return {!HTMLVideoElement}\\n * @throws {!asserts.AssertionError}\\n * @closurePrimitive {asserts.matchesReturn}\\n */\\nconst assertIsHtmlVideoElement = (value) => {\\n  return assertIsHtmlElementOfType(value, TagName.VIDEO);\\n};\\n\\n/**\\n * Checks if the value is an HTMLInputElement if goog.asserts.ENABLE_ASSERTS is\\n * true.\\n * @param {*} value\\n * @return {!HTMLInputElement}\\n * @throws {!asserts.AssertionError}\\n * @closurePrimitive {asserts.matchesReturn}\\n */\\nconst assertIsHtmlInputElement = (value) => {\\n  return assertIsHtmlElementOfType(value, TagName.INPUT);\\n};\\n\\n/**\\n * Checks if the value is an HTMLTextAreaElement if goog.asserts.ENABLE_ASSERTS\\n * is true.\\n * @param {*} value\\n * @return {!HTMLTextAreaElement}\\n * @throws {!asserts.AssertionError}\\n * @closurePrimitive {asserts.matchesReturn}\\n */\\nconst assertIsHtmlTextAreaElement = (value) => {\\n  return assertIsHtmlElementOfType(value, TagName.TEXTAREA);\\n};\\n\\n/**\\n * Checks if the value is an HTMLCanvasElement if goog.asserts.ENABLE_ASSERTS is\\n * true.\\n * @param {*} value\\n * @return {!HTMLCanvasElement}\\n * @throws {!asserts.AssertionError}\\n * @closurePrimitive {asserts.matchesReturn}\\n */\\nconst assertIsHtmlCanvasElement = (value) => {\\n  return assertIsHtmlElementOfType(value, TagName.CANVAS);\\n};\\n\\n/**\\n * Checks if the value is an HTMLEmbedElement if goog.asserts.ENABLE_ASSERTS is\\n * true.\\n * @param {*} value\\n * @return {!HTMLEmbedElement}\\n * @throws {!asserts.AssertionError}\\n * @closurePrimitive {asserts.matchesReturn}\\n */\\nconst assertIsHtmlEmbedElement = (value) => {\\n  return assertIsHtmlElementOfType(value, TagName.EMBED);\\n};\\n\\n/**\\n * Checks if the value is an HTMLFormElement if goog.asserts.ENABLE_ASSERTS is\\n * true.\\n * @param {*} value\\n * @return {!HTMLFormElement}\\n * @throws {!asserts.AssertionError}\\n * @closurePrimitive {asserts.matchesReturn}\\n */\\nconst assertIsHtmlFormElement = (value) => {\\n  return assertIsHtmlElementOfType(value, TagName.FORM);\\n};\\n\\n/**\\n * Checks if the value is an HTMLFrameElement if goog.asserts.ENABLE_ASSERTS is\\n * true.\\n * @param {*} value\\n * @return {!HTMLFrameElement}\\n * @throws {!asserts.AssertionError}\\n * @closurePrimitive {asserts.matchesReturn}\\n */\\nconst assertIsHtmlFrameElement = (value) => {\\n  return assertIsHtmlElementOfType(value, TagName.FRAME);\\n};\\n\\n/**\\n * Checks if the value is an HTMLIFrameElement if goog.asserts.ENABLE_ASSERTS is\\n * true.\\n * @param {*} value\\n * @return {!HTMLIFrameElement}\\n * @throws {!asserts.AssertionError}\\n * @closurePrimitive {asserts.matchesReturn}\\n */\\nconst assertIsHtmlIFrameElement = (value) => {\\n  return assertIsHtmlElementOfType(value, TagName.IFRAME);\\n};\\n\\n/**\\n * Checks if the value is an HTMLObjectElement if goog.asserts.ENABLE_ASSERTS is\\n * true.\\n * @param {*} value\\n * @return {!HTMLObjectElement}\\n * @throws {!asserts.AssertionError}\\n * @closurePrimitive {asserts.matchesReturn}\\n */\\nconst assertIsHtmlObjectElement = (value) => {\\n  return assertIsHtmlElementOfType(value, TagName.OBJECT);\\n};\\n\\n/**\\n * Checks if the value is an HTMLScriptElement if goog.asserts.ENABLE_ASSERTS is\\n * true.\\n * @param {*} value\\n * @return {!HTMLScriptElement}\\n * @throws {!asserts.AssertionError}\\n * @closurePrimitive {asserts.matchesReturn}\\n */\\nconst assertIsHtmlScriptElement = (value) => {\\n  return assertIsHtmlElementOfType(value, TagName.SCRIPT);\\n};\\n\\n/**\\n * Returns a string representation of a value's type.\\n * @param {*} value An object, or primitive.\\n * @return {string} The best display name for the value.\\n */\\nconst debugStringForType = (value) => {\\n  if (goog.isObject(value)) {\\n    try {\\n      return /** @type {string|undefined} */ (value.constructor.displayName) ||\\n          value.constructor.name ||\\n          Object.prototype.toString.call(value);\\n    } catch (e) {\\n      return '<object could not be stringified>';\\n    }\\n  } else {\\n    return value === undefined ? 'undefined' :\\n                                 value === null ? 'null' : typeof value;\\n  }\\n};\\n\\nexports = {\\n  assertIsElement,\\n  assertIsHtmlElement,\\n  assertIsHtmlElementOfType,\\n  assertIsHtmlAnchorElement,\\n  assertIsHtmlButtonElement,\\n  assertIsHtmlLinkElement,\\n  assertIsHtmlImageElement,\\n  assertIsHtmlAudioElement,\\n  assertIsHtmlVideoElement,\\n  assertIsHtmlInputElement,\\n  assertIsHtmlTextAreaElement,\\n  assertIsHtmlCanvasElement,\\n  assertIsHtmlEmbedElement,\\n  assertIsHtmlFormElement,\\n  assertIsHtmlFrameElement,\\n  assertIsHtmlIFrameElement,\\n  assertIsHtmlObjectElement,\\n  assertIsHtmlScriptElement,\\n};\\n\"],\n\"names\":[\"goog\",\"module\",\"declareLegacyNamespace\",\"TagName\",\"require\",\"asserts\",\"element\",\"assertIsElement\",\"value\",\"ENABLE_ASSERTS\",\"isElement\",\"fail\",\"debugStringForType\",\"assertIsHtmlElement\",\"isHtmlElement\",\"assertIsHtmlElementOfType\",\"tagName\",\"isHtmlElementOfType\",\"toString\",\"assertIsHtmlAnchorElement\",\"A\",\"assertIsHtmlButtonElement\",\"BUTTON\",\"assertIsHtmlLinkElement\",\"LINK\",\"assertIsHtmlImageElement\",\"IMG\",\"assertIsHtmlAudioElement\",\"AUDIO\",\"assertIsHtmlVideoElement\",\"VIDEO\",\"assertIsHtmlInputElement\",\"INPUT\",\"assertIsHtmlTextAreaElement\",\"TEXTAREA\",\"assertIsHtmlCanvasElement\",\"CANVAS\",\"assertIsHtmlEmbedElement\",\"EMBED\",\"assertIsHtmlFormElement\",\"FORM\",\"assertIsHtmlFrameElement\",\"FRAME\",\"assertIsHtmlIFrameElement\",\"IFRAME\",\"assertIsHtmlObjectElement\",\"OBJECT\",\"assertIsHtmlScriptElement\",\"SCRIPT\",\"isObject\",\"constructor\",\"displayName\",\"name\",\"Object\",\"prototype\",\"call\",\"e\",\"undefined\",\"exports\"]\n}\n"]