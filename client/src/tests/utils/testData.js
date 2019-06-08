export const testData1 = {
    "columns": [{
        "column_name": "amet_kood",
        "ordinal_position": 1,
        "data_type": "smallint",
        "constraints": [{
            "constraint_name": "pk_amet",
            "constraint_type": "PRIMARY KEY",
            "column_name": "{amet_kood}",
            "foreign_table_schema": null,
            "foreign_table_name": null,
            "foreign_column_name": null
        }],
        "table_name": "amet",
        "table_schema": "public",
        "table_alias": "",
        "table_id": 1,
        "id": 1,
        "column_alias": "",
        "column_filter": "",
        "column_aggregate": "",
        "column_distinct_on": false,
        "column_order": false,
        "column_order_dir": true,
        "column_group_by": false,
        "display_in_query": true
    }, {
        "column_name": "nimetus",
        "ordinal_position": 2,
        "data_type": "character varying",
        "constraints": [{
            "constraint_name": "ak_amet_nimetus",
            "constraint_type": "UNIQUE",
            "column_name": "{nimetus}",
            "foreign_table_schema": null,
            "foreign_table_name": null,
            "foreign_column_name": null
        }],
        "table_name": "amet",
        "table_schema": "public",
        "table_alias": "",
        "table_id": 1,
        "id": 2,
        "column_alias": "",
        "column_filter": "",
        "column_aggregate": "",
        "column_distinct_on": false,
        "column_order": false,
        "column_order_dir": true,
        "column_group_by": false,
        "display_in_query": true
    }, {
        "column_name": "kirjeldus",
        "ordinal_position": 3,
        "data_type": "text",
        "constraints": [],
        "table_name": "amet",
        "table_schema": "public",
        "table_alias": "",
        "table_id": 1,
        "id": 3,
        "column_alias": "",
        "column_filter": "",
        "column_aggregate": "",
        "column_distinct_on": false,
        "column_order": false,
        "column_order_dir": true,
        "column_group_by": false,
        "display_in_query": true
    }],
    "tables": [{
        "table_schema": "public",
        "table_name": "amet",
        "table_type": "BASE TABLE",
        "table_alias": "",
        "columns": [{
            "column_name": "amet_kood",
            "ordinal_position": 1,
            "data_type": "smallint",
            "constraints": [{
                "constraint_name": "pk_amet",
                "constraint_type": "PRIMARY KEY",
                "column_name": "{amet_kood}",
                "foreign_table_schema": null,
                "foreign_table_name": null,
                "foreign_column_name": null
            }],
            "table_name": "amet",
            "table_schema": "public",
            "table_alias": "",
            "table_id": 1
        }, {
            "column_name": "nimetus",
            "ordinal_position": 2,
            "data_type": "character varying",
            "constraints": [{
                "constraint_name": "ak_amet_nimetus",
                "constraint_type": "UNIQUE",
                "column_name": "{nimetus}",
                "foreign_table_schema": null,
                "foreign_table_name": null,
                "foreign_column_name": null
            }],
            "table_name": "amet",
            "table_schema": "public",
            "table_alias": "",
            "table_id": 1
        }, {
            "column_name": "kirjeldus",
            "ordinal_position": 3,
            "data_type": "text",
            "constraints": [],
            "table_name": "amet",
            "table_schema": "public",
            "table_alias": "",
            "table_id": 1
        }],
        "id": 1
    }],
    "distinct": false,
    "sql": "SELECT\namet.amet_kood, amet.nimetus\nFROM public.amet;",
    "result": null,
    "joins": [],
    "error": null,
    "lastColumnId": 3,
    "lastTableId": 1,
    "querying": false
};