import { formatTime } from "../helpers/helpers";
export default class Runner extends React.Component {
  render() {
    const { name, position, removeRunner } = this.props;
    return (
      <div>
        <span>
          Runner#{position + 1}: {name}{" "}
        </span>
        <span>
          <button onClick={() => removeRunner(position)}>Remove</button>
        </span>
      </div>
    );
  }
}
