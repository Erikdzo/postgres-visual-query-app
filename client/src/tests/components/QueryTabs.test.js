import React from 'react';
import {shallow} from 'enzyme';
import {QueryTabs} from "../../components/QueryTabs";

describe('Component: QueryTabs', () => {
    let component, props;

    beforeEach(() => {
         props = {
             language: {code: "eng"},

         }
    });

    test('QueryTabs renders with default props', () => {
        component = shallow(<QueryTabs {...props}/>);

        expect(component).toMatchSnapshot()
    })
});