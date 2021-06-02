import React from "react";
import employeeData from "../Data/emplyeeData";
import Employee from "../Employee/employee";
import CSVReport from "../CSVReport";
import Header from "../Data/headerData";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeRosterData: [],
    };
  }
  handleCallback = (e) => {
    const temp = this.state.employeeRosterData;
    temp.push(e);
    this.setState({ employeeRosterData: temp });
  };

  render() {
    return (
      <div>
        <h1>This is Home Component</h1>
        {employeeData.map((employee, index) => {
          return (
            <div key={employee.name}>
              <div>
                <Employee
                  employee={employee}
                  handleCallback={this.handleCallback}
                />
              </div>
            </div>
          );
        })}
        <div>
          <CSVReport
            employeedata={this.state.employeeRosterData}
            Header={Header}
          ></CSVReport>
        </div>
      </div>
    );
  }
}

export default Home;
