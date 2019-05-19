import React, {Component} from 'react';

import {Container, Row, Col} from 'reactstrap';

import SideBar from "../components/SideBar";
import QueryBuilder from "../components/QueryBuilder";
import {Scrollbars} from "react-custom-scrollbars";


class QueryPage extends Component {

    render() {
        return (

            <Container fluid>
                <Row>
                    <Col sm="2" className="py-2 vh-100 d-flex bg-light">
                        <SideBar/>
                    </Col>

                    <Col sm="10" className="pr-0">
                        <Scrollbars>
                        <QueryBuilder/>
                        </Scrollbars>
                    </Col>
                </Row>

            </Container>
        )
    }
}

export default QueryPage


