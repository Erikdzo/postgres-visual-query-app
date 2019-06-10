import React from 'react';
import {shallow} from 'enzyme';
import {DatabaseTable} from "../../components/DatabaseTable";
import {Button} from "reactstrap";


describe('Component: DatabaseTable', () => {

    let data, component;

    beforeEach(() => {
        data = {
            table_alias: "",
            table_name: "amet",
            table_schema: "public",
            table_type: "BASE TABLE",
            columns: [
                {
                    column_name: "amet_kood",
                    constraints: [],
                    data_type: "smallint",
                    ordinal_position: 1
                }
            ]
        };
    });

    test('BASE TABLE renders with default props', () => {

        component = shallow(<DatabaseTable addColumn={jest.fn()} addTable={jest.fn()} removeTable={jest.fn()}
                                           checked={false} data={data} id="database-table-188"/>);

        expect(component).toMatchSnapshot();
    });

    test('VIEW renders with default props', () => {

        data.table_type = "VIEW";

        component = shallow(<DatabaseTable addColumn={jest.fn()} addTable={jest.fn()} removeTable={jest.fn()}
                                           checked={false} data={data} id="database-table-188"/>);

        expect(component).toMatchSnapshot();
    });

    test('FOREIGN renders with default props', () => {

        data.table_type = "FOREIGN";

        component = shallow(<DatabaseTable addColumn={jest.fn()} addTable={jest.fn()} removeTable={jest.fn()}
                                           checked={false} data={data} id="database-table-188"/>);

        expect(component).toMatchSnapshot();
    });

    test('MATERIALIZED VIEW renders with default props', () => {

        data.table_type = "MATERIALIZED VIEW";

        component = shallow(<DatabaseTable addColumn={jest.fn()} addTable={jest.fn()} removeTable={jest.fn()}
                                           checked={false} data={data} id="database-table-188"/>);

        expect(component).toMatchSnapshot();
    });

    test('DatabaseTable on click calls function', () => {
        const handleOnClickSpy = jest.spyOn(DatabaseTable.prototype, "handleOnClick");
        component = shallow(<DatabaseTable addColumn={jest.fn()} addTable={jest.fn()} removeTable={jest.fn()}
                                           checked={false} data={data} id="database-table-188"/>);
        component.find(Button).simulate('click');
        expect(handleOnClickSpy).toHaveBeenCalledTimes(1);
    });
});