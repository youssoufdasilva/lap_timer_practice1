webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Lap.js":
/*!***************************!*\
  !*** ./components/Lap.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Lap; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/youdasilva/Projects/Web Projects/dcsl_test/dcsl_practice1/components/Lap.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

var Lap =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Lap, _Component);

  function Lap() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Lap);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Lap).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Lap, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          time = _this$props.time;
      return __jsx("div", {
        className: "lap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        },
        __self: this
      }, __jsx("label", {
        className: "lap__label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, this.props.label), __jsx("h3", {
        className: "lap__clock",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, formatTime(this.props.time)));
    }
  }]);

  return Lap;
}(Component);



/***/ }),

/***/ "./components/LapRunner.js":
/*!*********************************!*\
  !*** ./components/LapRunner.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helpers */ "./helpers/helpers.js");
/* harmony import */ var _Lap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Lap */ "./components/Lap.js");
var _jsxFileName = "/Users/youdasilva/Projects/Web Projects/dcsl_test/dcsl_practice1/components/LapRunner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var LapRunner = function LapRunner(_ref) {
  var pos = _ref.pos,
      laps = _ref.laps,
      addLap = _ref.addLap;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Runner ", pos), __jsx("button", {
    onClick: addLap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Add Lap"), __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "End Run"), laps.map(function (lap, i) {
    var lapNumber = laps.length - 1; // label={`Lap #${lapNumber}`} time={lap}
    //

    return __jsx("div", {
      key: lapNumber,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("label", {
      className: "lap__label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "Lap #".concat(lapNumber)), __jsx("h3", {
      className: "lap__clock",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["formatTime"])(lap)));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LapRunner);

/***/ })

})
//# sourceMappingURL=index.js.6d6c989b87e2665eaa30.hot-update.js.map