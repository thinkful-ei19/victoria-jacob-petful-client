import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = dog => ({
    type: FETCH_DOG_SUCCESS,
    dog
})

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const fetchDogRequest = () => ({
    type: FETCH_DOG_REQUEST
})

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchDogError = err => ({
    type: FETCH_DOG_ERROR,
    err
})

export const fetchDog = () => dispatch => {
    dispatch(fetchDogRequest());
    return (
        fetch(`${API_BASE_URL}/api/dog`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(res => dispatch(fetchDogSuccess(res)))
        .catch(err => {
            dispatch(fetchDogError(err));
        })
    )
}

export const ADOPT_DOG_SUCCESS = 'ADOPT_DOG_SUCCESS';
export const adoptDogSuccess = dog => ({
    type: ADOPT_DOG_SUCCESS,
    dog
})

export const ADOPT_DOG_REQUEST = 'ADOPT_DOG_REQUEST';
export const adoptDogRequest = () => ({
    type: ADOPT_DOG_REQUEST
})

export const ADOPT_DOG_ERROR = 'ADOPT_DOG_ERROR';
export const adoptDogError = err => ({
    type: ADOPT_DOG_ERROR,
    err
})

export const adoptDog = () => dispatch => {
    dispatch(adoptDogRequest());
    return (
        fetch(`${API_BASE_URL}/api/dog`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(res => dispatch(AdoptDogSuccess(res)))
        .then(() => dispatch(fetchDog()))
        .catch(err => {
            dispatch(AdoptDogError(err));
        })
    )
}