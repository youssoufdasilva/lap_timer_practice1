import Lap from "./Lap";
import { convertToCentiSeconds } from "../helpers/helpers";

const LapRunner = ({ name, pos, laps, addLap }) => (
  <div style={{ margin: "5px", padding: "10px", border: "3px dotted red" }}>
    <label>Runner {pos + 1}: </label>
    <label>{name}</label>
    <br />
    <button onClick={() => addLap(pos, convertToCentiSeconds(Date.now()))}>
      Add Lap
    </button>
    <button disabled>End Run</button>
    {laps
      .slice(0)
      .reverse()
      .map((lap, i) => {
        const lapNumber = laps.length - i;
        // const lapNumber = i + 1;
        // label={`Lap #${lapNumber}`} time={lap}
        //
        return <Lap key={lapNumber} label={`Lap #${lapNumber}`} time={lap} />;
      })}
  </div>
);

export default LapRunner;
