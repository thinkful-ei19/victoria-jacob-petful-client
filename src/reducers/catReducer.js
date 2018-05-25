import {
  FETCH_CAT_SUCCESS,
  FETCH_CAT_REQUEST,
  FETCH_CAT_ERROR,
  ADOPT_CAT_REQUEST,
  ADOPT_CAT_ERROR
} from '../actions/cat';

const initialState = {
  cat: {
    img:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name:'Fluffy',
    sex:'Female',
    age:'2',
    breed: 'Bengal',
    story:'Thrown on the street',
  },
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
