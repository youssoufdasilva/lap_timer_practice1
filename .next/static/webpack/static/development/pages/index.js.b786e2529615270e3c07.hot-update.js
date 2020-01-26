webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/helpers */ "./helpers/helpers.js");
/* harmony import */ var _components_Timer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Timer */ "./components/Timer.js");
/* harmony import */ var _components_LapRunner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/LapRunner */ "./components/LapRunner.js");
/* harmony import */ var _components_Runner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Runner */ "./components/Runner.js");









var _jsxFileName = "/Users/youdasilva/Projects/Web Projects/dcsl_test/dcsl_practice1/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;




var initialState = {
  /**
   * Epoch timestamp of when the timer was started in centiseconds
   */
  started: null,

  /**
   * Total time recorded when stopping the timer in centiseconds
   */
  recordedTime: 0,

  /**
   * Sum of lap times in centiseconds
   * Setting this value on each lap so it doesn't need to be
   * calculated when rendering
   */
  lapTotal: 0,

  /**
   * Array of lap times in centiseconds. New laps are prepended, so the list is in reverse
   */
  laps: []
};

var HomePage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(HomePage, _React$Component);

  function HomePage() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, HomePage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(HomePage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      started: null,
      recordedTime: 0,
      lapTotal: 0,
      laps: [],
      runners: ["Alex"],
      nextRunnerName: "" // currentLapTime: [0][0]

    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "startTimer", function (time) {
      _this.setState({
        started: time
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "stopTimer", function (time) {
      // recordedTime: state.recordedTime + action.time - state.started,
      //     started: null
      _this.setState({
        recordedTime: _this.state.recordedTime + time - _this.state.started,
        started: null
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "resetTimer", function () {
      _this.setState(initialState);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "addLap", function (time) {
      //for multi runner we'll identify which runner's lap we're updating
      var lapTotal = _this.state.laps.reduce(function (prev, cur) {
        return prev + cur;
      }, 0);

      var lapTime = time - _this.state.started + _this.state.recordedTime - lapTotal;
      var newLapTotal = lapTotal + lapTime;

      _this.setState({
        lapTotal: newLapTotal,
        laps: [lapTime].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.state.laps))
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "updateNextRunnerName", function (evt) {
      _this.setState({
        nextRunnerName: evt.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "addRunner", function () {
      if (_this.state.nextRunnerName == "") {
        alert("Name Cannot be blank");
      } else {
        var newRunners = _this.state.runners;
        newRunners.push(_this.state.nextRunnerName);

        _this.setState({
          runners: newRunners,
          nextRunnerName: ""
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "removeRunner", function (pos) {
      alert("removing runner from pos" + pos);
      var listOfRunners = _this.state.runners;
      listOfRunners.splice(pos, 1);

      if (_this.state.runners.length > 1) {
        _this.setState({
          runners: listOfRunners
        });
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(HomePage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.tick();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      requestAnimationFrame(this.tick.bind(this));
    }
  }, {
    key: "tick",
    value: function tick() {
      if (this.state.started) {
        var now = Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_10__["convertToCentiSeconds"])(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()());
        var totalTime = now - this.state.started + this.state.recordedTime;
        this.setState({
          now: now,
          totalTime: totalTime,
          currentLapTime: totalTime - this.state.lapTotal
        });
      } else {
        if (this.state.recordedTime !== this.state.totalTime) {
          this.setState({
            totalTime: this.state.recordedTime,
            currentLapTime: this.state.recordedTime - this.state.lapTotal
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        style: {
          textAlign: "center"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, __jsx("strike", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "Multi-Runner"), " \"Single-Runner\" Lap Time Tracker built in Next.js!"), this.state.runners.map(function (runnerName, pos) {
        return __jsx(_components_Runner__WEBPACK_IMPORTED_MODULE_13__["default"], {
          name: runnerName,
          position: pos,
          removeRunner: function removeRunner() {
            return _this2.removeRunner(pos);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          },
          __self: this
        });
      }), __jsx("input", {
        type: "text",
        value: this.state.nextRunnerName,
        onChange: function onChange(evt) {
          return _this2.updateNextRunnerName(evt);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }), __jsx("button", {
        onClick: function onClick() {
          return _this2.addRunner();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, "Add Runner #", this.state.runners.length + 1), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }), " ", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }), __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }), " ", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, !this.state.started ? __jsx("button", {
        onClick: function onClick() {
          return _this2.startTimer(Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_10__["convertToCentiSeconds"])(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, "Start Timer") : __jsx("button", {
        onClick: function onClick() {
          return _this2.stopTimer(Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_10__["convertToCentiSeconds"])(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, "Pause Timer"), this.state.recordedTime > 0 && this.state.started == null ? __jsx("button", {
        onClick: function onClick() {
          return _this2.resetTimer(Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_10__["convertToCentiSeconds"])(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, "Reset Timer") : null, __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }), __jsx(_components_Timer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        label: "Total Time",
        time: this.state.totalTime,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      })), __jsx("div", {
        style: {
          display: "flex"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, __jsx(_components_LapRunner__WEBPACK_IMPORTED_MODULE_12__["default"], {
        pos: 1,
        laps: this.state.laps,
        addLap: function addLap() {
          return _this2.addLap(Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_10__["convertToCentiSeconds"])(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }), __jsx(_components_LapRunner__WEBPACK_IMPORTED_MODULE_12__["default"], {
        pos: 2,
        laps: this.state.laps,
        addLap: function addLap() {
          return _this2.addLap(Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_10__["convertToCentiSeconds"])(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      })));
    }
  }]);

  return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.b786e2529615270e3c07.hot-update.js.map