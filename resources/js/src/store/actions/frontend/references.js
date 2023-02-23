import * as actionTypes from '../actionTypes';

const prefix = '/api/';

export const resetReferences = () => ({ type: actionTypes.REFERENCES_RESET });
const referencesStart = () => ({ type: actionTypes.REFERENCES_START });
const referencesSuccess = data => ({ type: actionTypes.REFERENCES_SUCCESS, ...data });
const referencesFail = error => ({ type: actionTypes.REFERENCES_FAIL, error });
export const getReferences = () => async dispatch => {
    dispatch(referencesStart());

    try {
        const res = await fetch(`${prefix}references`);
        const resData = await res.json();

        dispatch(referencesSuccess(resData));
    } catch (error) {
        console.log(error);
        dispatch(referencesFail(error));
    }
}