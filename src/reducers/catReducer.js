import {
  FETCH_CAT_SUCCESS,
  FETCH_CAT_REQUEST,
  FETCH_CAT_ERROR,
  ADOPT_CAT_REQUEST,
  ADOPT_CAT_ERROR
} from '../actions/cat';

const initialState = {
  data: null,
  error: null,
  loading: false
}

export function catReducer(state = initialState, action) {
    if(action.type === FETCH_CAT_SUCCESS) {
      console.log(action)
      return Object.assign({}, state, {
          loading: false,
          error: false,
          cat: action.cat
      })
    }
    if(action.type === FETCH_CAT_REQUEST) {
        return Object.assign({}, state, {loading: true});
    }
    if(action.type === FETCH_CAT_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        } )
    }
    if(action.type === ADOPT_CAT_REQUEST) {
      return Object.assign({}, state, {loading: true});
    }
    if(action.type === ADOPT_CAT_ERROR) {
      return Object.assign({}, state, {
          loading: false,
          error: action.error
      } )
    }
  return state
}
