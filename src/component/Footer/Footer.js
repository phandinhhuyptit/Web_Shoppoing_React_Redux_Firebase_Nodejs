import React, { Component } from 'react';
import ScrollTop from './Scroll_Top/Scroll_Top';
import { connect } from 'react-redux';
import './Footer.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';




class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {

            Name: 'HCM'
        }
        this.Adress = [];
    }

    On_Click_Data_Location = (event) => {

        event.preventDefault();
        const name =  event.target.name; 
        this.setState((previousState, currentProps)=>{

            return {...previousState , Name: name }

         })             

        // this.setState({
        //     Name: event.target.name

        // })

    }

    render() {


        let adress, info, hotline, Scroll_Top;


        if (this.props.onPositionY) {

            Scroll_Top = <ScrollTop></ScrollTop>

        }

        if (this.state.Name === 'HCM') {


            adress = <p className="Content-Address_0">
                <i className="fas fa-map-marker-alt" />
                220 Lý Thái Tổ, phường 1, Quận 3,Hồ Chí Minh
                </p>
            info = <p className="Content-Address_0">
                <i className="fas fa-envelope" />
                Nhox.Mjko@Gmail.com
                </p>
            hotline = <p className="Content-Address_0">
                <i className="fas fa-mobile-alt" />
                Hotline: 0996.579.888
                 </p>

        }
        else if (this.state.Name === "HN") {
            adress = <p className="Content-Address_1">
                <i className="fas fa-map-marker-alt" />
                210 - Lê Trọng Tấn - Quận Thanh Xuân - Hà Nội
                </p>
            info = <p className="Content-Address_1">
                <i className="fas fa-envelope" />
                DinhHuy@Gmail.com
            </p>
            hotline = <p className="Content-Address_1">
                <i className="fas fa-mobile-alt" />
                Hotline: 0965.789.666 - Phone: 02423.474.848
        </p>

        }
        else {

            adress = <p className="Content-Address_2">
                <i className="fas fa-map-marker-alt" />
                Số 5- phố Hải Long- Tp Hạ Long - Quảng Ninh
                 </p>
            hotline = <p className="Content-Address_2">
                <i className="fas fa-mobile-alt" />
                Hotline: 0962538366
            </p>
            info = <p className="Content-Address_2">
                <i className="fas fa-envelope" />
                HuyDepTrai@Gmail.com
        </p>
        }

        return (
            <div>
                <div className="Contact-Footer">
                    <div className="container">
                        <div className="row Contact">
                            <h3 className="col-12">
                                LIÊN HỆ
                            </h3>
                            <div className="col-12  col-md-4 Content-Contact">
                                <div className="Location-Information1 ">
                                    <a onClick={(event) => this.On_Click_Data_Location(event)} name="HCM" data="HCM" className={`Adress_And_Area_Content ${this.state.Name === 'HCM' ? 'Active' : ''}`} href="4" ref={(ref) => this.Adress[0] = ref} >
                                        HỒ CHÍ MINH
                                    </a>
                                </div>
                            </div>
                            <div />
                            <div className="col-12 col-md-4 Content-Contact">
                                <div className="Location-Information2">
                                    <a onClick={(event) => this.On_Click_Data_Location(event)} name="HN" data="HN" className={`Adress_And_Area_Content ${this.state.Name === 'HN' ? 'Active' : ''}`} href="5678" ref={(ref) => this.Adress[1] = ref}>
                                        HÀ NỘI
                                     </a>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 Content-Contact">
                                <div className="Location-Information3">
                                    <a onClick={(event) => this.On_Click_Data_Location(event)} name="QN" data="QN" className={`Adress_And_Area_Content ${this.state.Name === 'QN' ? 'Active' : ''}`} href="56" ref={(ref) => this.Adress[2] = ref} >
                                        QUẢNG NINH(ĐẠI LÝ)
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row Content-Address_2">
                            <div className="col-12 Address-Content-3  ">
                                Cửa hàng máy tính MAGIC - đại lý độc quyền của Phan Đình Huy
                            </div>
                        </div>
                        <div className="row Address">

                            <div className="col-12 col-md-4 Content-Address">
                                <ReactCSSTransitionGroup
                                    transitionName="Information567"
                                    transitionEnterTimeout={500}
                                    transitionLeaveTimeout={800}>


                                    {adress}
                                </ReactCSSTransitionGroup>

                            </div>

                            <div className=" col-12 col-md-4 Content-Address">
                                <ReactCSSTransitionGroup
                                    transitionName="Information567"
                                    transitionEnterTimeout={500}
                                    transitionLeaveTimeout={800}>


                                    {hotline}
                                </ReactCSSTransitionGroup>


                            </div>

                            <div className=" col-12 col-md-4 Content-Address">
                                <ReactCSSTransitionGroup
                                    transitionName="Information567"
                                    transitionEnterTimeout={500}
                                    transitionLeaveTimeout={800}>


                                    {info}
                                </ReactCSSTransitionGroup>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="Footer-Wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <h3>THÔNG TIN</h3>
                                <ul>
                                    <li>Về Chúng Tôi</li>
                                    <li>Hướng Dẫn Mua Hàng</li>
                                    <li>Tài Khoản Thanh Toán</li>
                                    <li>Chính Sách Vận Chuyển</li>
                                    <li>Chính Sách Bảo Hành</li>
                                    <li>Chính Sách Đổi Trả Hàng</li>
                                    <li>Cam Kết Bảo Mật Thông Tin</li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h3>CHĂM SÓC KHÁCH HÀNG</h3>
                                <ul>
                                    <li>Khuyến Mãi</li>
                                    <li>Tuyển Dụng</li>
                                    <li>Thương Hiệu</li>
                                    <li>Phiếu Quà Tặng</li>
                                    <li>Cộng Tác Bán Hàng</li>
                                    <li>Sơ Đồ Trang</li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h3>QUẢN LÝ TÀI KHOẢN</h3>
                                <ul>
                                    <li>Quản Lý Tài Khoản</li>
                                    <li>Lịch Sử Đơn Hàng</li>
                                    <li>Danh Sách Yêu Thích</li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h3>CHỨNG NHẬN WEBSITE TMDT</h3>
                                <a href="5345" className="Image-Footer">
                                    <img src="https://www.playzone.vn/image/dathongbao.png" aria-hidden alt="Card image cap" />
                                </a>
                                <p className="Email-Wrapper">
                                    Email:<a href="4645" className="My_Email">sihaojunvn2012@gmail.com</a>
                                </p>
                                <div className="newsletter_module">
                                    <p>Đăng ký nhận thông tin khuyến mãi và sự kiện</p>
                                    <div id="respondf" />
                                    <div className="input-group"> <input type="text" id="emailf" name="email" className="form-control" placeholder="Nhập email của bạn" /> <span className="button-subscribe 0 input-group-addon btn btn-primary"><i className="fa fa-envelope" /></span> </div>
                                </div>
                                <div />
                            </div>
                        </div>
                        <div className="row bottom-line">
                            <div className="col-12 content-bottom">
                                <p>Copyright © Huy 2019. All Rights Reserved - Thiết kế web bởi Phan Đình Huy</p>
                            </div>
                        </div>
                    </div>
                </div>

                <ReactCSSTransitionGroup
                    transitionName="ScrollTop"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>

                    {Scroll_Top}
                </ReactCSSTransitionGroup>


            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {


        onPositionY: state.onPositionY
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            dispatch()
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
