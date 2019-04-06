import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../Routes/Routes';
import routesPrivate from '../Routes/RoutesPrivate';
import PrivateRoute from './PrivateRouter';
import {connect} from 'react-redux';
import {auth} from '../Firebase/config';
import { withRouter } from 'react-router-dom';
import Cart from '../components/Cart/Cart';
import Login from '../components/Login/Login';
import SignUp from '../components/Sign Up/Sign_Up';


class DirectionalURL extends Component {

   ShowContentMenu =    (routes) => {
        
        if (routes.length > 0) {
            let result 

            result =   routes.map((value, index) =>( 

                 <Route

                    key={index}
                    path={value.path}
                    exact={value.exact}
                    component={value.main}
                />
            ))
            return result;
        }
    } 
    
    ShowPrivateRouter =  (routes) =>{

        let result = null;
        if(routes.length > 0){
            
            
          return result = routes.map((value,index)=>(

                     <PrivateRoute
                        key= {index}
                        path = {value.path}
                        exact = {value.exact}                        
                        component = {value.main}                                       
                    /> 
             ))                    
             
        }
    }
    render() {
       
        return (

            <div>
                {

                    this.ShowContentMenu(routes)

                }
                <PrivateRoute exact path={'/Login'} component={({ match, location }) => <Login match={match} location={location} />} />
                <PrivateRoute exact path={'/Cart'} component={({ match, location }) => <Cart match={match} location={location} />} />
                <PrivateRoute exact path={'/SignUp'} component={({ match, location }) => <SignUp match={match} location={location} />} />
            </div>

                
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth.stateAuth
    }
}

export default  withRouter(connect(mapStateToProps)(DirectionalURL));
