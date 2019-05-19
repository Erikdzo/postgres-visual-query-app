import React, {Component} from 'react';
import LoginForm from "../components/LoginForm";
import {connect} from "react-redux";
import {Alert} from "reactstrap";
import {connectToDatabase} from "../actions/databaseActions";
import {Redirect} from "react-router-dom";


class LoginFormContainer extends Component {

    constructor() {
        super();
        this.state = {
            host: '',
            port: 5432,
            database: '',
            user: '',
            password: '',
            toQuery: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.connectToDatabase(this.state);
    }

    handleChange(e) {
        this.setState({[e.target.name] : e.target.value})
    }

    render() {
        if (this.props.connected
            === true) {
            return <Redirect to='/query'/>
        }


        return (


            <div>
                {this.props.error ? <Alert color="danger">{this.props.error}</Alert>: null}
                <LoginForm {...this.state} language={this.props.language} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>

            </div>
        )
    }

}

const mapStateToProps = (store) => {
    return {
        connected: store.database.connected,
        host: store.host.host,
        port: store.host.port,
        database: store.host.database,
        user: store.host.user,
        error: store.host.error,
        language: store.settings.language
    }
};

const mapDispatchToProps = (dispatch) => ({
    connectToDatabase(state) { dispatch(connectToDatabase(state))}
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer)