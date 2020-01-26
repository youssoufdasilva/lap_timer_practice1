import { formatTime } from "../helpers/helpers";

const Timer = ({ label, time }) => (
  <div>
    <h1>{label}</h1>
    <h2>{formatTime(time)}</h2>
  </div>
);

// function Timer({ stars }) {
//   return <div>Next stars: {stars}</div>
// }

export default Timer;
