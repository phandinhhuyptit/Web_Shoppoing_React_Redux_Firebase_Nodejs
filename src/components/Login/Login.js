import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    render() {
        return (

            <div className="container">
                <div className="row">
                    <div id="column-left" className="col-md-3 col-sm-12">
                        <h3>Tài khoản</h3>
                        <div className="list-group box">
                            <a href="https://www.playzone.vn/login" className="list-group-item dark_hover">Đăng nhập</a>
                            <a href="https://www.playzone.vn/register" className="list-group-item dark_hover">Đăng kí</a>
                            <a href="https://www.playzone.vn/index.php?route=account/forgotten" className="list-group-item dark_hover">Quên Mật Khẩu</a>
                            <a href="https://www.playzone.vn/account" className="list-group-item dark_hover">Tài Khoản Của Tôi</a>
                            <a href="https://www.playzone.vn/index.php?route=account/address" className="list-group-item dark_hover">Địa chỉ</a>
                            <a href="https://www.playzone.vn/wishlist" className="list-group-item dark_hover">Danh sách yêu thích</a>
                            <a href="https://www.playzone.vn/index.php?route=account/order" className="list-group-item dark_hover">Lịch sử đặt hàng</a>
                            <a href="https://www.playzone.vn/index.php?route=account/download" className="list-group-item dark_hover">Tải về</a>
                            <a href="https://www.playzone.vn/index.php?route=account/recurring" className="list-group-item dark_hover">Thanh toán Định kỳ</a>
                            <a href="https://www.playzone.vn/index.php?route=account/reward" className="list-group-item dark_hover">Điểm Thưởng</a>
                            <a href="https://www.playzone.vn/index.php?route=account/return" className="list-group-item dark_hover">Đổi / Trả hàng</a>
                            <a href="https://www.playzone.vn/index.php?route=account/transaction" className="list-group-item dark_hover">Lịch sử Giao dịch</a>
                            <a href="https://www.playzone.vn/index.php?route=account/newsletter" className="list-group-item dark_hover">Thư thông báo</a>
                        </div>

                    </div>


                    <div id="content-login-up" className="col-md-9 col-sm-12">
                        <h1>Đăng nhập tài khoản</h1>
                        <div className="bordered_content box">
                            <div className="row login_screen no_margin">
                                <div className="col-md-6 ">
                                    <div className="padded top">
                                        <h2>Khách hàng mới</h2>
                                        <p>Bằng cách tạo tài khoản bạn có thể mua sắm nhanh hơn, cập nhật tình trạng đơn hàng, theo dõi những đơn hàng đã đặt và đặc biệt là sẽ được hưởng nhiều chương trình ưu đãi!</p>
                                    </div>
                                    <div className="padded bottom">
                                        <a href="https://www.playzone.vn/register" className="btn btn-primary">Đăng ký tài khoản</a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="padded top">
                                        <h2>Khách hàng cũ</h2>
                                        <p>Tôi là khách hàng cũ</p>
                                        <form action="https://www.playzone.vn/login" method="post" encType="multipart/form-data">
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="input-email">Địa chỉ E-Mail hoặc Số điện thoại:</label>
                                                <input type="text" name="email" defaultValue placeholder="Địa chỉ E-Mail hoặc Số điện thoại:" id="input-email" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label className="control-label" htmlFor="input-password">Mật khẩu:</label>
                                                <input type="password" name="password" defaultValue placeholder="Mật khẩu:" id="input-password" className="form-control" />
                                            </div>
                                            <a href="https://www.playzone.vn/index.php?route=account/forgotten" className="forgotten">Quên mật khẩu</a>
                                        </form></div>
                                    <div className="padded bottom">
                                        <div id="social_login_content_holder" />
                                        <input type="submit" defaultValue="Đăng nhập" className="btn btn-primary" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Login;