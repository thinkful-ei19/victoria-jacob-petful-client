import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = cat => ({
    type: FETCH_CAT_SUCCESS,
    cat
})

export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest = () => ({
    type: FETCH_CAT_REQUEST
})

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = err => ({
    type: FETCH_CAT_ERROR,
    err
})

export const fetchCat = () => dispatch => {
    dispatch(fetchCatRequest());
    return (
        fetch(`${API_BASE_URL}/api/cat`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(res => dispatch(fetchCatSuccess(res)))
        .catch(err => {
            dispatch(fetchCatError(err));
        })
    )
}

export const ADOPT_CAT_SUCCESS = 'ADOPT_CAT_SUCCESS';
export const adoptCatSuccess = cat => ({
    type: ADOPT_CAT_SUCCESS,
    cat
})

export const ADOPT_CAT_REQUEST = 'ADOPT_CAT_REQUEST';
export const adoptCatRequest = () => ({
    type: ADOPT_CAT_REQUEST
})

export const ADOPT_CAT_ERROR = 'ADOPT_CAT_ERROR';
export const adoptCatError = err => ({
    type: ADOPT_CAT_ERROR,
    err
})

export const adoptCat = () => dispatch => {
    dispatch(adoptCatRequest());
    return (
        fetch(`${API_BASE_URL}/api/cat`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(res => dispatch(adoptCatSuccess(res)))
        .then(() => dispatch(fetchCat()))
        .catch(err => {
            dispatch(adoptCatError(err));
        })
    )
}
