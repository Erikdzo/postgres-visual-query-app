import React from 'react'
import {Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane} from "reactstrap";
import ResultTable from "./ResultTable";
import ResultSQL from "./ResultSQL";
import {withTabSwitcher} from "../hocs/withTabSwitcher";
import {translations} from '../utils/translations';
import {connect} from "react-redux";

const ResultTabs = props => {
    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={props.activeTab === '1' ? 'active' : ''}
                        onClick={() => {
                            props.toggle('1');
                        }}
                    >
                        SQL
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={props.activeTab === '2' ? 'active' : ''}
                        onClick={() => {
                            props.toggle('2');
                        }}
                    >
                        {translations[props.language.code].queryBuilder.resultH}
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={props.activeTab}>
                <TabPane tabId="1">
                    <Container fluid>
                        <Row>
                            <Col sm="12" className="p-1">
                                <ResultSQL/>
                            </Col>
                        </Row>
                    </Container>
                </TabPane>
                <TabPane tabId="2">
                    <Container fluid>
                        <Row>
                            <Col sm="12" className="p-1">
                                <ResultTable/>
                            </Col>
                        </Row>
                    </Container>
                </TabPane>
            </TabContent>
        </div>
    )
};

const mapStateToProps = store => {
    return {
        language: store.settings.language
    }
};

export default withTabSwitcher(connect(mapStateToProps)(ResultTabs));