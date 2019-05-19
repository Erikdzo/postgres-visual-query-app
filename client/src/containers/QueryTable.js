import React, {Component} from 'react';
import {
    Card
} from "reactstrap";
import {addTable, removeTable} from "../actions/queryActions";
import {connect} from "react-redux";
import QueryTableHeader from "../components/QueryTableHeader";
import QueryTableBody from "../components/QueryTableBody";

class QueryTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            target: `t_${props.data.table_schema}_${props.data.table_name.replace(" ", "")}_${props.data.id}`
        };

        this.handleRemoveTable = this.handleRemoveTable.bind(this);
        this.constructData = this.constructData.bind(this);
        this.handleCopy = this.handleCopy.bind(this);
    }


    constructData(column) {
        column.table_name = this.props.data.table_name;
        column.table_schema = this.props.data.table_schema;
        column.table_alias = this.props.data.table_alias;
        column.table_id = this.props.data.id;
        return column
    }

    handleRemoveTable() {
        this.props.removeTable(this.props.data)
    }

    handleCopy() {
        this.props.addTable(this.props.data);
    }

    render() {


        return (
            <Card className="d-inline-flex m-2">
                <QueryTableHeader target={this.state.target} data={this.props.data}
                                  handleRemoveTable={this.handleRemoveTable} handleCopy={this.handleCopy}/>
                <QueryTableBody data={this.props.data}  constructData={this.constructData}/>
            </Card>

        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    removeTable(data) {
        dispatch(removeTable(data))
    },
    addTable(data) {
        dispatch(addTable(data))
    }
});

export default connect(null, mapDispatchToProps)(QueryTable);