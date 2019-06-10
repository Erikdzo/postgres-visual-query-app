import React from 'react';
import {shallow} from 'enzyme';
import {JoinList} from "../../components/JoinList";

describe('Component: JoinList', () => {

    let component, tables, joins;

    beforeEach(() => {
        tables = [
            {
                id: 1,
                table_alias: "",
                table_name: "amet",
                table_schema: "public",
                table_type: "BASE TABLE",
                columns: [
                    {
                        column_name: "amet_kood",
                        constraints: [],
                        data_type: "smallint",
                        ordinal_position: 1,
                        table_alias: "",
                        table_id: 1,
                        table_name: "amet",
                        table_schema: "public"
                    },
                    {
                        column_name: "nimetus",
                        constraints: [],
                        data_type: "smallint",
                        ordinal_position: 2,
                        table_alias: "",
                        table_id: 1,
                        table_name: "amet",
                        table_schema: "public"
                    },
                    {
                        column_name: "kirjeldus",
                        constraints: [],
                        data_type: "smallint",
                        ordinal_position: 3,
                        table_alias: "",
                        table_id: 1,
                        table_name: "amet",
                        table_schema: "public"
                    }
                ]
            },
            {
                id: 2,
                table_alias: "",
                table_name: "asukoht",
                table_schema: "public",
                table_type: "BASE TABLE",
                columns: [
                    {
                        column_name: "asukoht_kood",
                        constraints: [],
                        data_type: "smallint",
                        ordinal_position: 1,
                        table_alias: "",
                        table_id: 1,
                        table_name: "asukoht",
                        table_schema: "public"
                    },
                    {
                        column_name: "nimetus",
                        constraints: [],
                        data_type: "smallint",
                        ordinal_position: 2,
                        table_alias: "",
                        table_id: 1,
                        table_name: "asukoht",
                        table_schema: "public"
                    }
                ]
            }
        ];

        joins = [{
            color: "#ddbf4f",
            conditions: [],
            id: 0,
            main_table: {
                table_alias: "",
                table_name: "",
                table_schema: "",
                columns: [
                    {
                        column_name: "asukoht_kood",
                        constraints: [],
                        data_type: "smallint",
                        ordinal_position: 1,
                        table_alias: "",
                        table_id: 2,
                        table_name: "asukoht",
                        table_schema: "public"
                    },
                    {
                        column_name: "nimetus",
                        constraints: [],
                        data_type: "smallint",
                        ordinal_position: 2,
                        table_alias: "",
                        table_id: 2,
                        table_name: "asukoht",
                        table_schema: "public"
                    }
                ]
            },
            type: "inner"
        }];
    });

    test('JoinList renders with default components', () => {

        component = shallow(<JoinList language={{code: 'eng'}} tables={tables} joins={joins} updateJoins={jest.fn()} addJoin={jest.fn()}/>);

        expect(component).toMatchSnapshot()
    })
});