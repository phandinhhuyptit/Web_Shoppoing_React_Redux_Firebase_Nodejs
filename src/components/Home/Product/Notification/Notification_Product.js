import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Action from '../../../../Actions/Actions';
import  './Notification_Product.css';   


class Notification_Product extends Component {

    Close_Notification_Product_Handdler = () =>{

        this.props.on_Close_Notification_Product(false);
    }

    render() {
             
        return (
            <div className="Notification">
                <div className="info_product">
                    <img src={this.props.onProductNotification.GeneralImage} alt="true" />
                    <span>
                        Thành công: Bạn đã thêm
                <a className="ml-1" href={`Detail/${this.props.onProductNotification.ID_Product}`}>{this.props.onProductNotification.Name}</a>                        
                 <span className="SpaceContent">vào</span>       
                <a href="/Cart">Giỏ Hàng</a>
                    </span>
                </div>
                <div className="CheckOutButton">
                    <a href="/Cart" className="btn btn-success">Xem Giỏ Hàng</a>
                    <a href="/Payment" className="btn btn-success">Thanh Toán </a>
                </div>
                <i  onClick  ={()=>this.Close_Notification_Product_Handdler()}  className="fas fa-times" />
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        onProductNotification : state.ProductNotification
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        on_Close_Notification_Product: (Close_Product) => {
           dispatch(Action.Close_Notification_Product(Close_Product))   
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification_Product)