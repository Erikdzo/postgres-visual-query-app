import React, {Component} from 'react';

import {Container, Row, Col} from 'reactstrap';

import {Scrollbars} from "react-custom-scrollbars";
import {translations} from "../utils/translations";
import {connect} from "react-redux";
import QueryTable from "../components/QueryTable";
import QueryTabs from "../components/QueryTabs";
import QueryButton from "../components/QueryButton";
import DeleteQueryButton from "../components/DeleteQueryButton";
import DownloadSQLButton from "../components/DownloadSQLButton";
import DownloadCSVButton from "../components/DownloadCSVButton";
import ResultTabs from "../components/ResultTabs";
import LanguageSwitcher from "../components/LanguageSwitcher";
import DisconnectButton from "../components/DisconnectButton";
import SchemaSelector from "../components/SchemaSelector";
import SearchBar from "../components/SearchBar";
import DatabaseViewer from "../components/DatabaseViewer";

const SideBar = (props) => {
    return (
        <div className="d-flex flex-column w-100">
            <div className="">
                <LanguageSwitcher/>
                <DisconnectButton/>
            </div>

            <SchemaSelector/>
            <SearchBar/>

            <h5 className="mt-2">{translations[props.language.code].sideBar.tablesH}</h5>
            <div className="d-flex flex-fill">
                <DatabaseViewer/>
            </div>

        </div>
    )
};

const QueryBuilder = props => {
    return (
        <div className="mt-2 pr-2">
            <h4>{translations[props.language.code].queryBuilder.tablesH}</h4>
            <div style={{minHeight: "40vh"}}>
                {props.tables.map((table, index) => {
                    return <QueryTable key={`query-table-${index}`} id={`query-table-${index}`} data={table}/>
                })}
            </div>

            <QueryTabs/>
            <div className="my-2">
                <QueryButton/>
                <DeleteQueryButton/>
                <DownloadSQLButton/>
                <DownloadCSVButton/>

            </div>
            <ResultTabs/>
        </div>
    )
};

class QueryPage extends Component {

    render() {
        return (

            <Container fluid>
                <Row>
                    <Col sm="2" className="py-2 vh-100 d-flex bg-light">
                        <SideBar language={this.props.language}/>
                    </Col>

                    <Col sm="10" className="pr-0">
                        <Scrollbars>
                        <QueryBuilder language={this.props.language} tables={this.props.tables}/>
                        </Scrollbars>
                    </Col>
                </Row>

            </Container>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        tables: store.query.tables,
        language: store.settings.language
    }
};

export default connect(mapStateToProps) (QueryPage)


