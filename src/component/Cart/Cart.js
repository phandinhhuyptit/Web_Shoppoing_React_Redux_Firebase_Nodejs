import React, { Component } from 'react';
import Carts from './Carts/Carts';


class Cart extends Component {
    render() {
        return (
            <div className="Shopping_Cart">
                <div className="container">
                    <div className="row">
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
                            <button type="button" className="btn btn-success d-block">Tiếp Tục Mua Hàng</button>
                        </div>
                        <div className="col-12">
                            <p className="Price_All_Total">Tổng cộng:  <span> 4.800.000</span> đ </p>
                        </div>
                        <div className="col-12 d-flex justify-content-end">
                            <button type="button" className="btn btn-success ">Thanh Toán </button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Cart;