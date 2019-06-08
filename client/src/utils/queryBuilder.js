import * as squel from '../../node_modules/squel/dist/squel.min'
let _ = require('lodash');
let squelPostgres = squel.useFlavour('postgres');
let format = require('pg-format');


export function buildQuery(data) {
    const query = squelPostgres.select({
        useAsForTableAliasNames: true,
        fieldAliasQuoteCharacter: '',
        tableAliasQuoteCharacter: '',
        separator: "\n"
    });

    if (data.distinct) {
        query.distinct()
    }

    addColumnsToQuery(data, query);

    addTablesToQuery(data, query);
    let queryStr = query.toString({separator: "\n"}).replace('\n', ' ');

    queryStr = `${query};`;
    return queryStr;
}

function addColumnsToQuery(data, query) {
    let columns = _.cloneDeep(data.columns);

    function addOrder(column) {
        if (_.isEmpty(column.table_alias)) {
            query.order(`${format.ident(column.table_name)}.${format.ident(column.column_name)}`,
                column.column_order_dir)
        } else {
            query.order(`${format.ident(column.table_alias)}.${format.ident(column.column_name)}`,
                column.column_order_dir)
        }
    }

    function addField(table, column) {
        query.field(`${format.ident(table)}.${format.ident(column)}`);
    }

    function addFieldWithAlias(table, column, alias) {
        query.field(`${format.ident(table)}.${format.ident(column)}`,
            `${format.ident(alias)}`);
    }

    function addGroupBy(table, column) {
        query.group(`${format.ident(table)}.${format.ident(column)}`)
    }

    columns.forEach(column => {

        if (!data.distinct && column.column_distinct_on) {
            query.distinct(`${format.ident(column.table_name)}.${format.ident(column.column_name)}`)
        }

        if (column.display_in_query) {
            if (column.column_alias.length === 0) {
                if (column.table_alias.length === 0) {

                    let field = `${column.column_name}`;

                    if (column.column_aggregate.length === 0) {
                        addField(column.table_name, column.column_name);
                    } else {
                        field = `${column.column_aggregate}(${column.table_name}.${field})`;
                        query.field(field);
                    }

                } else {

                    let field = `${column.table_alias}.${column.column_name}`;

                    if (column.column_aggregate.length === 0) {
                        addField(column.table_alias, column.column_name);
                    } else {
                        field = `${column.column_aggregate}(${field})`;

                        query.field(field);
                    }
                }
            } else {
                if (column.table_alias.length === 0) {
                    let field = `${column.table_name}.${column.column_name}`;
                    if (column.column_aggregate.length === 0) {

                        addFieldWithAlias(column.table_name, column.column_name, column.column_alias);
                    } else {
                        field = `${column.column_aggregate}(${field})`;
                        query.field(field, column.column_alias)
                    }
                } else {

                    let field = `${column.table_alias}.${column.column_name}`;

                    if (column.column_aggregate.length === 0) {

                        addFieldWithAlias(column.table_alias, column.column_name, column.column_alias);
                    } else {
                        field = `${column.column_aggregate}(${field})`;
                        query.field(field, column.column_alias)
                    }
                }
            }
        }

        if (column.column_order) {
            if (_.isEmpty(column.column_alias)) {
                addOrder(column)
            } else {
                if (column.display_in_query) {
                    query.order(`${format.ident(column.column_alias)}`, column.column_order_dir)
                } else {
                    addOrder(column);
                }
            }
        }

        if (column.column_group_by) {
            if (_.isEmpty(column.table_alias)) {
                addGroupBy(column.table_name, column.column_name);
            } else {
                addGroupBy(column.table_alias, column.column_name);
            }
        }

        if (!_.isEmpty(column.column_filter)) {

            let column_name = `${format.ident(column.table_name)}.${format.ident(column.column_name)}`;

            if (!_.isEmpty(column.table_alias)) {
                column_name = `${format.ident(column.table_alias)}.${format.ident(column.column_name)}`
            }

            if (!_.isEmpty(column.column_alias)) {
                column_name = `${format.ident(column.column_alias)}`
            }

            const column_filter = _.replace(column.column_filter, /:c/g, column_name);

            query.where(column_filter)
        }
    });
}

function addTablesToQuery(data, query) {

    function addTable(table) {
        if (_.isEmpty(table.table_alias)) {
            query.from(`${format.ident(table.table_schema)}.${format.ident(table.table_name)}`)
        } else {
            query.from(`${format.ident(table.table_schema)}.${format.ident(table.table_name)}`,
                `${format.ident(table.table_alias)}`)
        }
    }

    if (data.tables.length > 0) {

        let tables = _.cloneDeep(data.tables);

        if (_.isEmpty(data.joins)) {
            tables.forEach(table => {
                addTable(table);
            })
        } else {
            addTable(tables[0]);
            addJoinsToQuery(data, query);
        }
    }
}

function addJoinsToQuery(data, query) {
    let joins = _.cloneDeep(data.joins);

    function addJoin(joinObj, on, joinFn) {
        if (!_.isEmpty(joinObj.main_table.table_alias)) {
            joinFn(`${format.ident(joinObj.main_table.table_schema)}.${format.ident(joinObj.main_table.table_name)}`,
                `${format.ident(joinObj.main_table.table_alias)}`, on)
        } else {
            joinFn(`${format.ident(joinObj.main_table.table_schema)}.${format.ident(joinObj.main_table.table_name)}`, null, on)
        }
    }

    joins.forEach(joinObj => {

        const on = buildJoinOn(joinObj);

        if (!_.isEmpty(joinObj.main_table.table_name) && !_.isEmpty(on)) {

            switch (joinObj.type) {
                case "inner": {
                    addJoin(joinObj, on, query.join);
                    break;
                }
                case "right": {
                    addJoin(joinObj, on, query.right_join);
                    break;
                }
                case "left": {
                    addJoin(joinObj, on, query.left_join);
                    break;
                }
                case "outer": {
                    addJoin(joinObj, on, query.outer_join);
                    break;
                }
                case "cross": {
                    addJoin(joinObj, on, query.cross_join);
                    break;
                }
                default:
                    break
            }
        }
    });
}

function buildJoinOn(join) {

    let main_table = join.main_table.table_name;

    if (!_.isEmpty(join.main_table.table_alias)) {
        main_table = join.main_table.table_alias
    }

    let conditionArray = [];

    let conditions = _.cloneDeep(join.conditions);

    conditions.forEach(condition => {

        if (!_.isEmpty(condition.main_column) && !_.isEmpty(condition.secondary_column) &&
            !_.isEmpty(condition.secondary_table.table_name)) {

            let secondary_table = condition.secondary_table.table_name;

            if (!_.isEmpty(condition.secondary_table.table_alias)) {
                secondary_table = condition.secondary_table.table_alias
            }
            const conditionString = `${format.ident(main_table)}.${format.ident(condition.main_column)} =
             ${format.ident(secondary_table)}.${format.ident(condition.secondary_column)}`;
            conditionArray.push(conditionString);
        }
    });
    return conditionArray.join(" AND ")
}
