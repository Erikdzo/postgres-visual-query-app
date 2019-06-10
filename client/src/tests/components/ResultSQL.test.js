import React from 'react';
import {shallow} from 'enzyme';
import {ResultSQL} from "../../components/ResultSQL";

describe('Component: ResultSQL', () => {

    let component, props;

    beforeEach(() => {
        props = {
            sql: ""
        }
    });

    test('ResultSQL renders with default props', () => {
        component = shallow(<ResultSQL {...props}/>);

        expect(component).toMatchSnapshot();
    });
});