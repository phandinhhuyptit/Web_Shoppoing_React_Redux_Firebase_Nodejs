import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../Routes/Routes';



class DirectionalURL extends Component {

    ShowContentMenu = (routes) => {
        let result = null;
        if (routes.length > 0) {

            result = routes.map((value, index) => {

                return <Route

                    key={index}
                    path={value.path}
                    exact={value.exact}
                    component={value.main}

                />

            })
            return result;

        }

    }
    render() {
        return (
            <Switch>
                 {
                        this.ShowContentMenu(routes)
                 }
            </Switch>
        );
    }
}

export default DirectionalURL;