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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/index */ \"./src/index.js\");\n\nvar instance = new _src_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  hsl: {\n    h: 279,\n    s: 50,\n    l: 50\n  },\n  barWidth: 190,\n  barHeight: 20,\n  barHorizontal: true\n});\nvar panel = instance.create('panel');\nvar bar = instance.create('bar');\npalette.appendChild(panel);\npalette.appendChild(bar);\n\n//# sourceURL=webpack:///./examples/src/index.js?");

/***/ }),

/***/ "./src/create.js":
/*!***********************!*\
  !*** ./src/create.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ \"./src/style.js\");\n\n\nvar RANGE_TYPE_BAR = 'bar';\nvar RANGE_TYPE_PANEL = 'panel';\n\nvar createElement = function createElement(_ref) {\n  var nodeType = _ref.nodeType,\n      style = _ref.style,\n      attribute = _ref.attribute;\n  var element = document.createElement(nodeType);\n\n  if (style instanceof Object) {\n    for (var i in style) {\n      element.style[i] = style[i];\n    }\n  }\n\n  if (attribute instanceof Object) {\n    for (var _i in attribute) {\n      element.setAttribute(_i, attribute[_i]);\n    }\n  }\n\n  return element;\n};\n\nvar createLine = function createLine(_ref2) {\n  var context = _ref2.context,\n      lineIndex = _ref2.lineIndex;\n  return createElement({\n    nodeType: 'div',\n    style: Object(_style__WEBPACK_IMPORTED_MODULE_1__[\"lineStyle\"])({\n      context: context,\n      lineIndex: lineIndex\n    })\n  });\n};\n\nvar createPanelPoint = function createPanelPoint(context) {\n  return createElement({\n    nodeType: 'div',\n    style: Object(_style__WEBPACK_IMPORTED_MODULE_1__[\"panelPointStyle\"])(context)\n  });\n};\n\nvar createBarPoint = function createBarPoint(context) {\n  return createElement({\n    nodeType: 'div',\n    style: Object(_style__WEBPACK_IMPORTED_MODULE_1__[\"barPointStyle\"])(context)\n  });\n};\n\nvar createPanel = function createPanel(context) {\n  var panel = createElement({\n    nodeType: 'div',\n    style: Object(_style__WEBPACK_IMPORTED_MODULE_1__[\"panelStyle\"])(context),\n    attribute: {\n      class: context.panelName\n    }\n  });\n  var panelPoint = createPanelPoint(context);\n\n  for (var lineIndex = 0; lineIndex < _utils__WEBPACK_IMPORTED_MODULE_0__[\"L_SIZE\"]; lineIndex += 1) {\n    var line = createLine({\n      context: context,\n      lineIndex: lineIndex\n    });\n    panel.appendChild(line);\n  }\n\n  panel.appendChild(panelPoint);\n  return panel;\n};\n\nvar createBar = function createBar(context) {\n  var bar = createElement({\n    nodeType: 'div',\n    style: Object(_style__WEBPACK_IMPORTED_MODULE_1__[\"barStyle\"])(context)\n  });\n  var barPoint = createBarPoint(context);\n  var barWrap = createElement({\n    nodeType: 'div',\n    style: Object(_style__WEBPACK_IMPORTED_MODULE_1__[\"barWrapStyle\"])(context),\n    attribute: {\n      class: context.barName\n    }\n  });\n  barWrap.appendChild(bar);\n  barWrap.appendChild(barPoint);\n  return barWrap;\n};\n\nvar createRange = function createRange(_ref3) {\n  var context = _ref3.context,\n      type = _ref3.type;\n\n  if (type === RANGE_TYPE_BAR) {\n    return createBar(context);\n  } else if (type === RANGE_TYPE_PANEL) {\n    return createPanel(context);\n  }\n\n  return false;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (type) {\n  var context = this;\n  return createRange({\n    context: context,\n    type: type\n  });\n});\n\n//# sourceURL=webpack:///./src/create.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Palette; });\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./src/create.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Palette =\n/*#__PURE__*/\nfunction () {\n  function Palette() {\n    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object.create(null),\n        _ref$hsl = _ref.hsl,\n        hsl = _ref$hsl === void 0 ? {\n      h: 0,\n      s: 0,\n      l: 0\n    } : _ref$hsl,\n        _ref$panelName = _ref.panelName,\n        panelName = _ref$panelName === void 0 ? 'panel-range' : _ref$panelName,\n        _ref$panelWidth = _ref.panelWidth,\n        panelWidth = _ref$panelWidth === void 0 ? 300 : _ref$panelWidth,\n        _ref$panelHeight = _ref.panelHeight,\n        panelHeight = _ref$panelHeight === void 0 ? 185 : _ref$panelHeight,\n        _ref$panelPointRadius = _ref.panelPointRadius,\n        panelPointRadius = _ref$panelPointRadius === void 0 ? 6 : _ref$panelPointRadius,\n        _ref$barName = _ref.barName,\n        barName = _ref$barName === void 0 ? 'bar-range' : _ref$barName,\n        _ref$barWidth = _ref.barWidth,\n        barWidth = _ref$barWidth === void 0 ? 100 : _ref$barWidth,\n        _ref$barHeight = _ref.barHeight,\n        barHeight = _ref$barHeight === void 0 ? 10 : _ref$barHeight,\n        _ref$barHorizontal = _ref.barHorizontal,\n        barHorizontal = _ref$barHorizontal === void 0 ? true : _ref$barHorizontal,\n        _ref$colorRange = _ref.colorRange,\n        colorRange = _ref$colorRange === void 0 ? Function() : _ref$colorRange;\n\n    _classCallCheck(this, Palette);\n\n    this.h = hsl.h;\n    this.s = hsl.s;\n    this.l = hsl.l;\n    this.panelName = panelName;\n    this.panelWidth = panelWidth;\n    this.panelHeight = panelHeight;\n    this.panelPointRadius = panelPointRadius;\n    this.barName = barName;\n    this.barWidth = barWidth;\n    this.barHeight = barHeight;\n    this.barHorizontal = barHorizontal;\n    this.colorRange = colorRange;\n  }\n\n  _createClass(Palette, [{\n    key: \"create\",\n    value: function create(type) {\n      return _create__WEBPACK_IMPORTED_MODULE_0__[\"default\"].call(this, type);\n    }\n  }, {\n    key: \"destory\",\n    value: function destory() {}\n  }, {\n    key: \"get\",\n    value: function get() {}\n  }, {\n    key: \"set\",\n    value: function set(_ref2) {\n      var h = _ref2.h,\n          s = _ref2.s,\n          l = _ref2.l;\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {}\n  }]);\n\n  return Palette;\n}();\n\n\n\n//# sourceURL=webpack:///./src/palette.js?");

/***/ }),

/***/ "./src/style.js":
/*!**********************!*\
  !*** ./src/style.js ***!
  \**********************/
/*! exports provided: lineStyle, panelStyle, barStyle, barWrapStyle, panelPointStyle, barPointStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lineStyle\", function() { return lineStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"panelStyle\", function() { return panelStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"barStyle\", function() { return barStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"barWrapStyle\", function() { return barWrapStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"panelPointStyle\", function() { return panelPointStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"barPointStyle\", function() { return barPointStyle; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\nvar getLineColor = function getLineColor(_ref) {\n  var context = _ref.context,\n      lineIndex = _ref.lineIndex;\n  var colors = [];\n\n  for (var i = 0; i < _utils__WEBPACK_IMPORTED_MODULE_0__[\"S_SIZE\"]; i += 1) {\n    colors.push(\"hsl(\".concat(context.h, \" \").concat(i, \"% \").concat(_utils__WEBPACK_IMPORTED_MODULE_0__[\"L_SIZE\"] - lineIndex - 1, \"%)\"));\n  }\n\n  return colors;\n};\n\nvar getBarColor = function getBarColor() {\n  var colors = [];\n\n  for (var i = 0; i < _utils__WEBPACK_IMPORTED_MODULE_0__[\"H_SIZE\"]; i += 1) {\n    colors.push(\"hsl(\".concat(i, \", 100%, 50%)\"));\n  }\n\n  return colors;\n};\n\nvar lineStyle = function lineStyle(_ref2) {\n  var context = _ref2.context,\n      lineIndex = _ref2.lineIndex;\n  var lineColor = getLineColor({\n    context: context,\n    lineIndex: lineIndex\n  }).join(',');\n  return {\n    width: \"\".concat(context.panelWidth, \"px\"),\n    height: \"\".concat(context.panelHeight / _utils__WEBPACK_IMPORTED_MODULE_0__[\"L_SIZE\"], \"px\"),\n    margin: '0',\n    padding: '0',\n    border: 'none',\n    outline: 'none',\n    background: \"linear-gradient(to right, \".concat(lineColor, \")\")\n  };\n};\nvar panelStyle = function panelStyle(context) {\n  return {\n    width: \"\".concat(context.panelWidth, \"px\"),\n    height: \"\".concat(context.panelHeight, \"px\"),\n    position: 'relative'\n  };\n};\nvar barStyle = function barStyle(context) {\n  var barColor = getBarColor().join(',');\n  return {\n    width: \"\".concat(context.barWidth, \"px\"),\n    height: \"\".concat(context.barHeight, \"px\"),\n    background: context.barHorizontal ? \"linear-gradient(to right, \".concat(barColor, \")\") : \"linear-gradient(\".concat(barColor, \")\")\n  };\n};\nvar barWrapStyle = function barWrapStyle(context) {\n  return {\n    width: \"\".concat(context.barWidth, \"px\"),\n    height: \"\".concat(context.barHeight, \"px\"),\n    position: 'relative'\n  };\n};\nvar panelPointStyle = function panelPointStyle(context) {\n  return {\n    width: \"\".concat(context.panelPointRadius * 2, \"px\"),\n    height: \"\".concat(context.panelPointRadius * 2, \"px\"),\n    borderRadius: '50%',\n    backgroundColor: 'transparent',\n    border: '1px solid #fff',\n    boxShadow: '0 0 2px 0 #000',\n    cursor: 'pointer',\n    boxSizing: 'border-box',\n    position: 'absolute',\n    top: '0',\n    left: '0'\n  };\n};\nvar barPointStyle = function barPointStyle(context) {\n  return {\n    width: \"\".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getBarPointRadius\"])(context) * 2, \"px\"),\n    height: \"\".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getBarPointRadius\"])(context) * 2, \"px\"),\n    borderRadius: '50%',\n    backgroundColor: '#fff',\n    boxShadow: '0 0 2px 0 #000',\n    cursor: 'pointer',\n    position: 'absolute',\n    top: '-3px',\n    left: '-3px'\n  };\n};\n\n//# sourceURL=webpack:///./src/style.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getBarPointRadius, H_SIZE, S_SIZE, L_SIZE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBarPointRadius\", function() { return getBarPointRadius; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"H_SIZE\", function() { return H_SIZE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"S_SIZE\", function() { return S_SIZE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"L_SIZE\", function() { return L_SIZE; });\nvar H_SIZE = 361; // h: 0 - 360\n\nvar S_SIZE = 101; // s: 0% - 100%\n\nvar L_SIZE = 101; // l: 0% - 100%\n\nvar POINT_BEYOND_LENGTH = 6; // 调色条滑块超出高度/宽度的长度\n\nvar getBarPointRadius = function getBarPointRadius(context) {\n  return context.barHorizontal ? (context.barHeight + POINT_BEYOND_LENGTH) / 2 : (context.barWidth + POINT_BEYOND_LENGTH) / 2;\n};\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });