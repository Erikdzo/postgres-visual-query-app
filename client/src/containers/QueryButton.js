import React, {Component} from 'react'
import {connect} from "react-redux";
import {query} from "../actions/queryActions";
import {Button} from "reactstrap";
import {translations} from "../utils/translations";

class QueryButton extends Component {

    constructor() {
        super();

        this.handleOnClick = this.handleOnClick.bind(this)
    }

    handleOnClick() {
        this.props.query(this.props)
    }

    render() {
        return (
            <Button type="button" size="lg" color="primary" className="mr-2" onClick={this.handleOnClick}>
                {translations[this.props.language.code].queryBuilder.queryB}
            </Button>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        host: store.host.host,
        port: store.host.port,
        database: store.host.database,
        user: store.host.user,
        password: store.host.password,
        sql: store.query.sql,
        language: store.settings.language
    }
};

const mapDispatchToProps = (dispatch) => ({
    query(state) {
        dispatch(query(state))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(QueryButton)