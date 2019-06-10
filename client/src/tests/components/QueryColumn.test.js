import React from 'react';
import {shallow} from 'enzyme';
import {QueryColumn} from "../../components/QueryColumn";

describe('Component: QueryColumn', () => {

    let component;

    test('QueryColumn renders with default props', () => {
        const props = {
            distinct: false,
            language: {code: "eng"},
            updateColumn: jest.fn(),
            removeColumn: jest.fn(),
            addColumn: jest.fn(),
            key: "query-column-1",
            id: "query-column-1",
            index: 1,
            data: {
                column_aggregate: "",
                column_alias: "",
                column_distinct_on: false,
                column_filter: "",
                column_group_by: false,
                column_name: "amet_kood",
                column_order: false,
                column_order_dir: true,
                constraints: [{
                    column_name: "{amet_kood}",
                    constraint_name: "pk_amet",
                    constraint_type: "PRIMARY KEY",
                    foreign_column_name: null,
                    foreign_table_name: null,
                    foreign_table_schema: null,
                    table_name: "amet",
                    table_schema: "public"
                }],
                data_type: "smallint",
                display_in_query: true,
                id: 1,
                ordinal_position: 1,
                table_alias: "",
                table_id: 1,
                table_name: "amet",
                table_schema: "public"
            }
        };

        component = shallow(<QueryColumn {...props}/>);

        expect(component).toMatchSnapshot()
    })
});