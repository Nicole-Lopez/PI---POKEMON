// import { createStore, applyMiddleware, compose } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk'
// import rootReducer from '../reducer/index';


import { createStore, applyMiddleware, compose } from "redux";
import reducers from '../reducer/index'
import thunk from 'redux-thunk'

// const store = createStore(reducers, applyMiddleware(thunk));


// PARA EL DESARROLLO
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));











// METODO FACIL
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

// OTRA FORMA
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

//SIN EL THUNK
// import { createStore } from 'redux';

// import rootReducer from '../reducer';


// export const store = createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// );


export default store;