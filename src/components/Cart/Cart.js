import React, { Component } from 'react';
import Carts from './Carts/Carts';
import {connect} from 'react-redux';
import './Cart.css';
import {Link} from 'react-router-dom'
class Cart extends Component {

    coverStringMoney = (Price) => {
        let _tmpString = '';
        let _returnString = '';
        Price = Price.toString();
        let _count = 0;
        for (let i = Price.length; i > 0; i--) {
            if (_count % 3 === 0 && i !== Price.length) {
                _tmpString += '.';
            }
            _tmpString += Price[i - 1];
            _count++;
        }
        for (let j = _tmpString.length; j > 0; j--) {
            _returnString += _tmpString[j - 1];
        }
        return _returnString;
    }
    ChangeToSlug = ((str) => {
        // Change To LowerCase
        str = str.toLowerCase();

        // delete sign
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');

        // Delete Special Characters
        str = str.replace(/([^0-9a-z-\s])/g, '');

        //Delete Space and Charater '-'
        str = str.replace(/(\s+)/g, '-');

        // delete the remainder at the head
        str = str.replace(/^-+/g, '');
        // delete the remainder at the end 
        str = str.replace(/-+$/g, '');

        // return
        return str;
    })   
    render() {
        let {cartOfUser} = this.props;
        let emptyCart;
        let Cart ;
        if(cartOfUser){

            if(cartOfUser.Items.length === 0) {

                emptyCart = <div>
                    <h4 className="Title_Shopping_Cart">Giỏ Hàng</h4>
                    <p className="emptyCart">Giỏ hàng của bạn đang trống!</p>
                </div>

            }
            else{

                Cart = <div className="row">
                    <h4 className="Title_Shopping_Cart">Giỏ Hàng</h4>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th className="d-none d-lg-table-cell">Hình ảnh</th>
                                <th>Tên sản phẩm</th>
                                <th className="d-none d-md-table-cell">Đơn Giá</th>
                                <th>Số lượng</th>
                                <th className="d-none d-md-table-cell">Tổng cộng</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            <Carts></Carts>
                        </tbody>
                    </table>
                    <div className="col-12 ">
                        <Link to={'/'} className="btn btn-success d-block countinueBuy">Tiếp Tục Mua Hàng</Link>
                    </div>
                    <div className="col-12">
                        <p className="Price_All_Total">Tổng cộng: {cartOfUser ? (cartOfUser.TotalPrice ? this.coverStringMoney(cartOfUser.TotalPrice) : 0) : 0} <span></span> đ </p>
                    </div>
                    <div className="col-12 d-flex justify-content-end">
                        <button type="button" className="btn btn-success ">Thanh Toán </button>
                    </div>
                </div>


            }

        }
            
        return (
            <div className="Shopping_Cart">
                <div className="container">
                    {
                        emptyCart
                    }
                    {
                        Cart
                    }
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        cartOfUser: state.user.cartOfUser
       
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            dispatch()
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)

