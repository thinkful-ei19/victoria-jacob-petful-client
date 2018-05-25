import { createStore, applyMiddleware, combineReducers } from 'redux'
import { catReducer } from './reducers/catReducer';
import { dogReducer } from './reducers/dogReducer';
import thunk from 'redux-thunk'

const reducers = {
  cat: catReducer,
  dog: dogReducer
};

const reducer = combineReducers(reducers);


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))
export default store
