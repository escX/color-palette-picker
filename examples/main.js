window["utils"] =
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
/*! exports provided: colorChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"colorChange\", function() { return colorChange; });\n/* harmony import */ var _src_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/index */ \"./src/index.js\");\n\nvar instance = new _src_index__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  colorRange: function colorRange(color) {\n    for (var i in color) {\n      var input = document.getElementById('color_' + i);\n\n      if (input) {\n        input.value = color[i];\n      }\n    }\n  }\n});\nvar panel = instance.create('panel');\nvar bar = instance.create('bar');\ndocument.getElementById('palette').prepend(bar);\ndocument.getElementById('palette').prepend(panel);\nvar colorChange = function colorChange(target) {\n  var type = target.dataset.type;\n  var value = target.value;\n\n  switch (type) {\n    case 'h':\n      if (Number(value) > 360) {\n        target.value = 360;\n      } else if (Number(value) < 0) {\n        target.value = 0;\n      }\n\n      break;\n\n    default:\n      if (Number(value) > 100) {\n        target.value = 100;\n      } else if (Number(value) < 0) {\n        target.value = 0;\n      }\n\n  }\n\n  var color = {};\n  color[type] = value;\n  instance.set(color);\n};\n\n//# sourceURL=webpack://utils/./examples/src/index.js?");

/***/ }),

/***/ "./src/axis2color.js":
/*!***************************!*\
  !*** ./src/axis2color.js ***!
  \***************************/
/*! exports provided: barAxisToColor, panelAxisToColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"barAxisToColor\", function() { return barAxisToColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"panelAxisToColor\", function() { return panelAxisToColor; });\nvar barAxisToColor = function barAxisToColor(_ref) {\n  var context = _ref.context,\n      x = _ref.x,\n      y = _ref.y;\n  var h = 0;\n\n  if (context.barHorizontal) {\n    h = x / context.barWidth * 360;\n  } else {\n    h = y / context.barHeight * 360;\n  }\n\n  return {\n    h: h\n  };\n};\nvar panelAxisToColor = function panelAxisToColor(_ref2) {\n  var context = _ref2.context,\n      x = _ref2.x,\n      y = _ref2.y;\n  var s = x / context.panelWidth * 100;\n  var l = (context.panelHeight - y) / context.panelHeight * 100;\n  return {\n    s: s,\n    l: l\n  };\n};\n\n//# sourceURL=webpack://utils/./src/axis2color.js?");

/***/ }),

/***/ "./src/axis2position.js":
/*!******************************!*\
  !*** ./src/axis2position.js ***!
  \******************************/
/*! exports provided: barAxisToPosition, panelAxisToPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"barAxisToPosition\", function() { return barAxisToPosition; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"panelAxisToPosition\", function() { return panelAxisToPosition; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nvar barAxisToPosition = function barAxisToPosition(_ref) {\n  var context = _ref.context,\n      x = _ref.x,\n      y = _ref.y;\n  var barPointRadius = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getBarPointRadius\"])(context);\n\n  if (context.barHorizontal) {\n    return {\n      top: -_utils__WEBPACK_IMPORTED_MODULE_0__[\"BAR_POINT_EXCEED\"] / 2,\n      left: x - barPointRadius\n    };\n  } else {\n    return {\n      top: y - barPointRadius,\n      left: -_utils__WEBPACK_IMPORTED_MODULE_0__[\"BAR_POINT_EXCEED\"] / 2\n    };\n  }\n};\nvar panelAxisToPosition = function panelAxisToPosition(_ref2) {\n  var context = _ref2.context,\n      x = _ref2.x,\n      y = _ref2.y;\n  return {\n    top: y - context.panelPointRadius,\n    left: x - context.panelPointRadius\n  };\n};\n\n//# sourceURL=webpack://utils/./src/axis2position.js?");

/***/ }),

/***/ "./src/color2axis.js":
/*!***************************!*\
  !*** ./src/color2axis.js ***!
  \***************************/
/*! exports provided: barColorToAxis, panelColorToAxis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"barColorToAxis\", function() { return barColorToAxis; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"panelColorToAxis\", function() { return panelColorToAxis; });\nvar barColorToAxis = function barColorToAxis(_ref) {\n  var context = _ref.context,\n      h = _ref.h;\n\n  if (context.barHorizontal) {\n    return {\n      x: h / 360 * context.barWidth,\n      y: context.barHeight / 2\n    };\n  } else {\n    return {\n      x: context.barWidth / 2,\n      y: h / 360 * context.barHeight\n    };\n  }\n};\nvar panelColorToAxis = function panelColorToAxis(_ref2) {\n  var context = _ref2.context,\n      s = _ref2.s,\n      l = _ref2.l;\n  var x = s / 100 * context.panelWidth;\n  var y = context.panelHeight - l / 100 * context.panelHeight;\n  return {\n    x: x,\n    y: y\n  };\n};\n\n//# sourceURL=webpack://utils/./src/color2axis.js?");

/***/ }),

/***/ "./src/color2position.js":
/*!*******************************!*\
  !*** ./src/color2position.js ***!
  \*******************************/
/*! exports provided: barColorToPosition, panelColorToPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"barColorToPosition\", function() { return barColorToPosition; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"panelColorToPosition\", function() { return panelColorToPosition; });\n/* harmony import */ var _color2axis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color2axis */ \"./src/color2axis.js\");\n/* harmony import */ var _axis2position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./axis2position */ \"./src/axis2position.js\");\n\n\nvar barColorToPosition = function barColorToPosition(_ref) {\n  var context = _ref.context,\n      h = _ref.h;\n\n  var _barColorToAxis = Object(_color2axis__WEBPACK_IMPORTED_MODULE_0__[\"barColorToAxis\"])({\n    context: context,\n    h: h\n  }),\n      x = _barColorToAxis.x,\n      y = _barColorToAxis.y;\n\n  return Object(_axis2position__WEBPACK_IMPORTED_MODULE_1__[\"barAxisToPosition\"])({\n    context: context,\n    x: x,\n    y: y\n  });\n};\nvar panelColorToPosition = function panelColorToPosition(_ref2) {\n  var context = _ref2.context,\n      s = _ref2.s,\n      l = _ref2.l;\n\n  var _panelColorToAxis = Object(_color2axis__WEBPACK_IMPORTED_MODULE_0__[\"panelColorToAxis\"])({\n    context: context,\n    s: s,\n    l: l\n  }),\n      x = _panelColorToAxis.x,\n      y = _panelColorToAxis.y;\n\n  return Object(_axis2position__WEBPACK_IMPORTED_MODULE_1__[\"panelAxisToPosition\"])({\n    context: context,\n    x: x,\n    y: y\n  });\n};\n\n//# sourceURL=webpack://utils/./src/color2position.js?");

/***/ }),

/***/ "./src/create.js":
/*!***********************!*\
  !*** ./src/create.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ \"./src/style.js\");\n/* harmony import */ var _drag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drag */ \"./src/drag.js\");\n/* harmony import */ var _axis2position__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./axis2position */ \"./src/axis2position.js\");\n/* harmony import */ var _position2color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./position2color */ \"./src/position2color.js\");\n/* harmony import */ var _axis2color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./axis2color */ \"./src/axis2color.js\");\n\n\n\n\n\n\n\nvar createElement = function createElement(_ref) {\n  var nodeType = _ref.nodeType,\n      style = _ref.style,\n      attribute = _ref.attribute;\n  var element = document.createElement(nodeType);\n\n  if (style instanceof Object) {\n    for (var i in style) {\n      element.style[i] = style[i];\n    }\n  }\n\n  if (attribute instanceof Object) {\n    for (var _i in attribute) {\n      element.setAttribute(_i, attribute[_i]);\n    }\n  }\n\n  return element;\n};\n\nvar createLine = function createLine(_ref2) {\n  var context = _ref2.context,\n      lineIndex = _ref2.lineIndex;\n  return createElement({\n    nodeType: 'div',\n    style: Object(_style__WEBPACK_IMPORTED_MODULE_1__[\"lineStyle\"])({\n      context: context,\n      lineIndex: lineIndex\n    })\n  });\n};\n\nvar createPanelPoint = function createPanelPoint(context) {\n  return createElement({\n    nodeType: 'div',\n    style: Object(_style__WEBPACK_IMPORTED_MODULE_1__[\"panelPointStyle\"])(context)\n  });\n};\n\nvar createBarPoint = function createBarPoint(context) {\n  return createElement({\n    nodeType: 'div',\n    style: Object(_style__WEBPACK_IMPORTED_MODULE_1__[\"barPointStyle\"])(context)\n  });\n};\n\nvar createPanel = function createPanel(context) {\n  var panel = createElement({\n    nodeType: 'div',\n    style: Object(_style__WEBPACK_IMPORTED_MODULE_1__[\"panelStyle\"])(context),\n    attribute: {\n      class: context.panelName\n    }\n  });\n  var panelPoint = createPanelPoint(context);\n  _utils__WEBPACK_IMPORTED_MODULE_0__[\"createdElement\"].panelPoint = panelPoint;\n\n  for (var lineIndex = 0; lineIndex < _utils__WEBPACK_IMPORTED_MODULE_0__[\"L_SIZE\"]; lineIndex += 1) {\n    var line = createLine({\n      context: context,\n      lineIndex: lineIndex\n    });\n    panel.appendChild(line);\n  }\n\n  panel.appendChild(panelPoint);\n  new _drag__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n    draggedElement: panelPoint,\n    scopeElement: panel,\n    allowExceed: {\n      x: context.panelPointRadius,\n      y: context.panelPointRadius\n    },\n    clickPosition: function clickPosition(_ref3) {\n      var x = _ref3.x,\n          y = _ref3.y;\n\n      var _panelAxisToPosition = Object(_axis2position__WEBPACK_IMPORTED_MODULE_3__[\"panelAxisToPosition\"])({\n        context: context,\n        x: x,\n        y: y\n      }),\n          top = _panelAxisToPosition.top,\n          left = _panelAxisToPosition.left;\n\n      Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"setPointPosition\"])({\n        element: panelPoint,\n        top: top,\n        left: left\n      });\n      var color = Object(_axis2color__WEBPACK_IMPORTED_MODULE_5__[\"panelAxisToColor\"])({\n        context: context,\n        x: x,\n        y: y\n      });\n      Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"setPointColor\"])({\n        s: color.s,\n        l: color.l,\n        colorRange: context.colorRange\n      });\n    },\n    sliding: function sliding(_ref4) {\n      var top = _ref4.top,\n          left = _ref4.left;\n      Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"setPointPosition\"])({\n        element: panelPoint,\n        top: top,\n        left: left\n      });\n      var color = Object(_position2color__WEBPACK_IMPORTED_MODULE_4__[\"panelPositionToColor\"])({\n        context: context,\n        top: top,\n        left: left\n      });\n      Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"setPointColor\"])({\n        s: color.s,\n        l: color.l,\n        colorRange: context.colorRange\n      });\n    }\n  });\n  return panel;\n};\n\nvar createBar = function createBar(context) {\n  var bar = createElement({\n    nodeType: 'div',\n    style: Object(_style__WEBPACK_IMPORTED_MODULE_1__[\"barStyle\"])(context)\n  });\n  var barPoint = createBarPoint(context);\n  _utils__WEBPACK_IMPORTED_MODULE_0__[\"createdElement\"].barPoint = barPoint;\n  new _drag__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n    draggedElement: barPoint,\n    scopeElement: bar,\n    allowExceed: {\n      x: context.barHorizontal ? Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getBarPointRadius\"])(context) : _utils__WEBPACK_IMPORTED_MODULE_0__[\"BAR_POINT_EXCEED\"] / 2,\n      y: context.barHorizontal ? _utils__WEBPACK_IMPORTED_MODULE_0__[\"BAR_POINT_EXCEED\"] / 2 : Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getBarPointRadius\"])(context)\n    },\n    clickPosition: function clickPosition(_ref5) {\n      var x = _ref5.x,\n          y = _ref5.y;\n\n      var _barAxisToPosition = Object(_axis2position__WEBPACK_IMPORTED_MODULE_3__[\"barAxisToPosition\"])({\n        context: context,\n        x: x,\n        y: y\n      }),\n          top = _barAxisToPosition.top,\n          left = _barAxisToPosition.left;\n\n      Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"setPointPosition\"])({\n        element: barPoint,\n        top: top,\n        left: left\n      });\n      Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"setPointColor\"])({\n        h: Object(_axis2color__WEBPACK_IMPORTED_MODULE_5__[\"barAxisToColor\"])({\n          context: context,\n          x: x,\n          y: y\n        }).h,\n        colorRange: context.colorRange\n      });\n    },\n    sliding: function sliding(_ref6) {\n      var top = _ref6.top,\n          left = _ref6.left;\n      Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"setPointPosition\"])({\n        element: barPoint,\n        top: top,\n        left: left\n      });\n      Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"setPointColor\"])({\n        h: Object(_position2color__WEBPACK_IMPORTED_MODULE_4__[\"barPositionToColor\"])({\n          context: context,\n          top: top,\n          left: left\n        }).h,\n        colorRange: context.colorRange\n      });\n    }\n  });\n  var barWrap = createElement({\n    nodeType: 'div',\n    style: Object(_style__WEBPACK_IMPORTED_MODULE_1__[\"barWrapStyle\"])(context),\n    attribute: {\n      class: context.barName\n    }\n  });\n  barWrap.appendChild(bar);\n  barWrap.appendChild(barPoint);\n  return barWrap;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_ref7) {\n  var context = _ref7.context,\n      type = _ref7.type;\n\n  if (type === _utils__WEBPACK_IMPORTED_MODULE_0__[\"RANGE_TYPE_BAR\"]) {\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"createdElement\"].bar = createBar(context);\n    return _utils__WEBPACK_IMPORTED_MODULE_0__[\"createdElement\"].bar;\n  } else if (type === _utils__WEBPACK_IMPORTED_MODULE_0__[\"RANGE_TYPE_PANEL\"]) {\n    _utils__WEBPACK_IMPORTED_MODULE_0__[\"createdElement\"].panel = createPanel(context);\n    return _utils__WEBPACK_IMPORTED_MODULE_0__[\"createdElement\"].panel;\n  }\n\n  return false;\n});\n\n//# sourceURL=webpack://utils/./src/create.js?");

/***/ }),

/***/ "./src/drag.js":
/*!*********************!*\
  !*** ./src/drag.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Drag; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar addListener = function addListener() {\n  var context = this;\n\n  context.draggedElement.onmousedown = function (event) {\n    var disX = event.clientX - this.offsetLeft;\n    var disY = event.clientY - this.offsetTop;\n\n    document.onmousemove = function (event) {\n      var left = event.clientX - disX;\n      var top = event.clientY - disY;\n      var scopeElement = context.scopeElement;\n      var draggedElement = context.draggedElement;\n\n      if (left < -context.allowExceed.x) {\n        left = -context.allowExceed.x;\n      } else if (left > scopeElement.offsetWidth - draggedElement.offsetWidth + context.allowExceed.x) {\n        left = scopeElement.offsetWidth - draggedElement.offsetWidth + context.allowExceed.x;\n      }\n\n      if (top < -context.allowExceed.y) {\n        top = -context.allowExceed.y;\n      } else if (top > scopeElement.offsetHeight - draggedElement.offsetHeight + context.allowExceed.y) {\n        top = scopeElement.offsetHeight - draggedElement.offsetHeight + context.allowExceed.y;\n      }\n\n      context.sliding({\n        top: top,\n        left: left\n      });\n    };\n\n    document.onmouseup = function () {\n      document.onmousemove = null;\n      document.onmouseup = null;\n    };\n  };\n\n  context.draggedElement.onclick = function (event) {\n    event.stopPropagation();\n  };\n\n  context.scopeElement.onclick = function (event) {\n    context.clickPosition({\n      x: event.layerX,\n      y: event.layerY\n    });\n  };\n};\n\nvar Drag = function Drag(_ref) {\n  var draggedElement = _ref.draggedElement,\n      scopeElement = _ref.scopeElement,\n      allowExceed = _ref.allowExceed,\n      clickPosition = _ref.clickPosition,\n      sliding = _ref.sliding;\n\n  _classCallCheck(this, Drag);\n\n  this.draggedElement = draggedElement;\n  this.scopeElement = scopeElement;\n  this.allowExceed = allowExceed;\n  this.clickPosition = clickPosition;\n  this.sliding = sliding;\n  addListener.call(this);\n};\n\n\n\n//# sourceURL=webpack://utils/./src/drag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./palette */ \"./src/palette.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_palette__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://utils/./src/index.js?");

/***/ }),

/***/ "./src/palette.js":
/*!************************!*\
  !*** ./src/palette.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Palette; });\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./src/create.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _color2position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color2position */ \"./src/color2position.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar Palette =\n/*#__PURE__*/\nfunction () {\n  function Palette() {\n    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object.create(null),\n        _ref$hsl = _ref.hsl,\n        hsl = _ref$hsl === void 0 ? {\n      h: 0,\n      s: 100,\n      l: 50\n    } : _ref$hsl,\n        _ref$panelName = _ref.panelName,\n        panelName = _ref$panelName === void 0 ? 'panel-range' : _ref$panelName,\n        _ref$panelWidth = _ref.panelWidth,\n        panelWidth = _ref$panelWidth === void 0 ? 300 : _ref$panelWidth,\n        _ref$panelHeight = _ref.panelHeight,\n        panelHeight = _ref$panelHeight === void 0 ? 185 : _ref$panelHeight,\n        _ref$panelPointRadius = _ref.panelPointRadius,\n        panelPointRadius = _ref$panelPointRadius === void 0 ? 6 : _ref$panelPointRadius,\n        _ref$barName = _ref.barName,\n        barName = _ref$barName === void 0 ? 'bar-range' : _ref$barName,\n        _ref$barWidth = _ref.barWidth,\n        barWidth = _ref$barWidth === void 0 ? 200 : _ref$barWidth,\n        _ref$barHeight = _ref.barHeight,\n        barHeight = _ref$barHeight === void 0 ? 20 : _ref$barHeight,\n        _ref$barHorizontal = _ref.barHorizontal,\n        barHorizontal = _ref$barHorizontal === void 0 ? true : _ref$barHorizontal,\n        _ref$colorRange = _ref.colorRange,\n        colorRange = _ref$colorRange === void 0 ? Function() : _ref$colorRange;\n\n    _classCallCheck(this, Palette);\n\n    this.h = _utils__WEBPACK_IMPORTED_MODULE_1__[\"pointColor\"].h = Math.round(hsl.h);\n    this.s = _utils__WEBPACK_IMPORTED_MODULE_1__[\"pointColor\"].s = Math.round(hsl.s);\n    this.l = _utils__WEBPACK_IMPORTED_MODULE_1__[\"pointColor\"].l = Math.round(hsl.l);\n    this.panelName = panelName;\n    this.panelWidth = panelWidth;\n    this.panelHeight = panelHeight;\n    this.panelPointRadius = panelPointRadius;\n    this.barName = barName;\n    this.barWidth = barWidth;\n    this.barHeight = barHeight;\n    this.barHorizontal = barHorizontal;\n    this.colorRange = colorRange;\n  }\n\n  _createClass(Palette, [{\n    key: \"create\",\n    value: function create(type) {\n      return Object(_create__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        context: this,\n        type: type\n      });\n    }\n  }, {\n    key: \"destory\",\n    value: function destory() {\n      var panel = _utils__WEBPACK_IMPORTED_MODULE_1__[\"createdElement\"].panel;\n      var bar = _utils__WEBPACK_IMPORTED_MODULE_1__[\"createdElement\"].bar;\n      var panelPoint = _utils__WEBPACK_IMPORTED_MODULE_1__[\"createdElement\"].panelPoint;\n      var barPoint = _utils__WEBPACK_IMPORTED_MODULE_1__[\"createdElement\"].barPoint;\n\n      if (panel) {\n        if (panelPoint) {\n          panel.removeChild(panelPoint);\n          _utils__WEBPACK_IMPORTED_MODULE_1__[\"createdElement\"].panelPoint = null;\n        }\n\n        panel.parentNode.removeChild(panel);\n        _utils__WEBPACK_IMPORTED_MODULE_1__[\"createdElement\"].panel = null;\n      }\n\n      if (bar) {\n        if (barPoint) {\n          bar.removeChild(barPoint);\n          _utils__WEBPACK_IMPORTED_MODULE_1__[\"createdElement\"].barPoint = null;\n        }\n\n        bar.parentNode.removeChild(bar);\n        _utils__WEBPACK_IMPORTED_MODULE_1__[\"createdElement\"].bar = null;\n      }\n    }\n  }, {\n    key: \"get\",\n    value: function get() {\n      return _utils__WEBPACK_IMPORTED_MODULE_1__[\"pointColor\"];\n    }\n  }, {\n    key: \"set\",\n    value: function set(_ref2) {\n      var h = _ref2.h,\n          s = _ref2.s,\n          l = _ref2.l;\n\n      var _barColorToPosition = Object(_color2position__WEBPACK_IMPORTED_MODULE_2__[\"barColorToPosition\"])({\n        context: this,\n        h: h\n      }),\n          barTop = _barColorToPosition.top,\n          barLeft = _barColorToPosition.left;\n\n      Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"setPointPosition\"])({\n        element: _utils__WEBPACK_IMPORTED_MODULE_1__[\"createdElement\"].barPoint,\n        top: barTop,\n        left: barLeft\n      });\n\n      var _panelColorToPosition = Object(_color2position__WEBPACK_IMPORTED_MODULE_2__[\"panelColorToPosition\"])({\n        context: this,\n        s: s,\n        l: l\n      }),\n          panelTop = _panelColorToPosition.top,\n          panelLeft = _panelColorToPosition.left;\n\n      Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"setPointPosition\"])({\n        element: _utils__WEBPACK_IMPORTED_MODULE_1__[\"createdElement\"].panelPoint,\n        top: panelTop,\n        left: panelLeft\n      });\n      Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"setPointColor\"])({\n        h: h,\n        s: s,\n        l: l\n      });\n    }\n  }]);\n\n  return Palette;\n}();\n\n\n\n//# sourceURL=webpack://utils/./src/palette.js?");

/***/ }),

/***/ "./src/position2axis.js":
/*!******************************!*\
  !*** ./src/position2axis.js ***!
  \******************************/
/*! exports provided: barPositionToAxis, panelPositionToAxis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"barPositionToAxis\", function() { return barPositionToAxis; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"panelPositionToAxis\", function() { return panelPositionToAxis; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\nvar barPositionToAxis = function barPositionToAxis(_ref) {\n  var context = _ref.context,\n      top = _ref.top,\n      left = _ref.left;\n  var barPointRadius = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getBarPointRadius\"])(context);\n  return {\n    x: left + barPointRadius,\n    y: top + barPointRadius\n  };\n};\nvar panelPositionToAxis = function panelPositionToAxis(_ref2) {\n  var context = _ref2.context,\n      top = _ref2.top,\n      left = _ref2.left;\n  return {\n    x: left + context.panelPointRadius,\n    y: top + context.panelPointRadius\n  };\n};\n\n//# sourceURL=webpack://utils/./src/position2axis.js?");

/***/ }),

/***/ "./src/position2color.js":
/*!*******************************!*\
  !*** ./src/position2color.js ***!
  \*******************************/
/*! exports provided: barPositionToColor, panelPositionToColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"barPositionToColor\", function() { return barPositionToColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"panelPositionToColor\", function() { return panelPositionToColor; });\n/* harmony import */ var _position2axis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./position2axis */ \"./src/position2axis.js\");\n/* harmony import */ var _axis2color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./axis2color */ \"./src/axis2color.js\");\n\n\nvar barPositionToColor = function barPositionToColor(_ref) {\n  var context = _ref.context,\n      top = _ref.top,\n      left = _ref.left;\n\n  var _barPositionToAxis = Object(_position2axis__WEBPACK_IMPORTED_MODULE_0__[\"barPositionToAxis\"])({\n    context: context,\n    top: top,\n    left: left\n  }),\n      x = _barPositionToAxis.x,\n      y = _barPositionToAxis.y;\n\n  return Object(_axis2color__WEBPACK_IMPORTED_MODULE_1__[\"barAxisToColor\"])({\n    context: context,\n    x: x,\n    y: y\n  });\n};\nvar panelPositionToColor = function panelPositionToColor(_ref2) {\n  var context = _ref2.context,\n      top = _ref2.top,\n      left = _ref2.left;\n\n  var _panelPositionToAxis = Object(_position2axis__WEBPACK_IMPORTED_MODULE_0__[\"panelPositionToAxis\"])({\n    context: context,\n    top: top,\n    left: left\n  }),\n      x = _panelPositionToAxis.x,\n      y = _panelPositionToAxis.y;\n\n  return Object(_axis2color__WEBPACK_IMPORTED_MODULE_1__[\"panelAxisToColor\"])({\n    context: context,\n    x: x,\n    y: y\n  });\n};\n\n//# sourceURL=webpack://utils/./src/position2color.js?");

/***/ }),

/***/ "./src/style.js":
/*!**********************!*\
  !*** ./src/style.js ***!
  \**********************/
/*! exports provided: getLineColor, lineStyle, panelStyle, barStyle, barWrapStyle, panelPointStyle, barPointStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLineColor\", function() { return getLineColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lineStyle\", function() { return lineStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"panelStyle\", function() { return panelStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"barStyle\", function() { return barStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"barWrapStyle\", function() { return barWrapStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"panelPointStyle\", function() { return panelPointStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"barPointStyle\", function() { return barPointStyle; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n/* harmony import */ var _color2position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color2position */ \"./src/color2position.js\");\n\n\nvar getLineColor = function getLineColor(lineIndex) {\n  var colors = [];\n\n  for (var i = 0; i < _utils__WEBPACK_IMPORTED_MODULE_0__[\"S_SIZE\"]; i += 1) {\n    if (i % 5 === 0) {\n      colors.push(\"hsl(\".concat(_utils__WEBPACK_IMPORTED_MODULE_0__[\"pointColor\"].h, \" \").concat(i * 10, \"% \").concat(_utils__WEBPACK_IMPORTED_MODULE_0__[\"L_SIZE\"] - lineIndex - 1, \"%)\"));\n    }\n  }\n\n  return colors;\n};\n\nvar getBarColor = function getBarColor() {\n  var colors = [];\n\n  for (var i = 0; i < _utils__WEBPACK_IMPORTED_MODULE_0__[\"H_SIZE\"]; i += 1) {\n    colors.push(\"hsl(\".concat(i, \", 100%, 50%)\"));\n  }\n\n  return colors;\n};\n\nvar lineStyle = function lineStyle(_ref) {\n  var context = _ref.context,\n      lineIndex = _ref.lineIndex;\n  var lineColor = getLineColor(lineIndex).join(',');\n  return {\n    width: \"\".concat(context.panelWidth, \"px\"),\n    height: \"\".concat(context.panelHeight / _utils__WEBPACK_IMPORTED_MODULE_0__[\"L_SIZE\"], \"px\"),\n    margin: '0',\n    padding: '0',\n    border: 'none',\n    outline: 'none',\n    background: \"linear-gradient(to right, \".concat(lineColor, \")\")\n  };\n};\nvar panelStyle = function panelStyle(context) {\n  return {\n    width: \"\".concat(context.panelWidth, \"px\"),\n    height: \"\".concat(context.panelHeight, \"px\"),\n    position: 'relative',\n    boxSizing: 'content-box',\n    overflow: 'visible'\n  };\n};\nvar barStyle = function barStyle(context) {\n  var barColor = getBarColor().join(',');\n  return {\n    width: \"\".concat(context.barWidth, \"px\"),\n    height: \"\".concat(context.barHeight, \"px\"),\n    background: context.barHorizontal ? \"linear-gradient(to right, \".concat(barColor, \")\") : \"linear-gradient(\".concat(barColor, \")\")\n  };\n};\nvar barWrapStyle = function barWrapStyle(context) {\n  return {\n    width: \"\".concat(context.barWidth, \"px\"),\n    height: \"\".concat(context.barHeight, \"px\"),\n    position: 'relative',\n    boxSizing: 'content-box',\n    overflow: 'visible'\n  };\n};\nvar panelPointStyle = function panelPointStyle(context) {\n  var pointPosition = Object(_color2position__WEBPACK_IMPORTED_MODULE_1__[\"panelColorToPosition\"])({\n    context: context,\n    s: _utils__WEBPACK_IMPORTED_MODULE_0__[\"pointColor\"].s,\n    l: _utils__WEBPACK_IMPORTED_MODULE_0__[\"pointColor\"].l\n  });\n  return {\n    width: \"\".concat(context.panelPointRadius * 2, \"px\"),\n    height: \"\".concat(context.panelPointRadius * 2, \"px\"),\n    borderRadius: '50%',\n    backgroundColor: 'transparent',\n    border: '1px solid #fff',\n    boxShadow: '0 0 2px 0 #000',\n    cursor: 'pointer',\n    boxSizing: 'border-box',\n    position: 'absolute',\n    top: \"\".concat(pointPosition.top, \"px\"),\n    left: \"\".concat(pointPosition.left, \"px\")\n  };\n};\nvar barPointStyle = function barPointStyle(context) {\n  var barPointPosition = Object(_color2position__WEBPACK_IMPORTED_MODULE_1__[\"barColorToPosition\"])({\n    context: context,\n    h: _utils__WEBPACK_IMPORTED_MODULE_0__[\"pointColor\"].h\n  });\n  return {\n    width: \"\".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getBarPointRadius\"])(context) * 2, \"px\"),\n    height: \"\".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getBarPointRadius\"])(context) * 2, \"px\"),\n    borderRadius: '50%',\n    backgroundColor: '#fff',\n    boxShadow: '0 0 2px 0 #000',\n    cursor: 'pointer',\n    position: 'absolute',\n    top: \"\".concat(barPointPosition.top, \"px\"),\n    left: \"\".concat(barPointPosition.left, \"px\")\n  };\n};\n\n//# sourceURL=webpack://utils/./src/style.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getBarPointRadius, setPointPosition, setPointColor, H_SIZE, S_SIZE, L_SIZE, RANGE_TYPE_BAR, RANGE_TYPE_PANEL, BAR_POINT_EXCEED, pointColor, createdElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBarPointRadius\", function() { return getBarPointRadius; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setPointPosition\", function() { return setPointPosition; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setPointColor\", function() { return setPointColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"H_SIZE\", function() { return H_SIZE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"S_SIZE\", function() { return S_SIZE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"L_SIZE\", function() { return L_SIZE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RANGE_TYPE_BAR\", function() { return RANGE_TYPE_BAR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RANGE_TYPE_PANEL\", function() { return RANGE_TYPE_PANEL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BAR_POINT_EXCEED\", function() { return BAR_POINT_EXCEED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pointColor\", function() { return pointColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createdElement\", function() { return createdElement; });\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ \"./src/style.js\");\n\nvar H_SIZE = 361; // h: 0 - 360\n\nvar S_SIZE = 101; // s: 0% - 100%\n\nvar L_SIZE = 101; // l: 0% - 100%\n\nvar RANGE_TYPE_BAR = 'bar';\nvar RANGE_TYPE_PANEL = 'panel';\nvar BAR_POINT_EXCEED = 6; // 调色条滑块超出高度/宽度的长度\n// 创建出的元素节点\n\nvar createdElement = {\n  bar: null,\n  panel: null,\n  barPoint: null,\n  panelPoint: null // 当前调色板指定的颜色\n\n};\nvar pointColor = {\n  h: 0,\n  s: 0,\n  l: 0\n};\nvar getBarPointRadius = function getBarPointRadius(context) {\n  return context.barHorizontal ? (context.barHeight + BAR_POINT_EXCEED) / 2 : (context.barWidth + BAR_POINT_EXCEED) / 2;\n};\n\nvar setPanelColor = function setPanelColor() {\n  for (var index = 0, lines = createdElement.panel.childNodes; index < lines.length - 1; index += 1) {\n    var line = lines[index];\n    var lineColor = Object(_style__WEBPACK_IMPORTED_MODULE_0__[\"getLineColor\"])(index).join(',');\n    line.style.background = \"linear-gradient(to right, \".concat(lineColor, \")\");\n  }\n};\n\nvar setPointPosition = function setPointPosition(_ref) {\n  var element = _ref.element,\n      top = _ref.top,\n      left = _ref.left;\n  element.style.top = \"\".concat(top, \"px\");\n  element.style.left = \"\".concat(left, \"px\");\n};\nvar setPointColor = function setPointColor(_ref2) {\n  var h = _ref2.h,\n      s = _ref2.s,\n      l = _ref2.l,\n      colorRange = _ref2.colorRange;\n  var hasChange = false;\n  h = Math.round(h);\n  s = Math.round(s);\n  l = Math.round(l);\n\n  if (!isNaN(h) && pointColor.h !== h) {\n    hasChange = true;\n    pointColor.h = h;\n    setPanelColor();\n  }\n\n  if (!isNaN(s) && pointColor.s !== s) {\n    hasChange = true;\n    pointColor.s = Math.round(s);\n  }\n\n  if (!isNaN(l) && pointColor.l !== l) {\n    hasChange = true;\n    pointColor.l = Math.round(l);\n  }\n\n  if (hasChange && colorRange instanceof Function) {\n    colorRange({\n      h: pointColor.h,\n      s: pointColor.s,\n      l: pointColor.l\n    });\n  }\n};\n\n\n//# sourceURL=webpack://utils/./src/utils.js?");

/***/ })

/******/ });