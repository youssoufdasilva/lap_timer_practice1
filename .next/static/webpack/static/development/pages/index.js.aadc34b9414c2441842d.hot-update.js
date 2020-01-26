webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/LapRunner.js":
/*!*********************************!*\
  !*** ./components/LapRunner.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Lap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Lap */ "./components/Lap.js");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/helpers */ "./helpers/helpers.js");

var _jsxFileName = "/Users/youdasilva/Projects/Web Projects/dcsl_test/dcsl_practice1/components/LapRunner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var LapRunner = function LapRunner(_ref) {
  var name = _ref.name,
      pos = _ref.pos,
      laps = _ref.laps,
      addLap = _ref.addLap;
  return __jsx("div", {
    style: {
      margin: "5px",
      padding: "10px",
      border: "3px dotted red"
    },
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
  }, "Runner ", pos + 1, ": "), __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, name), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx("button", {
    onClick: function onClick() {
      return addLap(pos, Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__["convertToCentiSeconds"])(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Add Lap"), __jsx("button", {
    disabled: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "End Run"), laps.slice(0).reverse().map(function (lap, i) {
    // const lapNumber = laps.length - i;
    var lapNumber = i + 1; // label={`Lap #${lapNumber}`} time={lap}
    //

    return __jsx(_Lap__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: lapNumber,
      label: "Lap #".concat(lapNumber),
      time: lap,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LapRunner);

/***/ })

})
//# sourceMappingURL=index.js.aadc34b9414c2441842d.hot-update.js.map