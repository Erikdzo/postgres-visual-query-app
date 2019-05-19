export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

export function changeLanguage(data) {
    return function (dispatch) {

        dispatch({type: CHANGE_LANGUAGE, payload: data})
    }
}