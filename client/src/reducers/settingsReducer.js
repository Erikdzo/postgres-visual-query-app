import {CHANGE_LANGUAGE} from "../actions/settingsActions";

const DEFAULT_STATE = {
    language: {code: "eng", name: "English"}
};

export default function reducer(state=DEFAULT_STATE, action) {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return {
                ...state,
                language: action.payload
            };
        default:
            return state;
    }
}