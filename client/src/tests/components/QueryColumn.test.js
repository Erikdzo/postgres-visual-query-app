import React from 'react';
import {shallow} from 'enzyme';
import {QueryColumn} from "../../components/QueryColumn";
import {Card, CardBody, Form} from "reactstrap";

describe('Component: QueryColumn', () => {

    let component, props;

    beforeEach(() => {
        props = {
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
    });

    test('QueryColumn renders with default props', () => {
        component = shallow(<QueryColumn {...props}/>);

        expect(component).toMatchSnapshot()
    });

    test('QueryColumn handleSave calls updateColumn once', () => {
        component = shallow(<QueryColumn {...props}/>);

        component.instance().handleSave({target: {id: "column_aggregate", value: "AVG"}});

        expect(props.updateColumn.mock.calls.length).toBe(1);
    });

    test('QueryColumn handleRemove calls updateColumn once', () => {
        component = shallow(<QueryColumn {...props}/>);

        component.instance().handleRemove({target: "column_alias"});

        expect(props.updateColumn.mock.calls.length).toBe(1);
    });

    test('QueryColumn handleSwitch calls updateColumn once', () => {
        component = shallow(<QueryColumn {...props}/>);

        component.instance().handleSwitch({target: "column_order"});

        expect(props.updateColumn.mock.calls.length).toBe(1);
    });
});