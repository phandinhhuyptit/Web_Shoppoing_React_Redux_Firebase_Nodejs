import React, { Component } from 'react';
import TitleProduct from './Title_Product/Title_Product';
import Products from './Products/Products';
import NotificationProduct from './Notification/Notification_Product';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Product.css';
import * as Action from '../../../Actions/Actions';

class Product extends Component {


    Close_Notification_Product = () =>{

        this.props.On_Close_Notification_Product(false);

    }  


    render() 
    
    {
        let Duplicate_Notification_Product,Background_Notification ;
        if(this.props.OnNotificationProduct){

            Background_Notification =<div onClick={() => this.Close_Notification_Product()} className="Backgroud-Navbar"></div>    
            Duplicate_Notification_Product=<NotificationProduct/>   
            

        }
        return (
            <div>
                 <TitleProduct></TitleProduct>
                 <Products></Products>
                 <ReactCSSTransitionGroup
                 transitionName="Notification"
                 transitionEnterTimeout={500}
                 transitionLeaveTimeout={300}                 
                 >
                 {Duplicate_Notification_Product}
                 </ReactCSSTransitionGroup> 

                 <ReactCSSTransitionGroup
                 transitionName="Background_Notification"
                 transitionEnterTimeout={500}
                 transitionLeaveTimeout={300}                 
                 >   
                    {Background_Notification}
                    
                </ReactCSSTransitionGroup>    
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        OnNotificationProduct : state.onNotification_Product
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        On_Close_Notification_Product: (Close_Product) => {
            dispatch(Action.Close_Notification_Product(Close_Product))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Product)
