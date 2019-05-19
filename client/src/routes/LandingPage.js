import React, { Component } from 'react';
import LoginFormContainer from "../containers/LoginFormContainer"
import {Col, Container, Row} from "reactstrap";
import LanguageSwitcher from "../containers/LanguageSwitcher";


class LandingPage extends Component {

    render() {
        return (
            <Container className="vh-100 pt-4">
                <Row>
                    <Col>
                        <LanguageSwitcher/>
                    </Col>
                </Row>
                <Row className="justify-content-center pt-4">
                    <Col sm="9" md="7" lg="5" className="">
                        <LoginFormContainer/>
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default LandingPage;
