import React, { Component } from 'react'
import {Button} from "reactstrap";
import {deleteQuery} from "../actions/queryActions";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";

class DeleteQueryButton extends Component {

    constructor() {
        super();

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        this.props.deleteQuery()
    }

    render() {
        return (
            <Button color="danger" className="mr-2" onClick={this.handleOnClick}><FontAwesomeIcon icon="trash"/></Button>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    deleteQuery() {dispatch(deleteQuery())}
});


export default connect(null, mapDispatchToProps) (DeleteQueryButton)