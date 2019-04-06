import React from 'react';
import Login from './../components/Login/Login';
import SignUp from './../components/Sign Up/Sign_Up';
import Cart from '../components/Cart/Cart';


const routes = [

    {
        path : '/Cart',
        exact : false,
        main : ({match , location})=><Cart match={match} location = {location}/>


    },  
    {
        path : '/SignUp',
        exact : false,
        main : ({match , location})=><SignUp match={match} location = {location}/>


    },
    {
        path : '/Login',
        exact : false,
        main : ({match , location})=><Login match={match} location = {location} />


    }
]
export default routes 