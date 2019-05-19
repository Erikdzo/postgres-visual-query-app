import React, {Component} from 'react'
import {Button, Tooltip} from "reactstrap";
import {connect} from "react-redux";
import {addColumn, addTable, removeTable} from "../actions/queryActions";
import _ from 'lodash';
import {withToggle} from "../hocs/withToggle";

class DatabaseTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: this.props.checked
        };

        this.handleOnClick = this.handleOnClick.bind(this);
        this.constructData = this.constructData.bind(this);

    }

    handleOnClick() {
        if (!this.props.checked) {
            this.props.addTable(this.props.data);
        } else {
            this.props.removeTable(this.props.data)
        }
    }


    constructData(column) {

        let data = JSON.parse(JSON.stringify(column));

        data.table_name = this.props.data.table_name;
        data.table_schema = this.props.data.table_schema;

        return data
    }

    render() {
        let table_type_color = "primary";
        if (_.isEqual(this.props.data.table_type, "VIEW")) {
            table_type_color = "info"
        } else if (_.isEqual(this.props.data.table_type, "FOREIGN")) {
            table_type_color = "secondary"
        } else if (_.isEqual(this.props.data.table_type, "MATERIALIZED VIEW")) {
            table_type_color = "light"
        }

        let btn_selected = this.props.checked ? "success" : table_type_color;

        const modifiers = {
            preventOverflow: {
                enabled: false,
            },
            hide: {
                enabled: false
            }
        };


        return (

            <div className="w-100 pr-1">
                <Button size="sm" color={btn_selected} id={this.props.id} className="btn-block my-1 pt-0 text-left" onClick={this.handleOnClick}>
                    <small color={table_type_color} className="text-truncate align-self-start">{this.props.data.table_type}</small>
                    <div className="text-truncate">{this.props.data.table_name}</div>
                </Button>
                <Tooltip placement="right" isOpen={this.props.toggleStatus} target={this.props.id} toggle={this.props.toggle} modifiers={modifiers} delay={{ show: 200, hide: 0 }} className="">{this.props.data.table_name}</Tooltip>
            </div>

        );
    }
}



const mapDispatchToProps = (dispatch) => ({
    addColumn(column) {
        dispatch(addColumn(column))
    },
    addTable(data) {
        dispatch(addTable(data))
    },
    removeTable(data) {
        dispatch(removeTable(data))
    }
});


export default withToggle(connect(null, mapDispatchToProps) (DatabaseTable));