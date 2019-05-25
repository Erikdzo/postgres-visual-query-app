import React from 'react';
import {Form, FormGroup, Label, Input, Container} from 'reactstrap'
import {translations} from "../utils/translations";

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
            <Input type="submit" className="btn btn-primary"
                   value={translations[props.language.code].loginForm.formSubmit}/>
        </Form>
    </Container>
);

export default LoginForm
