import React, {Component} from 'react'
import {connect} from "react-redux";
import {query} from "../actions/queryActions";
import {Button} from "reactstrap";
import {translations} from "../utils/translations";

class QueryButton extends Component {

    constructor(props) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this)
    }

    handleOnClick() {
        this.props.query(this.props)
    }

    render() {
        return (
            <Button type="button" size="lg" color="primary" className="mr-2" onClick={this.handleOnClick} disabled={this.props.querying}>
                {this.props.querying ?
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="mr-2">{translations[this.props.language.code].queryBuilder.querying}</div>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"/>
                    </div>
                    :
                    translations[this.props.language.code].queryBuilder.queryB}

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
        language: store.settings.language,
        querying: store.query.querying
    }
};

const mapDispatchToProps = (dispatch) => ({
    query(state) {
        dispatch(query(state))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(QueryButton)