import authReducer from './authReducer';
import projectReducer from './projectReducer';
import  { combineReducers} from 'redux';
import userReducer from './userReducer';



const rootReducer = combineReducers({

    auth : authReducer,
    project : projectReducer,
    user : userReducer

})
export default rootReducer;

