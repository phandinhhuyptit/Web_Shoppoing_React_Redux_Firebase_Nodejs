import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../Routes/Routes';
import routesPrivate from '../Routes/RoutesPrivate';
import PrivateRoute from './PrivateRouter';
import {connect} from 'react-redux';
import {auth} from '../Firebase/config';


class DirectionalURL extends Component {

   ShowContentMenu =    (routes) => {
        let result = null;
        if (routes.length > 0) {

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
    
    ShowPrivateRouter = (routes) =>{
        
        let State;
        let result = null;

      State= auth.onAuthStateChanged((user) => {
            if (user) {
                
                return true

            } else {
                
               return false 

            }
          });          
        
        if(routes.length > 0){
                
             result = routes.map((value,index)=>(

                     <PrivateRoute
                        key= {index}
                        path = {value.path}
                        exact = {value.exact}                        
                        component = {value.main}
                                       
                    /> 
             ))                    
              return result;
        }
    }
    render() {
       
        return (
                <div>
                 {
                    

                     this.ShowContentMenu(routes)


                 
                        
                 }
                 {
                        this.ShowPrivateRouter(routesPrivate)
                 }                 
                </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth.stateAuth
    }
}

export default connect(mapStateToProps)(DirectionalURL)
