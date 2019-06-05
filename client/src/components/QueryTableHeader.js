import React from 'react';
import {Button, CardTitle, UncontrolledTooltip} from "reactstrap";
import QueryTablePopover from "../containers/QueryTablePopover";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";
import {translations} from "../utils/translations";
import {connect} from "react-redux";

const QueryTableHeader = props => {


    return (
        <CardTitle className="d-flex mb-0">
            <div className="px-2 flex-fill d-flex">
                <Button outline color="info" id={props.target} type="button"
                        className="align-self-center btn-block p-0 px-1 text-left text-truncate">{props.data.table_alias ? `${props.data.table_name} (${props.data.table_alias})` : `${props.data.table_name}`}</Button>
                <UncontrolledTooltip placement="top" target={props.target} delay={{hide: 0}} className="text-truncate">
                    {props.data.table_schema}
                </UncontrolledTooltip>
            </div>
            <Button size="sm" color="secondary" className="mr-1" onClick={props.handleCopy} id={`${props.target}_copy`}>
                <FontAwesomeIcon icon="copy"/>
            </Button>
            <UncontrolledTooltip placement="top" target={`${props.target}_copy`} delay={{show: 500, hide: 0}} className="text-truncate">
                {translations[props.language.code].tooltips.copyTable}
            </UncontrolledTooltip>
            <Button size="sm" className="align-self-start" color="danger" onClick={props.handleRemoveTable} id={`${props.target}_remove`}>
                <FontAwesomeIcon icon="times"/>
            </Button>
            <UncontrolledTooltip placement="top" target={`${props.target}_remove`} delay={{show: 500, hide: 0}} className="text-truncate">
                {translations[props.language.code].tooltips.removeTable}
            </UncontrolledTooltip>
            <QueryTablePopover target={props.target} data={props.data}/>
        </CardTitle>
    )
};

const mapStateToProps = store => {
    return {
        language: store.settings.language
    }
};

export default connect(mapStateToProps) (QueryTableHeader)