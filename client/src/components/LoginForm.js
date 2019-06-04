import React from 'react';
import {Form, FormGroup, Label, Input, Container, Button} from 'reactstrap'
import {translations} from "../utils/translations";
import {connect} from "react-redux";

const LoginForm = props => (
    <Container>
        <h3>{translations[props.language.code].loginForm.formHeader}</h3>
        <Form onSubmit={props.handleSubmit}>
            <FormGroup>
                <Label htmlFor="hostAddress">{translations[props.language.code].loginForm.serverL}</Label>
                <Input required type="text" className="form-control" id="hostAddress" name="host"
                       placeholder={translations[props.language.code].loginForm.serverPh}
                       value={props.host} onChange={props.handleChange}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="serverPort">{translations[props.language.code].loginForm.portL}</Label>
                <Input required type="number" className="form-control" id="serverPort" name="port"
                       placeholder={translations[props.language.code].loginForm.portPh}
                       value={props.port} onChange={props.handleChange} max="65535"/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="databaseName">{translations[props.language.code].loginForm.databaseL}</Label>
                <Input required type="text" className="form-control" id="databaseName" name="database"
                       placeholder={translations[props.language.code].loginForm.databasePh}
                       value={props.database} onChange={props.handleChange}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="userName">{translations[props.language.code].loginForm.usernameL}</Label>
                <Input required type="text" className="form-control" id="userName" name="user"
                       placeholder={translations[props.language.code].loginForm.usernamePh}
                       value={props.user} onChange={props.handleChange}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="password">{translations[props.language.code].loginForm.passwordL}</Label>
                <Input required type="password" className="form-control" id="password" name="password"
                       placeholder={translations[props.language.code].loginForm.passwordPh}
                       value={props.password} onChange={props.handleChange}/>
            </FormGroup>
            <Button color="primary" type="submit" className="btn-block" disabled={props.connecting}>
                {props.connecting ?
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="mr-2">{translations[props.language.code].loginForm.connecting}</div>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"/>
                    </div>
                    :
                    translations[props.language.code].loginForm.formSubmit}

            </Button>
        </Form>
    </Container>
);

const mapStateToProps = store => {
    return {
        connecting: store.host.connecting
    }
};

export default connect(mapStateToProps) (LoginForm)
