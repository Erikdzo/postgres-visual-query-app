import {INITIAL_STATE} from "../../reducers/settingsReducer";
import * as actions from '../../actions/settingsActions';
import configureMockStore from 'redux-mock-store';
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

const middlewares = [thunk, promise];
const mockStore = configureMockStore(middlewares);

describe('settings actions', () => {
    let store;

    beforeEach(() => {
        store = mockStore(INITIAL_STATE);

    });
    test('create action to switch language', () => {
        store.dispatch(actions.changeLanguage({}));

        expect(store.getActions()[0]).toEqual({type: actions.CHANGE_LANGUAGE, payload: {}})
    })

});