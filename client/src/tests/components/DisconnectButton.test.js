import React from 'react';
import {shallow} from 'enzyme';
import {DisconnectButton} from "../../components/DisconnectButton";

describe('Component: DisconnectButton', () => {

    let component, props;

    beforeEach(() => {
        props = {
            disconnect: jest.fn(),
            connected: true,
            language: {code: "eng"}
        }
    });

    test('Disconnect button renders with default props', () => {
        component = shallow(<DisconnectButton {...props}/>);

        expect(component).toMatchSnapshot()
    });

    test('DisconnectButton handleOnClick calls disconnect once', () => {
        component = shallow(<DisconnectButton {...props}/>);

        component.instance().handleOnClick();

        expect(props.disconnect.mock.calls.length).toBe(1)
    })
});