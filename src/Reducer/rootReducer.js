import authReducer from './authReducer';
import projectReducer from './projectReducer';
import  { combineReducers} from 'redux';
import {firebaseStateReducer} from 'react-redux-firebase';


const rootReducer = combineReducers({

    auth : authReducer,
    project : projectReducer,
    firebaseState : firebaseStateReducer
})
export default rootReducer;

