import React, {Component} from 'react';
import {
    Button, ButtonGroup,
    Card, CardBody, CardTitle, UncontrolledTooltip
} from "reactstrap";
import {addTable, removeTable} from "../actions/queryActions";
import {connect} from "react-redux";
import {translations} from "../utils/translations";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import QueryTablePopover from "./QueryTablePopover";
import {Scrollbars} from "react-custom-scrollbars";
import TableColumn from "./TableColumn";

const QueryTableHeader = props => {
    return (
        <CardTitle className="d-flex pb-1 mb-0 border-bottom">
            <div className="px-1 flex-fill d-flex">
                <Button outline color="info" id={props.target} type="button"
                        className="align-self-center btn-block p-0 px-1 text-left text-truncate">{props.data.table_alias ? `${props.data.table_name} (${props.data.table_alias})` : `${props.data.table_name}`}</Button>
                <UncontrolledTooltip placement="top" target={props.target} delay={{hide: 0}} className="text-truncate">
                    {props.data.table_schema}
                </UncontrolledTooltip>
            </div>
            <ButtonGroup>
                <Button size="sm" color="secondary" className="" style={{borderTopLeftRadius: "0px"}} onClick={props.handleCopy}
                        id={`${props.target}_copy`}>
                    <FontAwesomeIcon icon="copy"/>
                </Button>
                <UncontrolledTooltip placement="top" target={`${props.target}_copy`} delay={{show: 500, hide: 0}}
                                     className="text-truncate">
                    {translations[props.language.code].tooltips.copyTable}
                </UncontrolledTooltip>
                <Button size="sm" className="align-self-start" color="danger" style={{borderBottomRightRadius: "0px"}}
                        onClick={props.handleRemoveTable} id={`${props.target}_remove`}>
                    <FontAwesomeIcon icon="times"/>
                </Button>
            </ButtonGroup>
            <QueryTablePopover target={props.target} data={props.data}/>
        </CardTitle>
    )
};

const QueryTableBody = props => {
    return (
        <Scrollbars autoHeight autoHeightMax={400}>
            <CardBody className="py-0 mt-2 px-2 ">
                {props.data.columns.map((column, index) => {
                    return <TableColumn
                        key={`table-column-${index}`}
                        id={`${props.id}-table-column-${index}`}
                        data={props.constructData(column)}/>
                })}
            </CardBody>
        </Scrollbars>
    )
};

export class QueryTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            target: `t_${props.data.table_schema}_${props.data.table_name.replace(" ", "")}_${props.data.id}`
        };

        this.handleRemoveTable = this.handleRemoveTable.bind(this);
        this.constructData = this.constructData.bind(this);
        this.handleCopy = this.handleCopy.bind(this);
    }


    constructData(column) {
        column.table_name = this.props.data.table_name;
        column.table_schema = this.props.data.table_schema;
        column.table_alias = this.props.data.table_alias;
        column.table_id = this.props.data.id;
        return column
    }

    handleRemoveTable() {
        this.props.removeTable(this.props.data)
    }

    handleCopy() {
        this.props.addTable(this.props.data);
    }

    render() {
        return (
            <Card className="d-inline-flex m-2 pb-2">
                <QueryTableHeader target={this.props.id} data={this.props.data} language={this.props.language}
                                  handleRemoveTable={this.handleRemoveTable} handleCopy={this.handleCopy}/>
                <QueryTableBody data={this.props.data} id={this.props.id} constructData={this.constructData}/>
            </Card>
        )
    }
}

const mapStateToProps = store => {
    return {
        language: store.settings.language
    }
};

const mapDispatchToProps = (dispatch) => ({
    removeTable(data) {
        dispatch(removeTable(data))
    },
    addTable(data) {
        dispatch(addTable(data))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(QueryTable);