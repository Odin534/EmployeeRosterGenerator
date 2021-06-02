import React from "react";
import { CSVLink } from "react-csv";

class CSVReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeData: this.props.employeeData,
    };
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
        <button>
          <CSVLink {...this.CSV}>Download Roster</CSVLink>
        </button>
      </div>
    );
  }
}

export default CSVReport;
