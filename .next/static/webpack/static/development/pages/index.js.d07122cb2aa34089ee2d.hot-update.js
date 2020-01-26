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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/helpers */ "./helpers/helpers.js");
/* harmony import */ var _components_Timer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Timer */ "./components/Timer.js");
/* harmony import */ var _components_LapRunner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/LapRunner */ "./components/LapRunner.js");
/* harmony import */ var _components_Runner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Runner */ "./components/Runner.js");








var _jsxFileName = "/Users/youdasilva/Projects/Web Projects/dcsl_test/dcsl_practice1/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;




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
  lapTotal: [0],

  /**
   * Array of lap times in centiseconds. New laps are prepended, so the list is in reverse
   */
  laps: [[]],
  runnersSelected: false,
  runners: [],
  nextRunnerName: "Alex"
};

var HomePage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(HomePage, _React$Component);

  function HomePage() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HomePage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(HomePage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      started: null,
      recordedTime: 0,
      lapTotal: 0,
      laps: [[]],
      runnersSelected: false,
      runners: [],
      nextRunnerName: "Alex"
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "startTimer", function (time) {
      console.log("=== startTimer ===");

      if (_this.state.runners.length == 0) {
        console.log("default runner added");

        _this.addRunner();
      }

      var allLaps = [];
      var allLapTotals = [];

      _this.state.runners.map(function (runner) {
        allLaps[runner] = [];
        allLapTotals[runner] = 0;
      });

      _this.setState({
        started: time,
        runnersSelected: true,
        laps: allLaps,
        lapTotal: allLapTotals
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "stopTimer", function (time) {
      console.log("=== stopTimer ==="); // recordedTime: state.recordedTime + action.time - state.started,
      //     started: null

      _this.setState({
        recordedTime: _this.state.recordedTime + time - _this.state.started,
        started: null
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "resetTimer", function () {
      console.log("=== resetTimer ===");

      _this.setState(initialState);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "addLap", function (position, time) {
      console.log("=== addLap ==="); //for multi runner we'll identify which runner's lap we're updating

      var myRunner = _this.state.runners[position];

      var lapTotalForCurrentRunner = _this.state.laps[myRunner].reduce(function (prev, cur) {
        return prev + cur;
      }, 0);

      var lapTime = time - _this.state.started + _this.state.recordedTime - lapTotalForCurrentRunner;
      var newLapTotalForCurrentRunner = lapTotalForCurrentRunner + lapTime;
      console.log("this.state.laps");
      console.log(_this.state.laps);
      var lapTotal = _this.state.lapTotal;
      lapTotal[position] = newLapTotalForCurrentRunner;
      var allLaps = _this.state.laps;
      var currentRunnerLapList = allLaps[_this.state.runners[position]];
      currentRunnerLapList.push(lapTime);
      allLaps[_this.state.runners[position]] = currentRunnerLapList;

      _this.setState({
        lapTotal: lapTotal,
        laps: allLaps
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "updateNextRunnerName", function (evt) {
      _this.setState({
        nextRunnerName: evt.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "addRunner", function () {
      if (_this.state.nextRunnerName == "") {
        alert("Name Cannot be blank");
      } else if (_this.state.runne) {} else {
        var newRunners = _this.state.runners;
        newRunners.push(_this.state.nextRunnerName);
        console.log(newRunners);

        _this.setState({
          runners: newRunners,
          nextRunnerName: ""
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "removeRunner", function (pos) {
      if (_this.state.runners.length > 1) {
        var listOfRunners = _this.state.runners;
        listOfRunners.splice(pos, 1);

        _this.setState({
          runners: listOfRunners
        });
      } else {
        alert("removing last runner is not possible");
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(HomePage, [{
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
        var now = Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_9__["convertToCentiSeconds"])(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()());
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
          lineNumber: 182
        },
        __self: this
      }, __jsx("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, __jsx("strike", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, "Multi-Runner"), " \"Single-Runner\" Lap Time Tracker built in Next.js!"), this.state.runners.map(function (runnerName, pos) {
        if (_this2.state.runners[0] === undefined) {
          return null;
        } else {
          return __jsx(_components_Runner__WEBPACK_IMPORTED_MODULE_12__["default"], {
            key: pos,
            name: runnerName,
            position: pos,
            removeRunner: function removeRunner() {
              return _this2.removeRunner(pos);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 194
            },
            __self: this
          });
        }
      }), !this.state.runnersSelected ? __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, __jsx("input", {
        type: "text",
        value: this.state.nextRunnerName,
        onChange: function onChange(evt) {
          return _this2.updateNextRunnerName(evt);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }), __jsx("button", {
        onClick: function onClick() {
          return _this2.addRunner();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, "Add Runner"), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      })) : null, __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, !this.state.started ? __jsx("button", {
        onClick: function onClick() {
          return _this2.startTimer(Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_9__["convertToCentiSeconds"])(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, "Start Timer") : __jsx("button", {
        onClick: function onClick() {
          return _this2.stopTimer(Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_9__["convertToCentiSeconds"])(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, "Pause Timer"), this.state.recordedTime > 0 && this.state.started == null ? __jsx("button", {
        onClick: function onClick() {
          return _this2.resetTimer(Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_9__["convertToCentiSeconds"])(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, "Reset Timer") : null, __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      })), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }), " ", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }), __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }), " ", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }), this.state.runnersSelected == true ? __jsx("div", {
        style: {
          display: "inline-block",
          margin: "0 auto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, __jsx(_components_Timer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        label: "Total Time",
        time: this.state.totalTime,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }), __jsx("div", {
        style: {
          display: "flex"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, this.state.runners.map(function (runner, i) {
        return __jsx(_components_LapRunner__WEBPACK_IMPORTED_MODULE_11__["default"], {
          key: i,
          name: runner,
          pos: i,
          laps: _this2.state.laps[runner],
          addLap: function addLap() {
            return _this2.addLap(i, Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_9__["convertToCentiSeconds"])(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()));
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 252
          },
          __self: this
        });
      }))) : null);
    }
  }]);

  return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.d07122cb2aa34089ee2d.hot-update.js.map