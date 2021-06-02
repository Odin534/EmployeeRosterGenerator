import React from "react";
import { CSVLink } from "react-csv";

class CSVReport extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      employeeData:this.props.employeeData
    }
    console.log(1,'has rendered',this.props);
  }
  CSV = {
    data: this.props.employeedata,
    header: this.props.header,
    filename: "Roster.csv",
  };
  componentDidUpdate(prevProps) {
    if (prevProps.employeedata !== this.props.employeedata) {
      this.setState({ employeedata: this.props.employeedata });
    }
  }
  render() {
    return (
      <div>
        <CSVLink {...this.CSV}>Click This Shit</CSVLink>
      </div>
    );
  }
}

export default CSVReport;