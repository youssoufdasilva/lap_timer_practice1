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
/* harmony import */ var _Lap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Lap */ "./components/Lap.js");
var _jsxFileName = "/Users/youdasilva/Projects/Web Projects/dcsl_test/dcsl_practice1/components/LapRunner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var LapRunner = function LapRunner(_ref) {
  var name = _ref.name,
      pos = _ref.pos,
      laps = _ref.laps,
      addLap = _ref.addLap;
  return __jsx("div", {
    style: {
      padding: "10px"
    },
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
  }, "Runner ", pos), __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, name), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx("button", {
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
    var lapNumber = laps.length - i; // label={`Lap #${lapNumber}`} time={lap}
    //

    return __jsx(_Lap__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: "Lap #".concat(lapNumber),
      time: lap,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LapRunner);

/***/ })

})
//# sourceMappingURL=index.js.6bd73bdf877c08833fef.hot-update.js.map