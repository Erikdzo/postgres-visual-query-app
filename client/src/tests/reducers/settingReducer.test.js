import settingsReducer, {DEFAULT_STATE} from '../../reducers/settingsReducer'
import {CHANGE_LANGUAGE} from "../../actions/settingsActions";

describe('settings reducer', () => {
    test('reducer return initial state', () => {
        expect(settingsReducer(undefined, {})).toEqual(DEFAULT_STATE)
    });

    test('CHANGE_LANGUAGE changes langauge', () => {

        const language = {};

        let state =  settingsReducer(DEFAULT_STATE, {
            type: CHANGE_LANGUAGE,
            payload: language
        });

        expect(state).toEqual({
            ...DEFAULT_STATE,
            language: {}
        })
    })
});