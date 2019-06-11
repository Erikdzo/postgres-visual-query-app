import React from 'react';
import {shallow} from 'enzyme';
import {DeleteQueryButton} from "../../components/DeleteQueryButton";

describe('Component: DeleteQueryButton', () => {

    let component, props;

    beforeEach(() => {
        props = {
            deleteQuery: jest.fn()
        };

        component = shallow(<DeleteQueryButton {...props}/>)
    });

    test('DeleteQueryButton renders with default props', () => {
        expect(component).toMatchSnapshot()
    });

    test('DeleteQueryButton handleOnClick calls deleteQuery once', () => {
        component.instance().handleOnClick();

        expect(props.deleteQuery.mock.calls.length).toBe(1)
    })
});