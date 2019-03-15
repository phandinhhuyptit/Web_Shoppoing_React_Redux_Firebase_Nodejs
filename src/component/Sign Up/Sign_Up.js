import React, { Component } from 'react';
import './Sign_Up.css';

class SignUp extends Component {
    render() {
        return (
            <div className="container">
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
                    <div id="content" className="col-12 col-md-8 col-sm-12 col-lg-9 col-xl-9">      <h1>Đăng Ký Tài Khoản</h1>
                        <p className="margin-b">Nếu bạn đã đăng ký tài khoản, vui lòng đăng nhập <a href="https://www.playzone.vn/login">Tại Đây</a>.</p><p> <b>Lưu ý:</b> Các mục dấu sao <b>màu đỏ</b> không được bỏ trống &amp; phải điền đầy đủ, chính xác</p>
                        <form action="https://www.playzone.vn/register" method="post" encType="multipart/form-data" className="form-horizontal">
                            <h3>Thông tin cá nhân</h3>
                            <div className="bordered_content padded_ex_bottom margin-b">
                                <fieldset id="account">
                                    <div className="form-group required" style={{ display: 'none' }}>
                                        <label className="col-2 control-label">Customer Group</label>
                                        <div className="col-sm-10">
                                            <div className="radio">
                                                <label>
                                                    <input type="radio" name="customer_group_id" defaultValue={1} defaultChecked="checked" />
                                                    Default</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group required hidden">
                                        <label className="col-sm-2 control-label" htmlFor="input-firstname">Họ và tên lót:</label>
                                        <div className="col-sm-10">
                                            <input type="text" name="firstname"  placeholder="Họ và tên lót:" id="input-firstname" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="input-lastname">Tên:</label>
                                        <div className="col-sm-10">
                                            <input type="text" name="lastname"  placeholder="Tên:" id="input-lastname" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="input-email">Địa chỉ E-Mail:</label>
                                        <div className="col-sm-10">
                                            <input type="email" name="email"  placeholder="Địa chỉ E-Mail:" id="input-email" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="input-telephone">Điện Thoại:</label>
                                        <div className="col-sm-10">
                                            <input type="tel" name="telephone"  placeholder="Điện Thoại:" id="input-telephone" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group hidden">
                                        <label className="col-sm-2 control-label" htmlFor="input-fax">Số Fax:</label>
                                        <div className="col-sm-10">
                                            <input type="text" name="fax" placeholder="Số Fax:" id="input-fax" className="form-control" />
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            <h3 className="hidden">Địa chỉ của bạn</h3>
                            <div className="bordered_content padded_ex_bottom margin-b">
                                <fieldset id="address">
                                    <div className="form-group hidden">
                                        <label className="col-sm-2 control-label" htmlFor="input-company">Công ty:</label>
                                        <div className="col-sm-10">
                                            <input type="text" name="company"  placeholder="Công ty:" id="input-company" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="input-address-1">Địa chỉ chính:</label>
                                        <div className="col-sm-10">
                                            <input type="text" name="address_1"  placeholder="Địa chỉ chính:" id="input-address-1" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group hidden hidden">
                                        <label className="col-sm-2 control-label" htmlFor="input-address-2">Địa chỉ phụ:</label>
                                        <div className="col-sm-10">
                                            <input type="text" name="address_2"  placeholder="Địa chỉ phụ:" id="input-address-2" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group required hidden">
                                        <label className="col-sm-2 control-label" htmlFor="input-city">Xã/Phường:</label>
                                        <div className="col-sm-10">
                                            <input type="text" name="city"  placeholder="Xã/Phường:" id="input-city" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group hidden">
                                        <label className="col-sm-2 control-label" htmlFor="input-postcode">Mã Bưu Điện:</label>
                                        <div className="col-sm-10">
                                            <input type="text" name="postcode"  placeholder="Mã Bưu Điện:" id="input-postcode" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="input-country">Tỉnh/Thành Phố:</label>
                                        <div className="col-sm-10">
                                            <select name="country_id" id="input-country" className="form-control">
                                                <option value> --- Chọn --- </option>
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
                                                <option value={79} selected="selected">Hồ Chí Minh</option>
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
                                    <div className="form-group required hidden">
                                        <label className="col-sm-2 control-label" htmlFor="input-zone">Quận/Huyện:</label>
                                        <div className="col-sm-10">
                                            <select name="zone_id" id="input-zone" className="form-control"><option value> --- Chọn --- </option><option value={760}>1</option><option value={771}>10</option><option value={772}>11</option><option value={761}>12</option><option value={769}>2</option><option value={770}>3</option><option value={773}>4</option><option value={774}>5</option><option value={775}>6</option><option value={778}>7</option><option value={776}>8</option><option value={763}>9</option><option value={785}>Bình Chánh</option><option value={777}>Bình Tân</option><option value={765}>Bình Thạnh</option><option value={787}>Cần Giờ</option><option value={783}>Củ Chi</option><option value={764}>Gò Vấp</option><option value={784}>Hóc Môn</option><option value={786}>Nhà Bè</option><option value={768}>Phú Nhuận</option><option value={766}>Tân Bình</option><option value={767}>Tân Phú</option><option value={762}>Thủ Đức</option></select>
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
                                            <input type="password" name="password"  placeholder="Mật Khẩu:" id="input-password" className="form-control" aria-autocomplete="list" />
                                        </div>
                                    </div>
                                    <div className="form-group required">
                                        <label className="col-sm-2 control-label" htmlFor="input-confirm">Nhập lại Mật Khẩu:</label>
                                        <div className="col-sm-10">
                                            <input type="password" name="confirm"  placeholder="Nhập lại Mật Khẩu:" id="input-confirm" className="form-control" />
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            <h3 className="hidden">Thư thông báo</h3>
                            <div className="bordered_content  box">
                              
                            <div className="bottom_buttons">
                                    <div className="text-right">Tôi đã đọc &amp; đồng ý với <a className="fancybox" href="https://www.playzone.vn/index.php?route=information/information/agree&information_id=9" alt="Cam kết bảo mật thông tin "><b>Cam kết bảo mật thông tin </b></a>&nbsp;
              <input type="checkbox" name="agree" defaultValue={1} />
                                        &nbsp;
              <input type="submit" defaultValue="Tiếp tục" className="btn btn-primary" />
                                    </div>
                                </div></div>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default SignUp;