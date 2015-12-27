import {createStore, combineReducers, applyMiddleware} from 'redux';
import {routeReducer} from 'redux-simple-router';
import reducers from '../reducers';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  ...reducers,
  routing: routeReducer
});

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

export default createStoreWithMiddleware(reducer);
