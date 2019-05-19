import React from 'react'
import {Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane} from "reactstrap";
import QueryColumnList from "./QueryColumnList";
import {withTabSwitcher} from "../hocs/withTabSwitcher";
import JoinList from "./JoinList";

const QueryTabs = props => {
    return (
        <div>
            <Nav tabs className="flex-row">
                <NavItem>
                    <NavLink
                        className={props.activeTab === '1' ? 'active' : ''}
                        onClick={() => {
                            props.toggle('1');
                        }}
                    >
                        Columns
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={props.activeTab === '3' ? 'active' : ''}
                        onClick={() => {
                            props.toggle('3');
                        }}
                    >
                        Joins
                    </NavLink>
                </NavItem>

            </Nav>
            <TabContent activeTab={props.activeTab} style={{minHeight: "20vh"}}>
                <TabPane tabId="1">
                    <Container fluid>
                        <Row>
                            <Col sm="12" className="p-1">
                                <QueryColumnList/>
                            </Col>
                        </Row>
                    </Container>
                </TabPane>
                <TabPane tabId="3">
                    <Container fluid>
                        <Row>
                            <Col sm="12" className="p-1">
                                <JoinList/>
                            </Col>
                        </Row>
                    </Container>
                </TabPane>
            </TabContent>
        </div>
    )
};

export default withTabSwitcher(QueryTabs);