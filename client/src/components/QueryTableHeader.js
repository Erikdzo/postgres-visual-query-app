import React from 'react';
import {Button, CardTitle, Tooltip} from "reactstrap";
import QueryTablePopover from "../containers/QueryTablePopover";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";
import {withToggle} from "../hocs/withToggle";

const QueryTableHeader = props => {


    return (
        <CardTitle className="d-flex mb-0">
            <div className="px-2 flex-fill d-flex">
                <Button outline color="info" id={props.target} type="button"
                        className="align-self-center btn-block p-0 px-1 text-left text-truncate">{props.data.table_alias ? `${props.data.table_name} (${props.data.table_alias})` : `${props.data.table_name}`}</Button>
                <Tooltip placement="top" isOpen={props.toggleStatus} target={props.target} toggle={props.toggle}
                         delay={{hide: 0}} className="text-truncate">{props.data.table_schema}</Tooltip>
            </div>
            <Button size="sm" color="secondary" className="mr-1" onClick={props.handleCopy}><FontAwesomeIcon
                icon="copy"/></Button>
            <Button size="sm" className="align-self-start" color="danger"
                    onClick={props.handleRemoveTable}><FontAwesomeIcon icon="times"/></Button>
            <QueryTablePopover target={props.target} data={props.data}/>
        </CardTitle>
    )
};

export default withToggle(QueryTableHeader)