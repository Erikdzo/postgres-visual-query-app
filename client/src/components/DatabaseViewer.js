import React, {Component} from 'react';
import {connect} from "react-redux";
import DatabaseTable from "./DatabaseTable";
import {Scrollbars} from "react-custom-scrollbars";
import _ from 'lodash';

export class DatabaseViewer extends Component {

    constructor(props) {
        super(props);
        this.constructData = this.constructData.bind(this);

    }

    constructData(table) {

        let data = {
            table_schema: table.table_schema,
            table_name: table.table_name,
            table_type: table.table_type,
            table_alias: ""
        };

        let constraints = JSON.parse(JSON.stringify(this.props.constraints));
        constraints = constraints.filter(constraint => {
            return constraint.table_schema === data.table_schema && constraint.table_name === data.table_name
        })

        let columns = JSON.parse(JSON.stringify(this.props.columns));
        columns = columns.filter(column => {
            return column.table_name === data.table_name && column.table_schema === data.table_schema
        }).map(column => {

            column.constraints = constraints.filter(constraint => _.includes(constraint.column_name,column.column_name));

            delete column.table_name;
            delete column.table_schema;
            return column
        });

        data.columns = columns;


        return data

    }

    static filterTable(table, expr) {
        if (_.isEqual("", expr)) {
            return true
        }

        const splitExpr = _.split(expr, " ", 2);

        if (_.startsWith(expr, "#")) {

            let table_type = _.upperCase(table.table_type);
            table_type = _.replace(table_type, " ", "_");

            if (_.includes(`#${table_type}`, splitExpr[0])) {
                if (_.isString(splitExpr[1]) && !_.isEqual("", splitExpr[1])) {

                    if (_.endsWith(expr, " ")) {

                        splitExpr[1] = _.trim(splitExpr[1]);
                        if (!_.isEqual(table.table_name, splitExpr[1])) {
                            return false
                        }
                    } else {
                        if (!_.includes(table.table_name, splitExpr[1])) {
                            return false
                        }
                    }
                }
                return true
            }
        } else {
            if (_.endsWith(expr, " ")) {

                expr = _.trim(expr);

                if (_.isEqual(table.table_name, expr)) {
                    return true
                }
            } else {
                if (_.includes(table.table_name, expr)) {
                    return true
                }
            }
        }
        return false
    }

    render() {
        return (
            <div className="flex-fill">
                <Scrollbars className="d-flex" autoHide>
                    <div className="mt-1 pr-2">
                        {this.props.tables.map((table, index) => {
                            const checked = this.props.queryTable.some(queryTable => _.isEqual(table.table_name, queryTable.table_name) && _.isEqual(table.table_schema, queryTable.table_schema));
                            const id = `database-table-${index}`;
                            return table.table_schema === this.props.selectedSchema && DatabaseViewer.filterTable(table, this.props.searchExpr) &&
                                <DatabaseTable data={this.constructData(table)} checked={checked}
                                               key={id} id={id}
                                />
                        })}
                    </div>
                </Scrollbars>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        tables: store.database.tables,
        schemas: store.database.schemas,
        selectedSchema: store.database.selectedSchema,
        constraints: store.database.constraints,
        columns: store.database.columns,
        queryTable: store.query.tables,
        searchExpr: store.database.searchExpr
    }
};

export default connect(mapStateToProps)(DatabaseViewer);