import {createStore, combineReducers} from 'redux';
import {routeReducer} from 'redux-simple-router';
import reducers from '../reducers';

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}));

export default createStore(reducer);
