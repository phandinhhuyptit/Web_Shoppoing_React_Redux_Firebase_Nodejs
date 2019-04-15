import React from 'react';
import { Redirect, Route, withRouter } from "react-router-dom";
import { connect } from 'react-redux';



const PrivateRoute = ({ component: Component, ...rest }) => {


    return <Route
        {...rest}
        render={props => {           
            return localStorage.getItem("Key") ? (

                rest.path == '/Login' || rest.path == '/SignUp' ? (<Redirect to={{ pathname: '/', state: { from: props.location } }} />) : (<Component {...props} />)
            ) : (
                    rest.path === "/Cart" ? (<Redirect to={{ pathname: '/Login', state: { from: props.location } }} />) : (<Component {...props} />)

                )
        }
        }
    />
}
const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.stateAuth
    }
}
export default withRouter(connect(mapStateToProps)(PrivateRoute));
