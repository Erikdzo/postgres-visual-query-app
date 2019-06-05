import React from 'react'
import {Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane} from "reactstrap";
import QueryColumnList from "./QueryColumnList";
import {withTabSwitcher} from "../hocs/withTabSwitcher";
import JoinList from "./JoinList";
import {translations} from "../utils/translations";
import {connect} from "react-redux";

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
                        {translations[props.language.code].queryBuilder.columnsH}
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={props.activeTab === '3' ? 'active' : ''}
                        onClick={() => {
                            props.toggle('3');
                        }}
                    >
                        {translations[props.language.code].queryBuilder.joinsH}
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

const mapStateToProps = store => {
    return {
        language: store.settings.language
    }
};

export default withTabSwitcher(connect(mapStateToProps) (QueryTabs));