import { convertToCentiSeconds } from "../helpers/helpers";
import Timer from "../components/Timer";
import LapRunner from "../components/LapRunner";
import Runner from "../components/Runner";

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

export default class HomePage extends React.Component {
  state = {
    started: null,
    recordedTime: 0,
    lapTotal: 0,
    laps: [[]],
    runnersSelected: false,

    runners: [],
    nextRunnerName: "Alex"
  };

  componentDidMount() {
    this.tick();
  }

  componentDidUpdate() {
    requestAnimationFrame(this.tick.bind(this));
  }

  tick() {
    if (this.state.started) {
      const now = convertToCentiSeconds(Date.now());
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

  startTimer = time => {
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
  };

  stopTimer = time => {
    console.log("=== stopTimer ===");
    // recordedTime: state.recordedTime + action.time - state.started,
    //     started: null
    this.setState({
      recordedTime: this.state.recordedTime + time - this.state.started,
      started: null
    });
  };

  resetTimer = () => {
    console.log("=== resetTimer ===");
    this.setState(initialState);
  };

  addLap = (position, time) => {
    console.log("=== addLap ===");

    //for multi runner we'll identify which runner's lap we're updating
    const myRunner = this.state.runners[position];

    const myRunnersLapTotal = this.state.laps[myRunner].reduce(
      (prev, cur) => prev + cur,
      0 // 0 is the initial value
    );

    const lapTime =
      time - this.state.started + this.state.recordedTime - myRunnersLapTotal;

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
    });

    ///////////////
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
  };

  updateNextRunnerName = evt => {
    this.setState({
      nextRunnerName: evt.target.value
    });
  };

  addRunner = () => {
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
  };

  removeRunner = pos => {
    if (this.state.runners.length > 1) {
      let listOfRunners = this.state.runners;
      listOfRunners.splice(pos, 1);
      this.setState({
        runners: listOfRunners
      });
    } else {
      alert("removing last runner is not possible");
    }
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>
          <strike>Multi-Runner</strike> "Single-Runner" Lap Time Tracker built
          in Next.js!
        </h1>
        {/*  */}
        {/* Runners */}
        {this.state.runners.map((runnerName, pos) => {
          if (this.state.runners[0] === undefined) {
            return null;
          } else {
            return (
              <Runner
                key={pos}
                name={runnerName}
                position={pos}
                removeRunner={() => this.removeRunner(pos)}
              />
            );
          }
        })}
        {!this.state.runnersSelected ? (
          <div>
            <input
              type="text"
              value={this.state.nextRunnerName}
              onChange={evt => this.updateNextRunnerName(evt)}
            />
            <button onClick={() => this.addRunner()}>Add Runner</button>
            <br />
          </div>
        ) : null}
        <br />
        {/*  */}
        {/* Timer Controlers */}
        <div>
          {!this.state.started ? (
            <button
              onClick={() => this.startTimer(convertToCentiSeconds(Date.now()))}
            >
              Start Timer
            </button>
          ) : (
            <button
              onClick={() => this.stopTimer(convertToCentiSeconds(Date.now()))}
            >
              Pause Timer
            </button>
          )}

          {this.state.recordedTime > 0 && this.state.started == null ? (
            <button
              onClick={() => this.resetTimer(convertToCentiSeconds(Date.now()))}
            >
              Reset Timer
            </button>
          ) : null}
          <br />
        </div>
        <br /> <br />
        <hr />
        <br /> <br />
        {/*  */}
        {/* Lap Runners */}
        {this.state.runnersSelected == true ? (
          <div style={{ display: "inline-block", margin: "0 auto" }}>
            <Timer label="Total Time" time={this.state.totalTime}></Timer>
            <div style={{ display: "flex" }}>
              {this.state.runners.map((runner, i) => {
                return (
                  <LapRunner
                    key={i}
                    name={runner}
                    pos={i}
                    laps={this.state.laps[runner]}
                    addLap={() =>
                      this.addLap(i, convertToCentiSeconds(Date.now()))
                    }
                  />
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
