/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./examples/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/src/index.js":
/*!*******************************!*\
  !*** ./examples/src/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/index */ \"./src/index.js\");\n\nvar instance = new _src_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  element: '#palette',\n  hsl: {\n    h: 279,\n    s: 50,\n    l: 50\n  },\n  xRatio: 2,\n  yRatio: 2\n});\ninstance.create();\n\n//# sourceURL=webpack:///./examples/src/index.js?");

/***/ }),

/***/ "./src/create.js":
/*!***********************!*\
  !*** ./src/create.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar SYSTEMSIZE = 101;\n\nvar createElement = function createElement(_ref) {\n  var nodeType = _ref.nodeType,\n      style = _ref.style;\n  var element = document.createElement(nodeType);\n\n  if (style instanceof Object) {\n    for (var i in style) {\n      element.style[i] = style[i];\n    }\n  }\n\n  return element;\n};\n\nvar getLineColor = function getLineColor(_ref2) {\n  var lineIndex = _ref2.lineIndex,\n      context = _ref2.context;\n  var _ref3 = [context.h, 0, SYSTEMSIZE - 1 - lineIndex, context.h, SYSTEMSIZE - 1, SYSTEMSIZE - 1 - lineIndex],\n      beginH = _ref3[0],\n      beginS = _ref3[1],\n      beginL = _ref3[2],\n      endH = _ref3[3],\n      endS = _ref3[4],\n      endL = _ref3[5];\n  return {\n    beginColor: \"hsl(\".concat(beginH, \" \").concat(beginS, \"% \").concat(beginL, \"%)\"),\n    endColor: \"hsl(\".concat(endH, \" \").concat(endS, \"% \").concat(endL, \"%)\")\n  };\n};\n\nvar createLine = function createLine(_ref4) {\n  var lineIndex = _ref4.lineIndex,\n      context = _ref4.context;\n  var line = createElement({\n    nodeType: 'div',\n    style: {\n      width: \"\".concat(SYSTEMSIZE * context.xRatio, \"px\"),\n      height: \"\".concat(context.yRatio, \"px\"),\n      margin: '0',\n      padding: '0',\n      border: 'none',\n      outline: 'none',\n      background: \"linear-gradient(to right, \".concat(getLineColor({\n        lineIndex: lineIndex,\n        context: context\n      }).beginColor, \", \").concat(getLineColor({\n        lineIndex: lineIndex,\n        context: context\n      }).endColor, \")\")\n    }\n  });\n  return line;\n};\n\nvar createPanel = function createPanel(context) {\n  var palettePanelElement = createElement({\n    nodeType: 'div',\n    style: {\n      width: \"\".concat(SYSTEMSIZE * context.xRatio, \"px\"),\n      height: \"\".concat(SYSTEMSIZE * context.yRatio, \"px\")\n    }\n  });\n\n  for (var i = 0; i < SYSTEMSIZE; i += 1) {\n    var lineElement = createLine({\n      lineIndex: i,\n      context: context\n    });\n    palettePanelElement.appendChild(lineElement);\n  }\n\n  return palettePanelElement;\n};\n\nvar createBox = function createBox(context) {\n  var paletteBoxElement = createElement({\n    nodeType: 'div'\n  });\n  var palettePanelElement = createPanel(context);\n  paletteBoxElement.appendChild(palettePanelElement);\n  return paletteBoxElement;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var context = this;\n  var paletteBoxElement = createBox(context);\n  context.element.appendChild(paletteBoxElement);\n  return paletteBoxElement;\n});\n\n//# sourceURL=webpack:///./src/create.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./palette */ \"./src/palette.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_palette__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/palette.js":
/*!************************!*\
  !*** ./src/palette.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Palette; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create */ \"./src/create.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar paletteBoxElement = null;\n\nvar Palette =\n/*#__PURE__*/\nfunction () {\n  function Palette() {\n    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object.create(null),\n        _ref$element = _ref.element,\n        element = _ref$element === void 0 ? null : _ref$element,\n        _ref$colorRange = _ref.colorRange,\n        colorRange = _ref$colorRange === void 0 ? Function() : _ref$colorRange,\n        _ref$hsl = _ref.hsl,\n        hsl = _ref$hsl === void 0 ? {\n      h: 0,\n      s: 0,\n      l: 0\n    } : _ref$hsl,\n        _ref$xRatio = _ref.xRatio,\n        xRatio = _ref$xRatio === void 0 ? 3 : _ref$xRatio,\n        _ref$yRatio = _ref.yRatio,\n        yRatio = _ref$yRatio === void 0 ? 2 : _ref$yRatio;\n\n    _classCallCheck(this, Palette);\n\n    this.element = _utils__WEBPACK_IMPORTED_MODULE_0__[\"getHTMLElement\"].call(this, element);\n    this.colorRange = colorRange;\n    this.h = hsl.h;\n    this.s = hsl.s;\n    this.l = hsl.l;\n    this.xRatio = xRatio;\n    this.yRatio = yRatio;\n  }\n\n  _createClass(Palette, [{\n    key: \"create\",\n    value: function create() {\n      return paletteBoxElement = _create__WEBPACK_IMPORTED_MODULE_1__[\"default\"].call(this);\n    }\n  }, {\n    key: \"destory\",\n    value: function destory() {}\n  }, {\n    key: \"get\",\n    value: function get() {}\n  }, {\n    key: \"set\",\n    value: function set(_ref2) {\n      var h = _ref2.h,\n          s = _ref2.s,\n          l = _ref2.l;\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {}\n  }]);\n\n  return Palette;\n}();\n\n\n\n//# sourceURL=webpack:///./src/palette.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getHTMLElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getHTMLElement\", function() { return getHTMLElement; });\nvar getHTMLElement = function getHTMLElement(element) {\n  if (typeof element === 'string') return document.querySelector(element);\n  if (element instanceof HTMLElement) return element;\n  return false;\n};\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });