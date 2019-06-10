import React from 'react';
import {shallow} from 'enzyme';
import {DeleteQueryButton} from "../../components/DeleteQueryButton";

describe('Component: DeleteQueryButton', () => {

    let component;

    beforeEach(() => {
        component = shallow(<DeleteQueryButton deleteQuery={jest.fn()}/>)
    });

    test('DeleteQueryButton renders with default props', () => {
        expect(component).toMatchSnapshot()
    })
});