import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import  thunk  from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk))
);

export default store