import React from 'react';
import Home from './../components/Home/Home';
import DetailProduct from './../components/Detail_Product/Detail_Product';
import Cart from './../components/Cart/Cart';
import Login from './../components/Login/Login';
import Product from './../components/Product/Product';
import SignUp from './../components/Sign Up/Sign_Up';
import PageNotFound from './../components/404/Not_Found_404'; 

const routes = [

    {
        path : '/',
        exact : true,
        main : ({match , location}) =><Home match={match} location = {location}/>        

    },
    {
        path : '/Login',
        exact : false,
        main : ({match , location})=><Login match={match} location = {location}/>


    },
    {
        path : '/Product',
        exact : false,
        main : ({match , location})=><Product match={match} location = {location}/>


    },
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
        path : '/DetailProduct/:slug.:id.html',
        exact : false,
        main : ({match , location})=><DetailProduct match={match} location = {location}/>


    },
    {
        path : '',
        exact : false,
        main : ({match , location})=><PageNotFound match={match} location = {location}/>
    }
]


export default routes;