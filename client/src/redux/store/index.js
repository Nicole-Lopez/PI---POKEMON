// import { createStore, applyMiddleware, compose } from "redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from '../reducer/index'
import thunk from 'redux-thunk'

// const store = createStore(reducers, applyMiddleware(thunk));


// PARA EL DESARROLLO
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));


export default store;