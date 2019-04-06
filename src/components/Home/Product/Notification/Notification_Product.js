import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Action from '../../../../Actions/ProjectActions';
import  './Notification_Product.css';
import { Link} from 'react-router-dom';   


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
                <Link  className="ml-1" to={`Detail/${this.props.onProductNotification.ID_Product}`}>{this.props.onProductNotification.Name}</Link>                        
                 <span className="SpaceContent">vào</span>       
                <Link to="/Cart">Giỏ Hàng</Link>
                    </span>
                </div>
                <div className="CheckOutButton">
                    <Link to="/Cart" className="btn btn-success">Xem Giỏ Hàng</Link>
                    <Link to="/Payment" className="btn btn-success">Thanh Toán </Link>
                </div>
                <i  onClick  ={()=>this.Close_Notification_Product_Handdler()}  className="fas fa-times" />
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        onProductNotification : state.project.ProductNotification
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