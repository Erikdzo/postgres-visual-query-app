
import * as squel from '../../node_modules/squel/dist/squel.min'
let _ = require('lodash');
let squelPostgres = squel.useFlavour('postgres');

function addJoinsToQuery(data, query) {
    let joins = _.cloneDeep(data.joins);

    joins.forEach(join => {

        join.main_table.table_name = checkFieldCharacters(join.main_table.table_name);
        join.main_table.table_alias = checkFieldCharacters(join.main_table.table_alias);
        join.main_table.table_schema = checkFieldCharacters(join.main_table.table_schema);

        const on = buildJoinOn(join);

        if (join.main_table.table_name !== "" && on !== "") {

            let table_name = `${join.main_table.table_schema}.${join.main_table.table_name}`;

            if (join.type.localeCompare("inner") === 0) {

                if (join.main_table.table_alias !== "") {

                    query.join(table_name, join.main_table.table_alias, on)
                } else {
                    query.join(table_name, null, on)
                }
            }
            if (join.type.localeCompare("right") === 0) {

                if (join.main_table.table_alias !== "") {

                    query.right_join(table_name, join.main_table.table_alias, on)
                } else {
                    query.right_join(table_name, null, on)
                }
            }
            if (join.type.localeCompare("left") === 0) {

                if (join.main_table.table_alias !== "") {

                    query.left_join(table_name, join.main_table.table_alias, on)
                } else {
                    query.left_join(table_name, null, on)
                }
            }
            if (join.type.localeCompare("outer") === 0) {

                if (join.main_table.table_alias !== "") {

                    query.outer_join(table_name, join.main_table.table_alias, on)
                } else {
                    query.outer_join(table_name, null, on)
                }
            }
            if (join.type.localeCompare("cross") === 0) {

                if (join.main_table.table_alias !== "") {

                    query.cross_join(table_name, join.main_table.table_alias, on)
                } else {
                    query.cross_join(table_name, null, on)
                }
            }
        }
    });
}

function addTablesToQuery(data, query) {
    if (data.tables.length > 0) {

        let tables = _.cloneDeep(data.tables);

        if (_.isEmpty(data.joins)) {
            tables.forEach(table => {

                table.table_name = checkFieldCharacters(table.table_name);
                table.table_alias = checkFieldCharacters(table.table_alias);
                table.table_schema = checkFieldCharacters(table.table_schema);

                if (table.table_alias.length === 0) {
                    query.from(`${table.table_schema}.${table.table_name}`)
                } else {
                    query.from(`${table.table_schema}.${table.table_name}`, table.table_alias)
                }
            })
        } else {
            const baseTable = tables[0];
            if (!_.isEqual(baseTable.table_name.toLowerCase(), baseTable.table_name)) {
                baseTable.table_name = `"${baseTable.table_name}"`
            }

            if (!_.isEqual(baseTable.table_alias.toLowerCase(), baseTable.table_alias)) {
                baseTable.table_alias = `"${baseTable.table_alias}"`
            }
            if (!_.isEqual(baseTable.table_schema.toLowerCase(), baseTable.table_schema)) {
                baseTable.table_schema = `"${baseTable.table_schema}"`
            }

            if (baseTable.table_alias.length === 0) {

                query.from(`${baseTable.table_schema}.${baseTable.table_name}`)
            } else {
                query.from(`${baseTable.table_schema}.${baseTable.table_name}`, baseTable.table_alias)
            }

            addJoinsToQuery(data, query);

        }
    }
}

function addColumnsToQuery(data, query) {
    let columns = _.cloneDeep(data.columns);

    columns.forEach(column => {


        column.column_name = checkFieldCharacters(column.column_name);
        column.column_alias = checkFieldCharacters(column.column_alias);
        column.table_name = checkFieldCharacters(column.table_name);
        column.table_alias = checkFieldCharacters(column.table_alias);

        if (!data.distinct && column.column_distinct_on) {
            query.distinct(`${column.table_name}.${column.column_name}`)
        }

        if (column.display_in_query) {
            if (column.column_alias.length === 0) {
                if (column.table_alias.length === 0) {

                    let field = `${column.table_name}.${column.column_name}`;

                    if (column.column_aggregate.length === 0) {
                        query.field(field);
                    } else {
                        field = `${column.column_aggregate}(${field})`;
                        query.field(field)
                    }

                } else {

                    let field = `${column.table_alias}.${column.column_name}`;

                    if (column.column_aggregate.length === 0) {
                        query.field(field)
                    } else {
                        field = `${column.column_aggregate}(${field})`;
                        query.field(field);
                    }

                }

            } else {
                if (column.table_alias.length === 0) {

                    let field = `${column.table_name}.${column.column_name}`;

                    if (column.column_aggregate.length === 0) {
                        query.field(field, column.column_alias);
                    } else {
                        field = `${column.column_aggregate}(${field})`;
                        query.field(field, column.column_alias)
                    }
                } else {

                    let field = `${column.table_alias}.${column.column_name}`;

                    if (column.column_aggregate.length === 0) {
                        query.field(field, column.column_alias);
                    } else {
                        field = `${column.column_aggregate}(${field})`;
                        query.field(field, column.column_alias)
                    }
                }
            }

        }

        if (column.column_order) {
            if (column.column_alias.length === 0) {
                if (column.table_alias.length === 0) {

                    let field = `${column.table_name}.${column.column_name}`;

                    if (column.column_order) {
                        query.order(field, column.column_order_dir)
                    }

                } else {

                    let field = `${column.table_alias}.${column.column_name}`;

                    if (column.column_order) {
                        query.order(field, column.column_order_dir)
                    }
                }

            } else {
                if (column.display_in_query) {
                    query.order(column.column_alias, column.column_order_dir)
                } else {
                    if (column.table_alias.length === 0) {

                        let field = `${column.table_name}.${column.column_name}`;

                        if (column.column_order) {
                            query.order(field, column.column_order_dir)
                        }

                    } else {

                        let field = `${column.table_alias}.${column.column_name}`;

                        if (column.column_order) {
                            query.order(field, column.column_order_dir)
                        }
                    }
                }


            }
        }


        if (column.column_group_by === true) {
            let field = `${column.table_name}.${column.column_name}`;
            if (column.table_alias.length !== 0) {
                field = `${column.table_alias}.${column.column_name}`
            }
            query.group(field)
        }

        if (column.column_filter.length !== 0) {

            query.where(column.column_filter)
        }
    });
}

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
    return query.toString();
}

function checkFieldCharacters(field) {
    if (!_.isEmpty(field) &&(!/^[a-z]+$/.test(field))) {
        return `"${field}"`
    }
    return field
}

function buildJoinOn(join) {

    let main_table = join.main_table.table_name;

    if (!_.isEqual(join.main_table.table_alias, "")) {
        main_table = join.main_table.table_alias
    }

    let conditionArray = [];

    let conditions = _.cloneDeep(join.conditions);

    conditions.forEach(condition => {

        condition.main_column = checkFieldCharacters(condition.main_column);
        condition.secondary_column = checkFieldCharacters(condition.secondary_column);
        condition.secondary_table.table_name = checkFieldCharacters(condition.secondary_table.table_name);
        condition.secondary_table.table_alias = checkFieldCharacters(condition.secondary_table.table_alias);

        if (!_.isEqual(condition.main_column, "") && !_.isEqual(condition.secondary_column, "" && !_.isEqual(condition.secondary_table.table_name))) {
            let secondary_table = condition.secondary_table.table_name;

            if (!_.isEqual(condition.secondary_table.table_alias, "")) {
                secondary_table = condition.secondary_table.table_alias
            }

            const conditionString = `${main_table}.${condition.main_column} = ${secondary_table}.${condition.secondary_column}`;


            conditionArray.push(conditionString);
        }

    });

    return conditionArray.join(" AND ")
}