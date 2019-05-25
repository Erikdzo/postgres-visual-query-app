import React from 'react'

import QueryButton from "../containers/QueryButton";
import {translations} from "../utils/translations";
import DeleteQueryButton from "../containers/DeleteQueryButton";
import QueryTable from "../containers/QueryTable";
import ResultTabs from "../containers/ResultTabs";
import QueryTabs from "../containers/QueryTabs";
import {connect} from "react-redux";
import DownloadSQLButton from "../containers/DownloadSQLButton";
import DownloadCSVButton from "../containers/DownloadCSVButton";

const QueryBuilder = props => {
    return (
        <div className="mt-2 pr-2">
            <h4>{translations[props.language.code]['queryPage']['tablesH']}</h4>
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

const mapStateToProps = (store) => {
    return {
        tables: store.query.tables,
        language: store.settings.language
    }
};


export default connect(mapStateToProps)(QueryBuilder);