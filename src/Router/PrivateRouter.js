import React from 'react';
import { Redirect, Route } from "react-router-dom";
import { connect} from 'react-redux';





const PrivateRoute = ({ component: Component,...rest}) => {  
    
    console.log(rest);

    return <Route
        {...rest}
        
        render={props =>{                    

         return rest.Auth ?  <Redirect to ={{ pathname :'/' ,state : {from: props.location }}}/> : <Component {...props} />

        }   
            
        
        }
    />
    }
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         dispatch1: () => {
//             dispatch()
//         }
//     }
// }

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.stateAuth
    }
}
export default connect(mapStateToProps)(PrivateRoute)
