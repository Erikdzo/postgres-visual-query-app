import React from 'react';
import {shallow} from 'enzyme';
import {DisconnectButton} from "../../components/DisconnectButton";

describe('Component: DisconnectButton', () => {

    let component;

    test('Disconnect button renders with default props', () => {

        component = shallow(<DisconnectButton disconnect={jest.fn()} connected={true} language={{code: "eng"}}/>);

        expect(component).toMatchSnapshot()
    })
});