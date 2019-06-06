import {buildQuery} from "../utils/queryBuilder";
import _ from 'lodash';
import randomColor from 'randomcolor';
import {
    ADD_COLUMN,
    UPDATE_COLUMN,
    REMOVE_COLUMN,
    UPDATE_COLUMNS_ORDER,
    ADD_TABLE,
    REMOVE_TABLE,
    UPDATE_JOIN,
    SWITCH_DISTINCT,
    ADD_JOIN,
    UPDATE_JOINS_ORDER,
    UPDATE_TABLE,
    ADD_RESULT,
    DELETE_QUERY,
    GENERATE_SQL,
    REMOVE_JOIN,
    QUERYING
} from '../actions/queryActions'

import { ActionType } from 'redux-promise-middleware';
export const INITIAL_STATE = {
    columns: [],
    tables: [],
    distinct: false,
    sql: "",
    result: null,
    joins: [],
    error: null,
    lastColumnId: 0,
    lastTableId: 0,
    querying: false
};


export default function reducer(state = INITIAL_STATE, action) {

    switch (action.type) {

        case ADD_COLUMN: {

            let column = _.cloneDeep(action.payload);
            column.id = state.lastColumnId + 1;
            column.column_alias = "";
            column.column_filter = "";
            column.column_aggregate = "";
            column.column_distinct_on = false;
            column.column_order = false;
            column.column_order_dir = true;
            column.column_group_by = false;
            column.display_in_query = true;



            const copies = state.columns.filter(stateColumn => _.isEqual(stateColumn.table_name, column.table_name) &&
                _.isEqual(stateColumn.table_schema, column.table_schema) && _.isEqual(stateColumn.column_name, column.column_name));

            let largestCopy = 0;

            copies.forEach(copy => {

                if (_.includes(copy.column_alias, `${column.column_name}_`, 0)) {
                    const numb = copy.column_alias.replace(/[^0-9]/g,'');

                    if (parseInt(numb) > largestCopy) {
                        largestCopy = parseInt(numb)
                    }
                }
            });

            if (copies.length > 0 && largestCopy === 0) {
                column.column_alias = `${column.column_name}_1`
            }

            if (largestCopy > 0) {
                const index = largestCopy + 1;
                column.column_alias = `${column.column_name}_${index}`
            }

            return {
                ...state,
                columns: [...state.columns, column],
                lastColumnId: column.id
            };

        }
        case UPDATE_COLUMN: {

            let columns = _.cloneDeep(state.columns);

            const updatedColumn = action.payload;

            const columnIndex = state.columns.findIndex(column =>
                _.isEqual(column.id, updatedColumn.id));
            if (columnIndex > -1) {
                columns[columnIndex] = updatedColumn;
            }

            return {
                ...state,
                columns: columns
            }
        }
        case REMOVE_COLUMN: {

            const removableColumn = action.payload;

            const filteredColumns = state.columns.filter(column => {

                return !(_.isEqual(column.table_id, removableColumn.table_id) && _.isEqual(column.id, removableColumn.id))
            }
            );

            return {
                ...state,
                columns: filteredColumns
            }
        }

        case UPDATE_COLUMNS_ORDER: {
            return {
                ...state,
                columns: action.payload
            }
        }

        case ADD_TABLE: {

            let table = _.cloneDeep(action.payload);
            table.id = state.lastTableId + 1;
            table.table_alias = "";

            const copies = state.tables.filter(stateTable => _.isEqual(stateTable.table_name, table.table_name) && _.isEqual(stateTable.table_schema, table.table_schema));

            let largestCopy = 0;

            copies.forEach(copy => {

                if (_.includes(copy.table_alias, `${table.table_name}_`, 0)) {
                    const numb = copy.table_alias.replace(/[^0-9]/g,'');

                    if (parseInt(numb) > largestCopy) {
                        largestCopy = parseInt(numb)
                    }
                }
            });
            if (copies.length > 0 && largestCopy === 0) {
                table.table_alias = `${table.table_name}_1`
            }

            if (largestCopy > 0) {
                const index = largestCopy + 1;
                table.table_alias = `${table.table_name}_${index}`
            }

            return {
                ...state,
                tables: [...state.tables, table],
                lastTableId: table.id
            }

        }

        case REMOVE_TABLE: {

            const removableTable = action.payload;


            const filteredTables = state.tables.filter(table =>
                !_.isEqual(table.id, removableTable.id));

            const filteredColumns = state.columns.filter(column =>
                !_.isEqual(column.table_id, removableTable.id));

            const filteredJoins = state.joins.filter(join =>
                !_.isEqual(join.main_table.id, removableTable.id));

            return {
                ...state,
                columns: filteredColumns,
                tables: filteredTables,
                joins: filteredJoins
            }
        }

        case UPDATE_TABLE: {

            const updatedTable = action.payload;

            const tableIndex = state.tables.findIndex(table =>
                _.isEqual(table.id, updatedTable.id));

            let tables = _.cloneDeep(state.tables);

            if (tableIndex > -1) {
                tables[tableIndex] = updatedTable;
            }

            const updatedColumns = state.columns.map(column => {
                if (_.isEqual(column.table_id, updatedTable.id)) {

                    column.table_alias = updatedTable.table_alias
                }
                return column
            });

            const updatedJoins = state.joins.map(join => {
                if (_.isEqual(join.main_table.id, updatedTable.id)) {

                    join.main_table.table_alias = updatedTable.table_alias
                }

                join.conditions.forEach(condition => {
                    if (_.isEqual(condition.secondary_table.id, updatedTable.id)) {
                        condition.secondary_table.table_alias = updatedTable.table_alias
                    }
                });

                return join
            });

            return {
                ...state,
                columns: updatedColumns,
                tables: tables,
                joins: updatedJoins
            }
        }

        case SWITCH_DISTINCT: {
            return {
                ...state,
                distinct: !state.distinct
            }
        }
        case ADD_JOIN: {

            let id  = 0;

            if (state.joins.length > 0) {
                id = state.joins[state.joins.length - 1].id + 1
            }

            const join = {
                id: id,
                type: "inner",
                color: randomColor({
                    luminosity: "bright"
                }),
                main_table: {
                    table_name: "",
                    table_schema: "",
                    table_alias: ""
                },
                conditions: []
            };

            return {
                ...state,
                joins: [...state.joins, join]
            }
        }
        case UPDATE_JOIN: {
            let joins = _.cloneDeep(state.joins);

            if (action.payload.id > -1 && action.payload.id < state.joins.length) {
                joins[action.payload.id] = action.payload;
            }


            return {
                ...state,
                joins: joins
            }
        }
        case REMOVE_JOIN: {

            const filteredJoins = state.joins.filter(join => {
                return join.id !== action.payload.id
            });

            return {
                ...state,
                joins: filteredJoins
            }
        }


        case `${ADD_RESULT}_${ActionType.Fulfilled}`: {
            return {
                ...state,
                result: action.payload.data,
                error: null,
                querying: false
            }
        }
        case UPDATE_JOINS_ORDER: {
            return {
                ...state,
                joins: action.payload
            }
        }

        case DELETE_QUERY: {
            return INITIAL_STATE
        }
        case GENERATE_SQL: {
            const query = buildQuery(state);

            let queryStr = query.toString({separator: "\n"}).replace('\n', ' ');

            queryStr = `${query};`;

            return {
                ...state,
                sql: queryStr
            }
        }
        case `${ADD_RESULT}_${ActionType.Rejected}`: {
            return {
                ...state,
                error: action.payload.response.data,
                result: null,
                querying: false
            }
        }
        case QUERYING: {
            return {
                ...state,
                querying: true
            }
        }
        default:
            return state
    }
}



