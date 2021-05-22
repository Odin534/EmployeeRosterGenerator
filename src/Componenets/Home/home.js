import React from "react";
import employeeData from "../Data/emplyeeData";
import Employee from "../Employee/employee";
import CSVReport from "../CSVReport";
import Header from "../Data/headerData";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeData: employeeData,
      Header: Header,
    };
  }
  handleCallback = (e) => {
    this.state.employeeData.map((em) => {
      if (em.name === e.name) {
        this.setState({ em: e });
      }
    });
    // console.log("Inside handleCallback method", this.state.employeeData);
  };

  render() {
    return (
      <div>
        <h1>This is Home Component</h1>
        {this.state.employeeData.map((employee) => {
          return (
            <div>
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
            employeedata={this.state.employeeData}
            Header={this.state.Header}
          >
            
          </CSVReport>
        </div>
      </div>
    );
  }
}

export default Home;
