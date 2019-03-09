import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Action from '../../../../Actions/Actions';
import  './Notification_Product.css'


    


class Notification_Product extends Component {

    Close_Notification_Product_Handdler = () =>{

        this.props.on_Close_Notification_Product(false);
    }

    render() {
        return (
            <div className="Notification">
                <div className="info_product">
                    <img src="https://www.playzone.vn/image/cache/catalog/san%20pham/corsair/ban-phim/K70%20MK2/Black/1-80x80.jpg" alt="true" />
                    <span>
                        Thành công: Bạn đã thêm
                <a href="true">Bàn phím cơ Corsair K70 MK.2 - RGB - Cherry MX</a>
                        vào
                <a href="true">Giỏ Hàng</a>
                    </span>
                </div>
                <div className="CheckOutButton">
                    <a href="true" className="btn btn-success">Xem Giỏ Hàng</a>
                    <a href="true" className="btn btn-success">Thanh Toán </a>
                </div>
                <i  onClick  ={()=>this.Close_Notification_Product_Handdler()}  className="fas fa-times" />
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        
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