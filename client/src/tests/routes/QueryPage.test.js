import React from 'react';
import {shallow} from 'enzyme';
import {QueryPage} from "../../routes/QueryPage";

describe('Route: QueryPage', () => {

    let component;

    test('QueryPage renders with default props', () => {
        component = shallow(<QueryPage language={{code: "eng"}} tables={[]}/>);

        expect(component).toMatchSnapshot()
    })
});