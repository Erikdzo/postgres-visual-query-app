import React, {Component} from 'react';
import {connect} from "react-redux";
import {disconnect} from "../actions/hostActions";
import {Button} from "reactstrap";
import {translations} from "../utils/translations";
import {Redirect} from "react-router-dom";

export class DisconnectButton extends Component {

    constructor() {
        super();

        this.handleOnClick = this.handleOnClick.bind(this)
    }

    handleOnClick() {
        this.props.disconnect();
    }

    render() {
        if (!this.props.connected) {
            return <Redirect to='/'/>
        }

        return (
            <Button size="lg" className="btn-block my-2 px-2" color="danger" onClick={this.handleOnClick}>
                {translations[this.props.language.code].sideBar.disconnectB}</Button>
        )
    }
}

const mapStateToProps = (store) => {
    return ({
        connected: store.host.connected,
        language: store.settings.language
    })
};

const mapDispatchToProps = (dispatch) => ({
    disconnect() { dispatch(disconnect())}
});

export default connect(mapStateToProps, mapDispatchToProps)(DisconnectButton)