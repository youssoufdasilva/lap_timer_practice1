webpackHotUpdate("static/development/pages/index.js",{

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
var _jsxFileName = "/Users/youdasilva/Projects/Web Projects/dcsl_test/dcsl_practice1/components/LapRunner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var LapRunner = function LapRunner(_ref) {
  var pos = _ref.pos,
      laps = _ref.laps;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "Runner ", pos), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["formatTime"])(time)), __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Add Lap"), __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "End Run"), laps.map(function (lap, i) {
    var lapNumber = laps.length - 1; // label={`Lap #${lapNumber}`} time={lap}
    //

    return __jsx("div", {
      key: lapNumber,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("label", {
      className: "lap__label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "Lap #".concat(lapNumber)), __jsx("h3", {
      className: "lap__clock",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["formatTime"])(lap)));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LapRunner);

/***/ })

})
//# sourceMappingURL=index.js.19cad4f20e62d81f2562.hot-update.js.map