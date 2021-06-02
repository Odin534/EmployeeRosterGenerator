import React from "react";
import { CSVLink } from "react-csv";

class CSVReport extends React.Component {
  constructor(props) {
    super(props);
    console.log(1,'has rendered',this.props);
  }
  CSV = {
    data: this.props.employeedata,
    header: this.props.header,
    filename: "Roster.csv",
  };
  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({ value: this.props.value });
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
