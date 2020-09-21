import React, { Component } from "react";
import Calendar from "react-calendar";
import moment from "moment";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      note: "",
    };
  }

  getDate = (date) => {
    console.log(new Date(date), "this.state.date");
    this.setState({
      date: date,
    });
  };

  render() {
    return (
      <React.Fragment>
        <Calendar
          onChange={(date) => this.getDate(date)}
          value={this.state.date}
        />
        <br />
        <div className="cal">
          <textarea
            placeholder="Note..."
            rows="4"
            cols="50"
            onChange={(e) => {
              this.setState({
                note: e.target.value,
              });
            }}
          ></textarea>
        </div>
        <div>
          <label>
            <strong>Date :</strong>
          </label>
          {this.state.date
            ? moment(this.state.date).format("MM/DD/yyyy")
            : "NA"}
          <br />
          <label>
            <strong>Note :</strong>
          </label>
          {this.state.note}
        </div>
      </React.Fragment>
    );
  }
}

export default Note;
