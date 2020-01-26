module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Lap.js":
/*!***************************!*\
  !*** ./components/Lap.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Lap; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helpers */ "./helpers/helpers.js");
var _jsxFileName = "/Users/youdasilva/Projects/Web Projects/dcsl_test/dcsl_practice1/components/Lap.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class Lap extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const {
      label,
      time
    } = this.props;
    return __jsx("div", {
      className: "lap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, __jsx("label", {
      className: "lap__label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, this.props.label), __jsx("h3", {
      className: "lap__clock",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["formatTime"])(this.props.time)));
  }

}

/***/ }),

/***/ "./components/LapRunner.js":
/*!*********************************!*\
  !*** ./components/LapRunner.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Lap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Lap */ "./components/Lap.js");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/helpers */ "./helpers/helpers.js");
var _jsxFileName = "/Users/youdasilva/Projects/Web Projects/dcsl_test/dcsl_practice1/components/LapRunner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const LapRunner = ({
  name,
  pos,
  laps,
  addLap
}) => __jsx("div", {
  style: {
    margin: "5px",
    padding: "10px",
    border: "3px dotted red"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("label", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "Runner ", pos + 1, ": "), __jsx("label", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, name), __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), __jsx("button", {
  onClick: () => addLap(pos, Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__["convertToCentiSeconds"])(Date.now())),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "Add Lap"), __jsx("button", {
  disabled: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "End Run"), laps.slice(0).reverse().map((lap, i) => {
  const lapNumber = laps.length - i; // const lapNumber = i + 1;
  // label={`Lap #${lapNumber}`} time={lap}
  //

  return __jsx(_Lap__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: lapNumber,
    label: `Lap #${lapNumber}`,
    time: lap,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  });
}));

/* harmony default export */ __webpack_exports__["default"] = (LapRunner);

/***/ }),

/***/ "./components/Runner.js":
/*!******************************!*\
  !*** ./components/Runner.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Runner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helpers */ "./helpers/helpers.js");
var _jsxFileName = "/Users/youdasilva/Projects/Web Projects/dcsl_test/dcsl_practice1/components/Runner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class Runner extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const {
      name,
      position,
      removeRunner
    } = this.props;
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, "Runner#", position + 1, ": ", name, " "), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("button", {
      onClick: () => removeRunner(position),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "Remove")));
  }

}

/***/ }),

/***/ "./components/Timer.js":
/*!*****************************!*\
  !*** ./components/Timer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helpers */ "./helpers/helpers.js");
var _jsxFileName = "/Users/youdasilva/Projects/Web Projects/dcsl_test/dcsl_practice1/components/Timer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Timer = ({
  label,
  time
}) => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, label), __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["formatTime"])(time))); // function Timer({ stars }) {
//   return <div>Next stars: {stars}</div>
// }


/* harmony default export */ __webpack_exports__["default"] = (Timer);

/***/ }),

/***/ "./helpers/helpers.js":
/*!****************************!*\
  !*** ./helpers/helpers.js ***!
  \****************************/
/*! exports provided: formatTime, convertToCentiSeconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return formatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToCentiSeconds", function() { return convertToCentiSeconds; });
function formatTime(timeInCentiSeconds) {
  let minutes = Math.floor(timeInCentiSeconds / 6000);
  let seconds = Math.floor(timeInCentiSeconds % 6000 / 100);
  let centiSeconds = timeInCentiSeconds % 100;

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  if (centiSeconds < 10) {
    centiSeconds = `0${centiSeconds}`;
  }

  return `${minutes}:${seconds}.${centiSeconds}`;
}
function convertToCentiSeconds(timeInMilliseconds) {
  return Math.round(timeInMilliseconds * 0.1);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helpers */ "./helpers/helpers.js");
/* harmony import */ var _components_Timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Timer */ "./components/Timer.js");
/* harmony import */ var _components_LapRunner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LapRunner */ "./components/LapRunner.js");
/* harmony import */ var _components_Runner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Runner */ "./components/Runner.js");
var _jsxFileName = "/Users/youdasilva/Projects/Web Projects/dcsl_test/dcsl_practice1/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const initialState = {
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
class HomePage extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      started: null,
      recordedTime: 0,
      lapTotal: 0,
      laps: [[]],
      runnersSelected: false,
      runners: [],
      nextRunnerName: "Alex"
    });

    _defineProperty(this, "startTimer", time => {
      console.log("=== startTimer ===");

      if (this.state.runners.length == 0) {
        console.log("default runner added");
        this.addRunner();
      }

      let allLaps = [];
      let allLapTotals = [];
      this.state.runners.map(runner => {
        allLaps[runner] = [];
        allLapTotals[runner] = 0;
      });
      this.setState({
        started: time,
        runnersSelected: true,
        laps: allLaps,
        lapTotal: allLapTotals
      });
    });

    _defineProperty(this, "stopTimer", time => {
      console.log("=== stopTimer ==="); // recordedTime: state.recordedTime + action.time - state.started,
      //     started: null

      this.setState({
        recordedTime: this.state.recordedTime + time - this.state.started,
        started: null
      });
    });

    _defineProperty(this, "resetTimer", () => {
      console.log("=== resetTimer ===");
      this.setState(initialState);
    });

    _defineProperty(this, "addLap", (position, time) => {
      console.log("=== addLap ==="); //for multi runner we'll identify which runner's lap we're updating

      const myRunner = this.state.runners[position];
      const myRunnersLapTotal = this.state.laps[myRunner].reduce((prev, cur) => prev + cur, 0 // 0 is the initial value
      );
      const lapTime = time - this.state.started + this.state.recordedTime - myRunnersLapTotal;
      const myRunnersLapTotalUpdated = myRunnersLapTotal + lapTime;
      let lapTotal = this.state.lapTotal;
      lapTotal[position] = myRunnersLapTotalUpdated;
      let allLaps = this.state.laps;
      let currentRunnerLapList = allLaps[this.state.runners[position]];
      currentRunnerLapList.push(lapTime);
      allLaps[this.state.runners[position]] = currentRunnerLapList;
      this.setState({
        lapTotal: lapTotal,
        laps: allLaps
      }); ///////////////
      // let allLaps = [];
      // let allLapTotals = [];
      // this.state.runners.map(runner => {
      //   allLaps[runner] = [];
      //   allLapTotals[runner] = 0;
      // });
      // this.setState({
      //   started: time,
      //   runnersSelected: true,
      //   laps: allLaps,
      //   lapTotal: allLapTotals
      // });
    });

    _defineProperty(this, "updateNextRunnerName", evt => {
      this.setState({
        nextRunnerName: evt.target.value
      });
    });

    _defineProperty(this, "addRunner", () => {
      if (this.state.nextRunnerName == "") {
        alert("Name Cannot be blank");
      } else if (this.state.runners.includes(this.state.nextRunnerName)) {
        alert("Name '" + this.state.nextRunnerName + "' Already exists");
      } else {
        let newRunners = this.state.runners;
        newRunners.push(this.state.nextRunnerName);
        console.log(newRunners);
        this.setState({
          runners: newRunners,
          nextRunnerName: ""
        });
      }
    });

    _defineProperty(this, "removeRunner", pos => {
      if (this.state.runners.length > 1) {
        let listOfRunners = this.state.runners;
        listOfRunners.splice(pos, 1);
        this.setState({
          runners: listOfRunners
        });
      } else {
        alert("removing last runner is not possible");
      }
    });
  }

  componentDidMount() {
    this.tick();
  }

  componentDidUpdate() {
    requestAnimationFrame(this.tick.bind(this));
  }

  tick() {
    if (this.state.started) {
      const now = Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["convertToCentiSeconds"])(Date.now());
      const totalTime = now - this.state.started + this.state.recordedTime;
      this.setState({
        now,
        totalTime,
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

  render() {
    return __jsx("div", {
      style: {
        textAlign: "center"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, __jsx("strike", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, "Multi-Runner"), " \"Single-Runner\" Lap Time Tracker built in Next.js!"), this.state.runners.map((runnerName, pos) => {
      if (this.state.runners[0] === undefined) {
        return null;
      } else {
        return __jsx(_components_Runner__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: pos,
          name: runnerName,
          position: pos,
          removeRunner: () => this.removeRunner(pos),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 207
          },
          __self: this
        });
      }
    }), !this.state.runnersSelected ? __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: this
    }, __jsx("input", {
      type: "text",
      value: this.state.nextRunnerName,
      onChange: evt => this.updateNextRunnerName(evt),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    }), __jsx("button", {
      onClick: () => this.addRunner(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223
      },
      __self: this
    }, "Add Runner"), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224
      },
      __self: this
    })) : null, __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
      },
      __self: this
    }), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230
      },
      __self: this
    }, !this.state.started ? __jsx("button", {
      onClick: () => this.startTimer(Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["convertToCentiSeconds"])(Date.now())),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232
      },
      __self: this
    }, "Start Timer") : __jsx("button", {
      onClick: () => this.stopTimer(Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["convertToCentiSeconds"])(Date.now())),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238
      },
      __self: this
    }, "Pause Timer"), this.state.recordedTime > 0 && this.state.started == null ? __jsx("button", {
      onClick: () => this.resetTimer(Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["convertToCentiSeconds"])(Date.now())),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246
      },
      __self: this
    }, "Reset Timer") : null, __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252
      },
      __self: this
    })), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254
      },
      __self: this
    }), " ", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254
      },
      __self: this
    }), __jsx("hr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255
      },
      __self: this
    }), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256
      },
      __self: this
    }), " ", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256
      },
      __self: this
    }), this.state.runnersSelected == true ? __jsx("div", {
      style: {
        display: "inline-block",
        margin: "0 auto"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260
      },
      __self: this
    }, __jsx(_components_Timer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: "Total Time",
      time: this.state.totalTime,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261
      },
      __self: this
    }), __jsx("div", {
      style: {
        display: "flex"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262
      },
      __self: this
    }, this.state.runners.map((runner, i) => {
      return __jsx(_components_LapRunner__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: i,
        name: runner,
        pos: i,
        laps: this.state.laps[runner],
        addLap: () => this.addLap(i, Object(_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__["convertToCentiSeconds"])(Date.now())),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      });
    }))) : null);
  }

}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/youdasilva/Projects/Web Projects/dcsl_test/dcsl_practice1/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map