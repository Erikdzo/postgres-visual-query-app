import React, {Component} from 'react'
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import {connect} from "react-redux";
import {changeSelectedSchema} from "../actions/databaseActions";
import {withToggle} from "../hocs/withToggle";

class SchemaSelector extends Component {

    handleOnClick(schema) {
        this.props.changeSelectedSchema(schema)
    }

    render() {
        return (
            <div className="mb-2">
                <h5>Schema</h5>
                <Dropdown size="sm" className="w-100" isOpen={this.props.toggleStatus} toggle={this.props.toggle}>
                    <DropdownToggle caret className="w-100 btn btn-light btn-outline-secondary text-truncate">
                        {this.props.selectedSchema}
                    </DropdownToggle>
                    <DropdownMenu>
                        {this.props.schemas.map(schema => {
                            return <DropdownItem key={schema} onClick={() => this.handleOnClick(schema)}>{schema}</DropdownItem>
                        })}
                    </DropdownMenu>
                </Dropdown>

            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        schemas: store.database.schemas,
        selectedSchema: store.database.selectedSchema
    }
};

const mapDispatchToProps = (dispatch) => ({
    changeSelectedSchema(schema) {
        dispatch(changeSelectedSchema(schema))
    }
});

export default withToggle(connect(mapStateToProps, mapDispatchToProps)(SchemaSelector));