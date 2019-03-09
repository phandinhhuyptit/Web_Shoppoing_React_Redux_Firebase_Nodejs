import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Header.css';
import Navigation from './Navigation/Navigation';
import { connect } from 'react-redux';
import * as Action from '../../Actions/Actions'

class Header extends Component {


    ShowLogin = (e) => {

        e.preventDefault();
        this.props.ClickShowLogin();

    }
    CloseLogin = () => {

        this.props.ClickCloseLogin();
    }

    on_Show_Nav = () => {

        this.props.onShow_Nav(true);

    }
    CloseSlideBar = () => {

        this.props.on_Close_Silde_Bar(this.props.OnNav);

    }
    

    render() {
        let Login, Background, Backgroud_Nav, Nav;
        if (this.props.ShowLogin) {

            Login = <div className="modal_login ">
                <form className="modal-content animate" action="/action_page.php">
                    <div className="container Container_Login">
                        <div onClick={() => this.CloseLogin()} className="CloseX">
                            <i className="fas fa-times Close_Login" />
                        </div>
                        <div className="row TitleLogin">
                            <div className="col-6">
                                <h3>Đăng Nhập</h3>
                            </div>
                            <div className="col-6 text-register">
                                <a href="true">Tạo Tài Khoản</a>
                            </div>
                        </div>
                        <label htmlFor="uname"><b>Tài khoản</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required />
                        <label htmlFor="psw"><b>Mật Khẩu</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />
                        <button type="submit">Đăng Nhập</button>
                        <label>
                            <input type="checkbox" defaultChecked="checked" name="remember" /> Remember me
                </label>
                    </div>
                    <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
                        <button onClick={() => this.CloseLogin()} type="button" className="cancelbtn">Hủy</button>
                        <span className="psw">Quên <a href="#">Mật Khẩu?</a></span>
                    </div>
                </form>
            </div>


        }
        if (this.props.ShowLogin) {

            Background = <div onClick={() => this.CloseLogin()} className="Backgroud-Navbar"></div>

        }
        if (this.props.OnNav) {

            Nav = <Navigation />
            Backgroud_Nav = <div onClick={() => this.CloseSlideBar()} className="Backgroud-Navbar"></div>

        }

        return (
            <header className="Header ">
                <div className="container">
                    <div className="row rowHeader">
                        <div className="col-md-3 col-lg-3 Logo">
                            <button onClick={() => this.on_Show_Nav()} className="btn btn-light Menu-Mobile" type="button">
                                <i className="fas fa-align-justify icon-menu" />
                            </button>
                            <div className="header-logo">
                                <a href="#">
                                    <img className="img-fluid img-logo" src=" https://cdn.worldvectorlogo.com/logos/react-native-firebase-1.svg" alt="Đồ Điện Tử Giá Rẻ" />
                                </a>
                            </div>
                            <a href="/Cart.html" className="Border-Cart2 border2">
                                <i className="fas fa-shopping-cart fa-lg icon-cart " />
                                <span className="Cart-Text">Giỏ hàng</span>
                                <span className="Cart-Quantity"> 0</span>
                            </a>
                        </div>
                        <div className="col-md-6 col-lg-5 Search">
                            <div className="header-search">
                                <input type="text " className="InputSeach" placeholder="Tìm kiếm sản phẩm mong muốn..." />
                                <button className="btn btn-danger buttonSearch" type="submit">Tìm Kiếm</button>
                            </div>
                        </div>
                        <div className="col-md-2 col-lg-2 Account  d-none d-lg-flex">
                            <a onClick={(event) => this.ShowLogin(event)} href="#" className="Account_Infomation ">
                                <i className="fas fa-user fa-lg Icon-User" />
                                <span className="sign_up">Đăng Nhập </span>
                                <span className="Tool_Tip_Sign_Up">Đăng Nhập</span>
                            </a>
                        </div>
                        <div className="col-md-3 col-lg-2 Cart d-none d-md-block">
                            <a href="/Cart.html" className="Border-Cart border">
                                <i className="fas fa-shopping-cart fa-lg icon-cart " />
                                <span className="Cart-Text">Giỏ hàng</span>
                                <span className="Cart-Quantity"> 0</span>
                            </a>
                            <div className="Mini_Cart d-none d-lg-block">
                                <div className="Mini_Cart_Info">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="image border_Mini_Cart">
                                                    <a href="#">
                                                        <img src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-di/qck-pubg/1-90x90.jpg" alt="error" className="img-fluid" />
                                                    </a>
                                                </td>
                                                <td className="name border_Mini_Cart">
                                                    <a href="#">
                                                        Bàn Di Chuột Qck+ Miramar PUBG Edition
                      </a>
                                                    <p>1 x 6.940.000 đ</p>
                                                </td>
                                                <td className="remove border_Mini_Cart">
                                                    <i className="fas fa-times" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="Mini_Cart_Total border_Mini_Cart">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="Title_Price">Sub-Total:</td>
                                                <td className="Price">6.940.000 đ</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Total:
                    </td>
                                                <td>6.940.000 đ</td>
                                                <td />
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="Mini_Cart_Check_Out_Button border_Mini_Cart">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <a href="#" className="btn btn-success">Xem Giỏ Hàng</a>
                                                </td>
                                                <td>
                                                    <a href="#" className="btn btn-success">Thanh Toán </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row rowHeader2">
                        <div className="col-lg-3 col-md-3 Menu d-none  d-md-block d-lg-block">
                            <div className="Header-Navigation">
                                <span className="ListMenu">
                                    <i className="fas fa-bars fa-md Icon-Bars" />
                                    <span className="Text-Menu"> Danh Sách Sản Phẩm</span>
                                </span>
                                <ul className="drop-navigation">
                                    <li>
                                        <a href="/Items.html" className="BanPhimCo" title="Bàn Phím Cơ">
                                            <span><i className="fas fa-keyboard fa-md" /></span>
                                            <span className="Text">Bàn Phím Cơ</span>
                                        </a>
                                        <div className="Nav-Sub">
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <i className="fas fa-angle-right angle-right" />
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span><i className="fas fa-mobile-alt fa-md" /></span>
                                            <span className="Text">Điện Thoại</span>
                                        </a>
                                        <div className="Nav-Sub">
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <i className="fas fa-angle-right angle-right" />
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span><i className="fas fa-headphones fa-md" /></span>
                                            <span className="Text">Tai Nghe</span>
                                        </a>
                                        <div className="Nav-Sub">
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <i className="fas fa-angle-right angle-right" />
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span><i className="fas fa-gamepad fa-md" /></span>
                                            <span className="Text">Chuột Gamming</span>
                                        </a>
                                        <div className="Nav-Sub">
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <i className="fas fa-angle-right angle-right" />
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span><i className="fab fa-cc-amazon-pay fa-md" /></span>
                                            <span className="Text">Phụ Kiện</span>
                                        </a>
                                        <div className="Nav-Sub">
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <i className="fas fa-angle-right angle-right" />
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span><i className="fas fa-desktop fa-md" /></span>
                                            <span className="Text">Linh Kiện Máy Tính</span>
                                        </a>
                                        <div className="Nav-Sub">
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <i className="fas fa-angle-right angle-right" />
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span><i className="fas fa-camera fa-md" /></span>
                                            <span className="Text">Máy Ảnh</span>
                                        </a>
                                        <div className="Nav-Sub">
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="#">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <i className="fas fa-angle-right angle-right" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9 d-none d-md-block ">
                            <ul className="support-policy">
                                <li>
                                    <a href="#" className="text-information">GIAO HÀNG MIỄN PHÍ &lt; 5km </a> </li> <li>
                                    <a href="#" className="text-information d-none d-xl-inline">THANH TOÁN KHI NHẬN HÀNG </a>
                                </li>
                                <li>
                                    <a href="#" className="text-information">
                                        <span className="HotLine">HOTLINE:</span>
                                        <b className="number_phone">0967 707 003 - 0961934198</b>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>




                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>

                    {Login}
                    {Background}
                </ReactCSSTransitionGroup>


                <ReactCSSTransitionGroup
                    transitionName="Nav"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                >
                    {Nav}
                    {Backgroud_Nav}
                </ReactCSSTransitionGroup>


            </header>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        OnNav: state.onShowNav
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onShow_Nav: (ShowNav) => {
            dispatch(Action.Show_Nav(ShowNav))
        },
        on_Close_Silde_Bar: (Close_Slide_Bar) => {

            dispatch(Action.Close_Silde_Bar(Close_Slide_Bar))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
