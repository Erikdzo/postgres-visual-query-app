import React from 'react';
import {shallow} from 'enzyme';
import {QueryButton} from "../../components/QueryButton";

describe('Component: QueryButton', () => {

    let component;

    test('QueryButton renderd with default props', () => {
        const props = {
            host: "",
            port: 1234,
            database: "",
            user: "",
            password: "",
            sql: "",
            language: {code: "eng"},
            querying: false,
            query: jest.fn()
        };

        component = shallow(<QueryButton {...props}/>);

        expect(component).toMatchSnapshot();
    })

});