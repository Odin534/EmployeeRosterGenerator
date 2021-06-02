import React from "react";

class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      monday: "",
      tuesday: "",
      wednesday: "",
    };
  }

  setShift = (event) => {
    event.preventDefault();
    this.props.handleCallback(this.state);
  };
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      name: this.props.employee.name,
      age: this.props.employee.age,
    });
  };

  render() {
    return (
      <div>
        <h1>This is Employee Component</h1>
        <h2>{this.props.employee.name}</h2>
        <form>
          <div id={this.props.employee.name}>
            <select name="monday" onChange={this.onChange}>
              <option value="">Select</option>
              <option value="General">General</option>
              <option value="Night">Night</option>
              <option value="Second">Second</option>
              <option value="NoShift">"NoShift"</option>
            </select>
            <select name="tuesday" onChange={this.onChange}>
              <option value="">Select</option>
              <option value="General">General</option>
              <option value="Night">Night</option>
              <option value="Second">Second</option>
              <option value="NoShift">NoShift</option>
            </select>
            <select name="wednesday" onChange={this.onChange}>
              <option value="">Select</option>
              <option value="General">General</option>
              <option value="Night">Night</option>
              <option value="Second">Second</option>
              <option value="NoShift">NoShift</option>
            </select>
          </div>
          <div>
            <button onClick={this.setShift}>Set Shift</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Employee;
