import {createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {routeReducer} from 'redux-simple-router';
import reducers from '../reducers';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  ...reducers,
  routing: routeReducer,
  form: formReducer
});

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

export default createStoreWithMiddleware(reducer);
