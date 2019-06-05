import React, {Component} from 'react';
import {connect} from "react-redux";
import ReactTable from "react-table";
import "react-table/react-table.css";
import _ from 'lodash';

class ResultTable extends Component {


    constructor(props) {
        super(props);

        this.parseRows = this.parseRows.bind(this);
        this.generateColumns = this.generateColumns.bind(this);
    }

    parseRows() {
        let parsedRows = [];

        const rows = _.cloneDeep(this.props.result.rows);


        rows.forEach(row => {

            this.props.result.fields.forEach(field => {
                if (_.isObject(row[field.name])) {
                    row[field.name] = JSON.stringify(row[field.name])
                }
            });

            parsedRows.push(row)
        });

        return parsedRows
    }

    generateColumns() {

        let columns = [];
        columns.push({
            Header: "#",
            id: "row",
            maxWidth: 50,
            filterable: false,
            resizable: false,
            Cell: (row) => {
                return <div>{row.index+1}</div>;
            }
        });
        this.props.result.fields.forEach(field => {
            columns.push({
                Header: field.name,
                accessor: field.name
            })
        });
        return columns
    }

    render() {


        return (

            <div className="result">
                {this.props.result &&
                <ReactTable
                    data={this.parseRows()}
                    columns={this.generateColumns()}
                />
                }


                {this.props.error &&
                <div>
                    {`ERROR: ${this.props.error.message}`}
                    <div className="w-100"/>
                    {`CODE: ${this.props.error.code}`}
                    <div className="w-100"/>
                    {`POSITION: ${this.props.error.position}`}
                </div>
                }
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        result: store.query.result,
        error: store.query.error
    }
};

export default connect(mapStateToProps)(ResultTable)