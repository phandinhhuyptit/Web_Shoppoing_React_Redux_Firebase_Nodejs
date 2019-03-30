import React from 'react';
import { Redirect, Route } from "react-router-dom";
import { connect} from 'react-redux';


const PrivateRoute = ({ component: Component,...rest}) => {  
    
    console.log(rest);

    return <Route
        {...rest}
        
        render={props =>{                    
            if(localStorage.getItem("Key")){

             return   <Redirect to ={{ pathname :'/' ,state : {from: props.location }}}/>

            }
            else {

             return  <Component {...props} />

            }    

        }              
        
        }
    />
}
const mapStateToProps = (state, ownProps) => {
    return { 
        auth: state.stateAuth
    }
}
export default connect(mapStateToProps)(PrivateRoute)
