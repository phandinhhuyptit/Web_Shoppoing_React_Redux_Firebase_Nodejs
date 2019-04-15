import React, { Component } from 'react';
import './Sign_Up.css';
import { connect } from 'react-redux';
import * as actionAuth from '../../Actions/AuthAction';

class SignUp extends Component {

    state = {

        SignUpForm: {

            email: {

                value: '',
                validation: {
                    required: true,
                    isEmail: true
                    
                },
                valid: false,
                touched: false


            },
            telephone: {
                value: '',
                validation: {
                    required: true,
                    minLength_TelePhone: 10,
                    maxLength_TelePhone: 11,
                    isTelePhone: true

                },
                valid: false,
                touched: false
            },
            fax: {
                value: '',
                validation: {
                    required: true,
                    minLength_Fax: 1,
                    isFax: true

                },
                valid: false,
                touched: false
            },
            address: {

                value: '',
                validation: {
                    required: true,
                    minLength_Address: 3,

                },
                valid: false,
                touched: false
            },
            country_id: {

                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            name: {

                value: '',
                validation: {
                    required: true,
                    isName: true

                },
                valid: false,
                touched: false
            },
            confirm: {
                value: '',
                validation: {
                    required: true,
                    isConfirmPassword: true
                },
                valid: false,
                touched: false
            },
            password: {
                value: '',
                validation: {
                    required: true,
                    isPassword: true
                },
                valid: false,
                touched: false

            },
            agree: {
                value: '',
                validation: {
                    required: true,

                },
                valid: false,
                touched: false

            }
        },
        formIsValid: false,
        SignUp : true

    }
    checkValidity = (value, rules) => {

        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.isEmail) {

            const pattern = /^[a-zA-Z][-_.a-zA-Z0-9]{5,29}@g(oogle)?mail.com$/;
            isValid = pattern.test(value) && isValid;

        }
        if (rules.minLength_TelePhone) {


            isValid = value.length >= rules.minLength_TelePhone && isValid;

        }
        if (rules.maxLength_TelePhone) {

            isValid = value.length <= rules.maxLength_TelePhone && isValid;

        }
        if (rules.isTelePhone) {

            const pattern = /^[0-9]*$/;
            isValid = pattern.test(value) && isValid;

        }
        if (rules.minLength_Fax) {

            isValid = value.length >= rules.minLength_Fax && isValid;

        }
        if (rules.isFax) {

            const pattern = /^(\+?\d{1,}(\s?|\-?)\d*(\s?|\-?)\(?\d{2,}\)?(\s?|\-?)\d{3,}\s?\d{3,})$/;
            isValid = pattern.test(value) && isValid;
        }
        if (rules.minLength_Address) {

            isValid = value.length >= rules.minLength_Address && isValid;

        }
        if (rules.isName) {

            const pattern = /[a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/;
            isValid = pattern.test(value) && isValid;
        }
        if (rules.isPassword) {
            const pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
            isValid = pattern.test(value) && isValid;
        }
        if (rules.isConfirmPassword){

            isValid = value === this.state.SignUpForm.password.value && isValid;

        }
        return isValid;
    }
    Handle_Input_Sign_Up = (e) => {

        const Value = e.currentTarget.value;
        const Name = e.currentTarget.name;

        const updatedFormSignUpForm = { ...this.state.SignUpForm }
        const updateFormElement = { ...updatedFormSignUpForm[Name] }
        updateFormElement.value = Value;
        updateFormElement.valid = this.checkValidity(updateFormElement.value, updateFormElement.validation);
        updateFormElement.touched = true;
        updatedFormSignUpForm[Name] = updateFormElement;

        let formIsValid = true;

        for (let inputIdentifier in updatedFormSignUpForm) {

            formIsValid = updatedFormSignUpForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({

            SignUpForm: updatedFormSignUpForm,
            formIsValid: formIsValid

        })
    }
    Handle_Sign_Up = (e) => {
        e.preventDefault();
        this.props.on_SignUp(this.state.SignUpForm);
    }
    render() {
        return (
            <div className="container Sign-Up">
                <div className="row">
                    <div id="column-left" className=" col-12 col-lg-3 col-xl-3 col-md-4 col-sm-12">
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
                        </div></div>
                    <div id="content-sign-up" className="col-12 col-md-8 col-sm-12 col-lg-9 col-xl-9">      <h1>Đăng Ký Tài Khoản</h1>
                        <p className="margin-b  ">Nếu bạn đã đăng ký tài khoản, vui lòng đăng nhập <a href="https://www.playzone.vn/login">Tại Đây</a>.</p><p> <b>Lưu ý:</b> Các mục dấu sao <b>màu đỏ</b> không được bỏ trống &amp; phải điền đầy đủ, chính xác</p>
                        <form action="https://www.playzone.vn/register" method="post" encType="multipart/form-data" className="form-horizontal">
                            <h3>Thông tin cá nhân</h3>
                            <div className="bordered_content padded_ex_bottom margin-b">
                                <fieldset id="account">


                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="input-lastname">Tên:</label>
                                        <div className="col-sm-10">
                                            <input onChange={(e) => this.Handle_Input_Sign_Up(e)}  type="text" name="name" placeholder="Tên:" id="input-lastname" className={`form-control ${!this.state.SignUpForm.name.valid && this.state.SignUpForm.name.touched ? 'Invalid' : ''}`} />
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="input-email">Địa chỉ E-Mail:</label>
                                        <div className="col-sm-10">
                                            <input onChange={(e) => this.Handle_Input_Sign_Up(e)}  type="email" name="email" placeholder="Địa chỉ E-Mail:" id="input-email" className={`form-control ${!this.state.SignUpForm.email.valid  || !this.props.isStateSignUp ? 'Invalid' : ''}`} />
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="input-telephone">Điện Thoại:</label>
                                        <div className="col-sm-10">
                                            <input onChange={(e) => this.Handle_Input_Sign_Up(e)} type="number" name="telephone" placeholder="Điện Thoại:" id="input-telephone" className={`form-control ${!this.state.SignUpForm.telephone.valid && this.state.SignUpForm.telephone.touched ? 'Invalid' : ''}`} />
                                        </div>
                                    </div>
                                    <div className="form-group hidden">
                                        <label className="col-sm-2 control-label" htmlFor="input-fax">Số Fax:</label>
                                        <div className="col-sm-10">
                                            <input onChange={(e) => this.Handle_Input_Sign_Up(e)} type="text" name="fax" placeholder="Số Fax:" id="input-fax" className={`form-control ${!this.state.SignUpForm.fax.valid && this.state.SignUpForm.fax.touched ? 'Invalid' : ''}`} />
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            <h3 className="hidden">Địa chỉ của bạn</h3>
                            <div className="bordered_content padded_ex_bottom margin-b">
                                <fieldset id="address">

                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="input-address-1">Địa chỉ chính:</label>
                                        <div className="col-sm-10">
                                            <input onChange={(e) => this.Handle_Input_Sign_Up(e)} type="text" name="address" placeholder="Địa chỉ chính:" id="input-address-1" className="form-control" className={`form-control ${!this.state.SignUpForm.address.valid && this.state.SignUpForm.address.touched ? 'Invalid' : ''}`} />
                                        </div>
                                    </div>
                                    <div className="form-group required">   
                                        <label className="col-sm-2 control-label" htmlFor="input-country">Tỉnh/Thành Phố:</label>
                                        <div className="col-sm-10">
                                            <select onChange={(e) => this.Handle_Input_Sign_Up(e)} name="country_id" id="input-country" className={`form-control ${!this.state.SignUpForm.country_id.valid && this.state.SignUpForm.country_id.touched ? 'Invalid' : ''}`}>
                                                <option value={""}> --- Chọn --- </option>
                                                <option value={89}>An Giang</option>
                                                <option value={77}>Bà Rịa - Vũng Tàu</option>
                                                <option value={24}>Bắc Giang</option>
                                                <option value={6}>Bắc Kạn</option>
                                                <option value={95}>Bạc Liêu</option>
                                                <option value={27}>Bắc Ninh</option>
                                                <option value={83}>Bến Tre</option>
                                                <option value={74}>Bình Dương</option>
                                                <option value={70}>Bình Phước</option>
                                                <option value={60}>Bình Thuận</option>
                                                <option value={52}>Bình Định</option>
                                                <option value={96}>Cà Mau</option>
                                                <option value={92}>Cần Thơ</option>
                                                <option value={4}>Cao Bằng</option>
                                                <option value={64}>Gia Lai</option>
                                                <option value={2}>Hà Giang</option>
                                                <option value={35}>Hà Nam</option>
                                                <option value={1}>Hà Nội</option>
                                                <option value={42}>Hà Tĩnh</option>
                                                <option value={30}>Hải Dương</option>
                                                <option value={31}>Hải Phòng</option>
                                                <option value={93}>Hậu Giang</option>
                                                <option value={79}>Hồ Chí Minh</option>
                                                <option value={17}>Hòa Bình</option>
                                                <option value={33}>Hưng Yên</option>
                                                <option value={56}>Khánh Hòa</option>
                                                <option value={91}>Kiên Giang</option>
                                                <option value={62}>Kon Tum</option>
                                                <option value={12}>Lai Châu</option>
                                                <option value={68}>Lâm Đồng</option>
                                                <option value={20}>Lạng Sơn</option>
                                                <option value={10}>Lào Cai</option>
                                                <option value={80}>Long An</option>
                                                <option value={36}>Nam Định</option>
                                                <option value={40}>Nghệ An</option>
                                                <option value={37}>Ninh Bình</option>
                                                <option value={58}>Ninh Thuận</option>
                                                <option value={25}>Phú Thọ</option>
                                                <option value={54}>Phú Yên</option>
                                                <option value={44}>Quảng Bình</option>
                                                <option value={49}>Quảng Nam</option>
                                                <option value={51}>Quảng Ngãi</option>
                                                <option value={22}>Quảng Ninh</option>
                                                <option value={45}>Quảng Trị</option>
                                                <option value={94}>Sóc Trăng</option>
                                                <option value={14}>Sơn La</option>
                                                <option value={72}>Tây Ninh</option>
                                                <option value={34}>Thái Bình</option>
                                                <option value={19}>Thái Nguyên</option>
                                                <option value={38}>Thanh Hóa</option>
                                                <option value={46}>Thừa Thiên Huế</option>
                                                <option value={82}>Tiền Giang</option>
                                                <option value={84}>Trà Vinh</option>
                                                <option value={8}>Tuyên Quang</option>
                                                <option value={86}>Vĩnh Long</option>
                                                <option value={26}>Vĩnh Phúc</option>
                                                <option value={15}>Yên Bái</option>
                                                <option value={48}>Đà Nẵng</option>
                                                <option value={66}>Đắk Lắk</option>
                                                <option value={67}>Đắk Nông</option>
                                                <option value={11}>Điện Biên</option>
                                                <option value={75}>Đồng Nai</option>
                                                <option value={87}>Đồng Tháp</option>
                                            </select>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            <h3 className="hidden">Mật khẩu</h3>
                            <div className="bordered_content padded_ex_bottom margin-b">
                                <fieldset>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="input-password">Mật Khẩu:</label>
                                        <div className="col-sm-10">
                                            <input onChange={(e) => this.Handle_Input_Sign_Up(e)} type="password" name="password" placeholder="Mật Khẩu:" id="input-password" className={`form-control ${!this.state.SignUpForm.password.valid && this.state.SignUpForm.password.touched ? 'Invalid' : ''}`} aria-autocomplete="list" />
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="input-confirm">Nhập lại Mật Khẩu:</label>
                                        <div className="col-sm-10">
                                            <input onChange={(e) => this.Handle_Input_Sign_Up(e)} type="password" name="confirm" placeholder="Nhập lại Mật Khẩu:" id="input-confirm" className={`form-control ${!this.state.SignUpForm.confirm.valid && this.state.SignUpForm.confirm.touched ? 'Invalid' : ''}`} />
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            <h3 className="hidden">Thư thông báo</h3>
                            <div className="bordered_content  box">

                                <div className="bottom_buttons">
                                    <div className="text-right">Tôi đã đọc &amp; đồng ý với <a className="fancybox" href="https://www.playzone.vn/index.php?route=information/information/agree&information_id=9" alt="Cam kết bảo mật thông tin "><b>Cam kết bảo mật thông tin </b></a>&nbsp;
              <input onChange={(e) => this.Handle_Input_Sign_Up(e)} type="checkbox" name="agree" defaultValue={1} />
                                        &nbsp;
              <input onClick={(e) => this.Handle_Sign_Up(e)} type="submit" disabled={!this.state.formIsValid} defaultValue="subMit" className="btn btn-primary SignUp " />
                                    </div>
                                </div></div>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {

        isStateSignUp : state.auth.StateSignUp,
        authError : state.auth.authError
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        on_SignUp: (newUser) => {
            dispatch(actionAuth.SignUp(newUser))

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)


