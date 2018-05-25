import {
  FETCH_DOG_SUCCESS,
  FETCH_DOG_REQUEST,
  FETCH_DOG_ERROR,
  ADOPT_DOG_REQUEST,
  ADOPT_DOG_ERROR
} from '../actions/dog';

const initialState = {
  data: null,
  error: null,
  loading: false
}

export function dogReducer(state = initialState, action) {
    if(action.type === FETCH_DOG_SUCCESS) {
      console.log(action)
      return Object.assign({}, state, {
          loading: false,
          error: false,
          dog: action.dog
      })
    }
    if(action.type === FETCH_DOG_REQUEST) {
        return Object.assign({}, state, {loading: true});
    }
    if(action.type === FETCH_DOG_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        } )
    }
    if(action.type === ADOPT_DOG_REQUEST) {
      return Object.assign({}, state, {loading: true});
    }
    if(action.type === ADOPT_DOG_ERROR) {
      return Object.assign({}, state, {
          loading: false,
          error: action.error
      } )
    }
  return state
}
