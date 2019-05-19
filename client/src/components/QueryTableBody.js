import React from 'react'
import {CardBody} from "reactstrap";
import TableColumn from "../containers/TableColumn";
import {Scrollbars} from "react-custom-scrollbars";
import {connect} from "react-redux";

const QueryTableBody = props => {
    return (
        <Scrollbars autoHeight autoHeightMax={400}>
            <CardBody className="py-0 mt-2 px-2 ">


                {props.data.columns.map(column => {
                    return <TableColumn
                        key={`${props.data.table_schema}_${props.data.table_name}_${props.data.id}_${column.column_name}`}
                        data={props.constructData(column)}/>
                })}


            </CardBody></Scrollbars>
    )
};

const mapStateToProps = store => {
    return {
        columns: store.query.columns
    }
};

export default connect(mapStateToProps)(QueryTableBody);