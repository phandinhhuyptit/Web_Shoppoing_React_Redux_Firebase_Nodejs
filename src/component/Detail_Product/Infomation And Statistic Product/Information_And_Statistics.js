import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Action from '../../../Actions/Actions';


class InformationAndStatistics extends Component {

    state = {

        Destription_Review: true


    }
    Handle_Destription_Review = (e) => {

        const State_Destription = e.target.getAttribute('data-destription');
        if (State_Destription === "Description") {

            this.setState({

                Destription_Review: true

            })
        }
        else {

            this.setState({

                Destription_Review: false

            })
        }
    }
    Handle_Show_Video = () => {
        this.props.on_Show_Video(true);
    }
    render() {
        let  Content_Destription_Review;

        if (this.state.Destription_Review) {

            Content_Destription_Review = <div className="Sub_Content_Destription">
                <h3>1.VIDEO REVIEW CHI TIẾT </h3>
                <div className="Wrap_Video">
                    <video autoPlay muted loop id="myVideo">
                        <source src="//cwsmgmt.corsair.com/responsive/videos/k70-low-profile-loop.mp4" type="video/mp4" />
                    </video>
                    <div className="Content_Video">
                        <h1 className="d-none d-sm-block ">K70 RGB MK.2 LOW PROFILE GAMING KEYBOARD</h1>
                        <p className="d-none d-sm-block "> TYPE ALL DAY. PLAY ALL NIGHT </p>
                        <p onClick={this.Handle_Show_Video} className="Button_Watch_Video">
                            WATCH VIDEO
                    </p>
                    </div>
                </div>
                <h3>2. TÍNH NĂNG NỔI BẬT</h3>
                <p className="Title_Feature"> Mắt đọc chuẩn thi đấu Esport tiên tiến nhất trên Thế Giới </p>
                <p>TrueMove3 có độ nhạy lên tới 12000 CPI, 350 IPS được thừa hưởng nhiều tinh túy từ nhà sản xuất
                  cảm
                  biến hàng đầu Thế Giới PixArt. Thay vì chỉ tập trung vào độ nhạy CPI, cảm biến TrueMove3 có khả
                  năng
                  tracking 1:1 cực kì chính xác.
            </p>
                <img src="https://www.playzone.vn/image/catalog/san%20pham/steelseries/chuot/rival-310-howl/2.jpg" aria-hidden alt="Card image cap" />
                <p className="Title_Feature">Kiểu dáng công thái học</p>
                <p>Mọi góc cạnh trong thiết kế của Rival 310 PUBG Edition đều đáp ứng được sự thoải mái cần thiết
                  của người
                  dùng trong mọi điều kiện sử dụng. Cho dù bạn có ưa thích kiểu cầm Claw Grip hay Palm Grip,
                  Rival 310
            đều đem lại cho bạn sự thoải mái cao độ khi sử dụng trong thời gian dài.</p>
                <img src="https://www.playzone.vn/image/catalog/san%20pham/steelseries/chuot/rival-310-howl/3.png" aria-hidden alt="Card image cap" />
                <p className="Title_Feature">Cài đặt thông số dễ dàng</p>
                <p>Lưu tất cả các cài đặt của bạn và hiệu chỉnh đèn led trên Rival 310 1 cách cực kì đơn giản thông
                  qua
                  SteelSeries Engine 3 (SSE3). Với việc trang bị bộ xử lý ARM 32-Bit mạnh mẽ cho phép bạn lưu các
                  cài đặt
                  thông số CPI, gán nút và các hiệu ứng đèn led rực rỡ, bạn sẽ không cần phải cài đặt lại nữa và
                  có thể
                  mang đi và sử dụng với những cài đặt bạn đã lưu sẵn.
             </p>
                <img src="https://www.playzone.vn/image/catalog/k70%20lux%20rgb/K70_LUX_RGB_NA_02-700x700.jpg" aria-hidden alt="Card image cap" />
                <h3>3.THÔNG SỐ KĨ THUẬT</h3>
                <table className="Statistic_table">
                    <tbody><tr>
                        <td>Bàn phím</td>
                        <td>Full size</td>
                    </tr>
                        <tr>
                            <td>Màu vỏ</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>Chất liệu vỏ</td>
                            <td>Nhôm phay có lớp cách điện</td>
                        </tr>
                        <tr>
                            <td>Đèn nền</td>
                            <td>RGB</td>
                        </tr>
                        <tr>
                            <td>Chức năng đặc biệt</td>
                            <td>Anti-ghosting và NKRO trên tất cả các phím</td>
                        </tr>
                        <tr>
                            <td>Các phím multimedia</td>
                            <td>Có</td>
                        </tr>
                        <tr>
                            <td>Gán Macro</td>
                            <td>Tất cả các phím</td>
                        </tr>
                        <tr>
                            <td>Phím tắt chế độ chơi games</td>
                            <td>Có</td>
                        </tr>
                        <tr>
                            <td>Report rate</td>
                            <td>1000 Hz (lựa chọn 1ms, 2ms, 4ms, 8ms và chế độ BIOS)</td>
                        </tr>
                        <tr>
                            <td>Kích thước</td>
                            <td>436 x 165 x 38 (mm)</td>
                        </tr>
                    </tbody></table>
            </div>

        }
        else {

            Content_Destription_Review =<div className="Sub_Content_Review">
                <p>Không có đánh giá cho sản phẩm này.</p>
                <h4>Gửi Bình luận</h4>
                <form action>
                    <div className="form-group">
                        <label>Họ &amp; Tên:</label>
                        <input type="text" className="form-control" placeholder="Họ Tên" />
                    </div>
                    <div className="form-group">
                        <label>Nội Dung: </label>
                        <textarea className="form-control" rows={8} defaultValue={""} />
                    </div>
                    <span className="point">Cho điểm:</span>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue={1} />
                        <label className="form-check-label" htmlFor="inlineRadio1">Thất Vọng</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue={2} />
                        <label className="form-check-label" htmlFor="inlineRadio2">Chưa Tốt</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" defaultValue={3} />
                        <label className="form-check-label" htmlFor="inlineRadio3">Chấp Nhận</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" defaultValue={4} />
                        <label className="form-check-label" htmlFor="inlineRadio3">Tốt </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" defaultValue={5} />
                        <label className="form-check-label" htmlFor="inlineRadio3">Yêu Thích</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Tiếp Tục </button>
                </form>
            </div>            
        }

        return (
            <div className="Destription_Review">
                <div className="container">
                    <div className="row">
                        <ul className="List_Menu">
                            <li >
                                <button onClick={(event) => this.Handle_Destription_Review(event)} data-destription={"Description"} type="button"className={`btn btn-outline-primary Detription ${this.state.Destription_Review ? 'Active_Destription_Or_Review': ''}`}>Mô Tả</button>
                            </li>
                            <li >
                                <button onClick={(event) => this.Handle_Destription_Review(event)} data-destription={"Review"} type="button" className={`btn btn-outline-primary Review ${!this.state.Destription_Review ? 'Active_Destription_Or_Review': ''}`}>Đánh Giá</button>
                            </li>
                        </ul>
                        <div className="Content_Destription_Review">

                                    {Content_Destription_Review}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        on_Show_Video: (Show_Video) => {
            dispatch(Action.Show_Video(Show_Video))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InformationAndStatistics)
