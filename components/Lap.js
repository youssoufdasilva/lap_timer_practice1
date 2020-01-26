import { formatTime } from "../helpers/helpers";
export default class Lap extends React.Component {
  render() {
    const { label, time } = this.props;
    return (
      <div className="lap">
        <label className="lap__label">{this.props.label}</label>
        <h3 className="lap__clock">{formatTime(this.props.time)}</h3>
      </div>
    );
  }
}
