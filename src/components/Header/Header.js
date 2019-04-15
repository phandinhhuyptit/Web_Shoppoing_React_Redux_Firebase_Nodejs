import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Header.css';
import Navigation from './Navigation/Navigation';
import { connect } from 'react-redux';
import * as Action from '../../Actions/ProjectActions';
import PropTypes from 'prop-types';
import  * as actionAuth from '../../Actions/AuthAction';
import  {Link} from 'react-router-dom';
import jwt from 'jsonwebtoken';
import * as userAction from '../../Actions/UserAction';

const propTypes = {

    OnNav: PropTypes.bool.isRequired,
    onShow_Nav: PropTypes.func.isRequired,
    on_Close_Silde_Bar: PropTypes.func.isRequired,
    on_signIn: PropTypes.func.isRequired,
    on_Sign_Out : PropTypes.func.isRequired

}
const defaultProps = {

    onShow_Nav: () => { },
    on_Close_Silde_Bar: () => { },
    on_signIn: () => { },
    on_Sign_Out : () =>{ }
}

class Header extends Component {
    state = {
        Email: '',
        Password: ''
    }
    ChangeToSlug = ((str) =>{
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
   
    componentWillUpdate = () =>{

        if (localStorage.getItem("Key")) {
            const idToken = localStorage.getItem("Key");
            const decoded = jwt.decode(idToken);

            if (!this.props.cartOfUser) {

                if (decoded) {

                    const user = decoded;
                    this.props.onGetCartOfUser(user.user_id);
                }
            }
            if(!this.props.AuthData){

                if (decoded) {

                    const user = decoded;
                    this.props.on_AuthData(user);
                }
                
            }     

        }
    }    
    handleChange = (e) => {

        this.setState({

            [e.target.name]: e.target.value
        })

    }
    handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.on_signIn(this.state);

        // Async     

        setTimeout(() => {    

            if (this.props.authSignInError === null) {


                this.props.ClickCloseLogin();
            }
        }, 1500)

    }   

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
    Handle_Log_Out = (e) =>{

        e.preventDefault();
        this.props.on_Sign_Out();
        localStorage.removeItem("Key");


    }
    handRemoveProductFromCart = (event) =>{

        
        const idProduct =event.currentTarget.getAttribute('data-target');
        this.props.onRemoveProductFromCart(idProduct, this.props.cartOfUser,this.props.AuthData.user_id);            

    }
    render() {
       

        let totalQuantity = 0  ;
        let {cartOfUser,authSignInError, StateAuth } = this.props;
        let SignIn_Error,State_SignIn;
        let Login, Background, Backgroud_Nav, Nav;
        let miniCart1;
        let miniCart2; 
        let MiniButtonCart;
        let emptyCart;

        if (cartOfUser) {

            if (cartOfUser.Items.length !== 0) {

                miniCart1 = cartOfUser.Items.map(item => {

                    return (
                        <div className="Mini_Cart_Info">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="image border_Mini_Cart">
                                            <a href="2">
                                                <img src={item.Product.GeneralImage} alt="error" className="img-fluid" />
                                            </a>
                                        </td>
                                        <td className="name border_Mini_Cart">
                                            <Link to={`DetailProduct/${this.ChangeToSlug(item.Product.Name)}.${item.Product.ID_Product}.html`} >
                                                {item.Product.Name}
                                            </Link>
                                            <p>{item.Quantity} x {this.coverStringMoney(item.Product.Price)} đ</p>
                                        </td>
                                        <td className="remove border_Mini_Cart">
                                            <i  onClick={(event)=>this.handRemoveProductFromCart(event)} className="fas fa-times" data-target={item.Product.ID_Product} />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                })
                miniCart2 = <div className="Mini_Cart_Total border_Mini_Cart">
                    <table>
                        <tbody>
                            <tr>
                                <td className="Title_Price">Sub-Total:</td>
                                <td className="Price">{this.coverStringMoney(cartOfUser.TotalPrice)} đ</td>
                            </tr>
                            <tr>
                                <td>
                                    Total:
                                </td>
                                <td>{this.coverStringMoney(cartOfUser.TotalPrice)} đ</td>
                                <td />
                            </tr>
                        </tbody>
                    </table>
                </div>

                MiniButtonCart = <div className="Mini_Cart_Check_Out_Button border_Mini_Cart">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <a href="4" className="btn btn-success">Xem Giỏ Hàng</a>
                                </td>
                                <td>
                                    <a href="5" className="btn btn-success">Thanh Toán </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            }
            else{


                emptyCart = "Giỏ Hàng Đang Trống";


            }


        }
        else {


            emptyCart = "Giỏ Hàng Đang Trống";
            

        }


        if (cartOfUser) {

            if (cartOfUser.Items) {

                cartOfUser.Items.forEach(item => {

                       totalQuantity += item.Quantity;
                      

                })
            }
        }        
   
        if(StateAuth===true){               
                
                State_SignIn =    <a className="Detail_Account">
                <i className="fas fa-user fa-lg Icon-User" />
                <span className="sign_up">Xin Chào</span>
                  <div className="box">
    
                    <ul className="user-ajax-customer">
                        <li>
                            <a href="/sales/order/history/">
                            
                              Đơn hàng của tôi
                            
                            </a>
                        </li>
                        <li className="book-profile" />
                        <li className="notification-count">
                            <a title="Thông báo của tôi" href="/customer/notification/" >
                                Thông báo của tôi
                               <strong>2</strong>
                            </a>
                        </li>
                        <li><a title="Tài khoản của tôi" href="/customer/account/edit" >Tài khoản của tôi</a></li>
                        <li><a href="/nhan-xet-san-pham-ban-da-mua" title="Nhận xét sản phẩm đã mua">Nhận xét sản phẩm đã mua</a></li>
                        <li><a href="/danh-rieng-cho-ban" title="Sản phẩm đã xem">Sản phẩm đã xem</a></li>
                        <li><a href="/customer/wishlist/" title="Sản phẩm yêu thích">Sản phẩm yêu thích</a></li>
                        <li><a href="/customer/save_for_later/" title="Sản phẩm mua sau">Sản phẩm mua sau</a></li>
                        <li><a href="/customer/review/" title="Nhận xét của tôi">Nhận xét của tôi</a></li>
                        <li><a href="/doi-tra-de-dang" title="Hướng dẫn đổi trả">Đổi trả dễ dàng</a></li>
                        <li><a onClick={(event) => this.Handle_Log_Out(event)} href="/customer/account/logout" title="Thoát tài khoản">Thoát tài khoản</a></li>
                    </ul>
                </div>
    
            </a>

        }else if(StateAuth===false){
            
                    
            State_SignIn =<a onClick={(event) => this.ShowLogin(event)} href="1" className="Account_Infomation ">
            <i className="fas fa-user fa-lg Icon-User" />
            <span className="sign_up">Đăng Nhập </span>
            <span className="Tool_Tip_Sign_Up">Đăng Nhập</span>
            </a>

        }

        if (authSignInError) {

            SignIn_Error = <span className="AuthError">{this.props.authSignInError}</span>         

        }       

        if (this.props.ShowLogin) {

            Login = <div className="modal_login ">
                <form className="modal-content animate">
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
                        <input className={`${authSignInError ? 'SignIn-Error' : ''}`} onChange={(e) => this.handleChange(e)} type="text" placeholder="Enter Username" name="Email" required />
                        <label htmlFor="psw"><b>Mật Khẩu</b></label>
                        <input className={`${authSignInError ? 'SignIn-Error' : ''}`} onChange={(e) => this.handleChange(e)} type="password" placeholder="Enter Password" name="Password" required />

                        {
                            SignIn_Error
                        }

                        <button onClick={(e) => this.handleSubmit(e)} type="button">Đăng Nhập</button>

                        <label>
                            <input type="checkbox" defaultChecked="checked" name="remember" /> Remember me
                </label>
                    </div>
                    <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
                        <button onClick={() => this.CloseLogin()} type="button" className="cancelbtn">Hủy</button>
                        <span className="psw">Quên <a href="9">Mật Khẩu?</a></span>
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
            <header className={`Header ${this.props.PositionY >= 20 ? 'Scroll_Header' : ''} `}>
                <div className="container">
                    <div className="row rowHeader">
                        <div className="col-md-3 col-lg-3 Logo">
                            <button onClick={() => this.on_Show_Nav()} className="btn btn-light Menu-Mobile" type="button">
                                <i className="fas fa-align-justify icon-menu" />
                            </button>
                            <div className="header-logo">
                                <a href="35">
                                    <img className="img-fluid img-logo" src=" https://cdn.worldvectorlogo.com/logos/react-native-firebase-1.svg" alt="Đồ Điện Tử Giá Rẻ" />
                                </a>
                            </div>
                            <Link to="/Cart" className="Border-Cart2 border2">
                                <i className="fas fa-shopping-cart fa-lg icon-cart " />
                                <span className="Cart-Text">Giỏ hàng</span>
                                <span className="Cart-Quantity"> {totalQuantity}</span>
                            </Link>
                        </div>
                        <div className="col-md-6 col-lg-5 Search">
                            <div className="header-search">
                                <input type="text " className="InputSeach" placeholder="Tìm kiếm sản phẩm mong muốn..." />
                                <button className="btn btn-danger buttonSearch" type="submit">Tìm Kiếm</button>
                            </div>
                        </div>
                        <div className="col-md-2 col-lg-2 Account  d-none d-lg-flex">
                                   {

                                                State_SignIn

                                   }
                        </div>
                        <div className="col-md-3 col-lg-2 Cart d-none d-md-block">
                            <Link to="/Cart" className="Border-Cart border">
                                <i className="fas fa-shopping-cart fa-lg icon-cart " />
                                <span className="Cart-Text">Giỏ hàng</span>
                                <span className="Cart-Quantity"> {totalQuantity}</span>
                            </Link>
                            <div className={`Mini_Cart d-none d-lg-block ${ cartOfUser ? (!cartOfUser || cartOfUser.Items.length === 0 ? 'emptyMiniCart' : '') : ('')}`}>                        

                                {/* {
                                    cartOfUser ? (

                                        cartOfUser.Items.length === 0 ?
                                        <React.Fragment>
                                            { emptyCart } 
                                        </React.Fragment>    
                                        : (

                                            <React.Fragment>
                                                {miniCart1}
                                                {miniCart2}    
                                                {MiniButtonCart}
    
                                            </React.Fragment>
    
    
                                        )
                                    ) : ('')
                                    

                                } */}
                                {miniCart1}
                                {miniCart2}
                                {MiniButtonCart} 
                                { emptyCart } 



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
                                                    <a href="6">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="7">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="8">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="9">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="10">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="11">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="12">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="13">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="14">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="15">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <i className="fas fa-angle-right angle-right" />
                                    </li>
                                    <li>
                                        <a href="17">
                                            <span><i className="fas fa-mobile-alt fa-md" /></span>
                                            <span className="Text">Điện Thoại</span>
                                        </a>
                                        <div className="Nav-Sub">
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="18">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="19">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="20">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="21">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="22">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="23">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="24">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="25">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="26">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="28">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <i className="fas fa-angle-right angle-right" />
                                    </li>
                                    <li>
                                        <a href="29">
                                            <span><i className="fas fa-headphones fa-md" /></span>
                                            <span className="Text">Tai Nghe</span>
                                        </a>
                                        <div className="Nav-Sub">
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="30">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="31">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="32">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="33">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="34">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="35">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="36">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="37">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <i className="fas fa-angle-right angle-right" />
                                    </li>
                                    <li>
                                        <a href="38">
                                            <span><i className="fas fa-gamepad fa-md" /></span>
                                            <span className="Text">Chuột Gamming</span>
                                        </a>
                                        <div className="Nav-Sub">
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="39">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="40">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="41">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="42">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="43">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="44">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="45">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="46">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="47">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="48">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <i className="fas fa-angle-right angle-right" />
                                    </li>
                                    <li>
                                        <a href="49">
                                            <span><i className="fab fa-cc-amazon-pay fa-md" /></span>
                                            <span className="Text">Phụ Kiện</span>
                                        </a>
                                        <div className="Nav-Sub">
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="50">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="51">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="52">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="53">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="54">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="55">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="56">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="57">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <i className="fas fa-angle-right angle-right" />
                                    </li>
                                    <li>
                                        <a href="58">
                                            <span><i className="fas fa-desktop fa-md" /></span>
                                            <span className="Text">Linh Kiện Máy Tính</span>
                                        </a>
                                        <div className="Nav-Sub">
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="59">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="60">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="61">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="62">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="63">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="64">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="65">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="66">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="67">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <i className="fas fa-angle-right angle-right" />
                                    </li>
                                    <li>
                                        <a href="68">
                                            <span><i className="fas fa-camera fa-md" /></span>
                                            <span className="Text">Máy Ảnh</span>
                                        </a>
                                        <div className="Nav-Sub">
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="69">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="70">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="71">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="72">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="73">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="74">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="75">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="76">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="77">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="78">
                                                        <span>Bàn phím cơ Keywalker</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row-menu">
                                                <div className="ItemMenu">
                                                    <a href="79">
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
                                    <a href="80" className="text-information">GIAO HÀNG MIỄN PHÍ &lt; 5km </a> </li> <li>
                                    <a href="81" className="text-information d-none d-xl-inline">THANH TOÁN KHI NHẬN HÀNG </a>
                                </li>
                                <li>
                                    <a href="82" className="text-information">
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

Header.propTypes = propTypes
Header.defaultProps = defaultProps

const mapStateToProps = (state, ownProps) => {
    return {
        OnNav: state.project.onShowNav,
        authSignInError:state.auth.authSignInError,
        StateAuth : state.auth.stateAuth,
        cartOfUser : state.user.cartOfUser,
        AuthData : state.auth.AuthData
        
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onShow_Nav: (ShowNav) => {
            dispatch(Action.Show_Nav(ShowNav))
        },
        on_Close_Silde_Bar: (Close_Slide_Bar) => {

            dispatch(Action.Close_Silde_Bar(Close_Slide_Bar))
        },
        // onAuth : (credentials) =>{


        //     dispatch(actionAuth.Auth(credentials))
          
    
        // }
        on_signIn: (credentials) => {

            dispatch(actionAuth.signIn(credentials))

        },
        on_Sign_Out : () =>{

            dispatch(actionAuth.SignOut())

        },
        on_AuthData : (User) =>{

            dispatch(actionAuth.AuthData(User))
      
        },
        onGetCartOfUser: (idUser) => {

            dispatch(userAction.getCartOfUser(idUser))
        },
        onRemoveProductFromCart : (idProduct, CartProducts,idUser) =>{

            dispatch(userAction.removeProductFromCart(idProduct, CartProducts,idUser))

        }       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)











