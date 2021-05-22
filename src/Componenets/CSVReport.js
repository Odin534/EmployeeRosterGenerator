import React from 'react';
import { CSVLink } from "react-csv";

class CSVReport extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props.employeedata);
    }
    CSV = {
        data: this.props.employeedata,
        header : this.props.header,
        filename : "Roster.csv"
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