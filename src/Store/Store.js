import rootReducer from "../Reducer/Reducer";
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// declare Redux Dev Tools
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(

    rootReducer,
    composeEnhancer(applyMiddleware(thunk))
)


export default store