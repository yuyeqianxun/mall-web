import { combineReducers } from 'redux';
import recommend from './recommend';
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const reducer = combineReducers({
    recommend
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;