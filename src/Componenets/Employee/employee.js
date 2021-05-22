import React from "react";


class Employee extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      employee : this.props.employee,
      handleCallback : this.props.handleCallback
    } 
   }

  setShift = () => {
    // console.log(this.props)
    this.state.employee.monday = document.getElementById("monday").value;
    this.state.employee.tuesday = document.getElementById("tuesday").value;
    this.state.employee.wednesday = document.getElementById("wednesday").value;
    // console.log(this.state.employee);
    this.state.handleCallback(this.state.employee)
  };

  render(){
    return (
      <div>
        <h1>This is Employee Component</h1>
        <h2>{this.state.employee.name}</h2>
        <select id="monday">
          <option value="General">"General"</option>
          <option value="Night">"Night"</option>
          <option value="Baaler">"Baaler"</option>
          <option value="Dhur">"Nisha"</option>
        </select>
        <select id="tuesday">
          <option value="General">"General"</option>
          <option value="Night">"Night"</option>
          <option value="Baaler">"Baaler"</option>
          <option value="Dhur">"Nisha"</option>
        </select>
        <select id="wednesday">
          <option value="General">"General"</option>
          <option value="Night">"Night"</option>
          <option value="Baaler">"Baaler"</option>
          <option value="Dhur">"Nisha"</option>
        </select>
        <div>
          <button onClick={this.setShift}>Set Shift</button>
        </div>
      </div>
    );
  };
};


export default Employee;
