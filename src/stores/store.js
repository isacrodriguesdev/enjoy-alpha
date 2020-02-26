import { createStore, applyMiddleware, combineReducers } from 'redux';
// # middlewares
import thunk from 'redux-thunk';

const combiners = combineReducers({
  home: () => ({})
});
const middlewares = applyMiddleware(thunk);

export default createStore(combiners, middlewares);