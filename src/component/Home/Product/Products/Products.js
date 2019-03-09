import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as Action from '../../../../Actions/Actions'
class Products extends Component {
    On_Notification_Product = () =>{

        this.props.On_Show_Notification_Cart(true);
    }
    
    
    render() {

        return (
            <div className="Items">
                <div className="container">
                    <div className="row Border-Card">
                        <div className="col-sm-6 col-md-4 col-lg-3 ">
                            <div className="card mb-4 equal_Cards ">
                                <a href="#" className="Image-main">
                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/chuot/rival-310-howl/2-1-400x400.jpg" alt="Card image cap" />
                                </a>
                                <div className="image-hover">
                                    <a href="#">
                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/chuot/rival-310-howl/3-400x400.jpg" alt="Card image cap" />
                                    </a>
                                </div>
                                <div className="card-body Information_Items">
                                    <a href="#" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO HOWL EDITION</a>
                                    <p className="Price">
                                        3.289.000 đ
                                     </p>
                                    <button onClick = {()=>this.On_Notification_Product()} type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 ">
                            <div className="card mb-4 equal_Cards ">
                                <a href="#" className="Image-main">
                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/razer/chuot-razer/mamba-elite/1-400x400.jpg" alt="Card image cap" />
                                </a>
                                <div className="image-hover">
                                    <a href="#">
                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/razer/chuot-razer/mamba-elite/6-400x400.jpg" alt="Card image cap" />
                                    </a>
                                </div>
                                <div className="card-body Information_Items">
                                    <a href="#" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO HOWL EDITION</a>
                                    <p className="Price">
                                        3.289.000 đ
                                    </p>
                                    <button type="button"  className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 ">
                            <div className="card mb-4 equal_Cards ">
                                <a href="#" className="Image-main">
                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/1-400x400.jpg" alt="Card image cap" />
                                </a>
                                <div className="image-hover">
                                    <a href="#">
                                        <img className="card-img-top img-fluid" src=" https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/2-400x400.jpg" alt="Card image cap" />
                                    </a>
                                </div>
                                <div className="card-body Information_Items">
                                    <a href="#" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO HOWL EDITION</a>
                                    <p className="Price">
                                        3.289.000 đ
                                    </p>
                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 ">
                            <div className="card mb-4 equal_Cards ">
                                <a href="#" className="Image-main">
                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/Logitech/Mouse/g903/1-400x400.jpg" alt="Card image cap" />
                                </a>
                                <div className="image-hover">
                                    <a href="#">
                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/Logitech/Mouse/g903/3-400x400.jpg" alt="Card image cap" />
                                    </a>
                                </div>
                                <div className="card-body Information_Items">
                                    <a href="#" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO HOWL EDITION</a>
                                    <p className="Price">
                                        3.289.000 đ
                                    </p>
                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 ">
                            <div className="card mb-4 equal_Cards ">
                                <a href="#" className="Image-main">
                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/Logitech/Mouse/g502-hero/7-400x400.jpg" alt="Card image cap" />
                                </a>
                                <div className="image-hover">
                                    <a href="#">
                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/Logitech/Mouse/g502-hero/10-400x400.jpg" alt="Card image cap" />
                                    </a>
                                </div>
                                <div className="card-body Information_Items">
                                    <a href="#" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO HOWL EDITION</a>
                                    <p className="Price">
                                        3.289.000 đ
                                    </p>
                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 ">
                            <div className="card mb-4 equal_Cards ">
                                <a href="#" className="Image-main">
                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/razer/tai-nghe-razer/hammerhead-pro-v2/razer_rz04_01730100_r3u1_hammerhead_v2_pro_in_ear_1247311-400x400.jpg" alt="Card image cap" />
                                </a>
                                <div className="image-hover">
                                    <a href="#">
                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/razer/tai-nghe-razer/hammerhead-pro-v2/17-400x400.jpg" alt="Card image cap" />
                                    </a>
                                </div>
                                <div className="card-body Information_Items">
                                    <a href="#" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO HOWL EDITION</a>
                                    <p className="Price">
                                        3.289.000 đ
                                   </p>
                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 ">
                            <div className="card mb-4 equal_Cards ">
                                <a href="#" className="Image-main">
                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/tai-nghe/arctis-5-pubg/1-1-400x400.jpg" alt="Card image cap" />
                                </a>
                                <div className="image-hover">
                                    <a href="#">
                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/tai-nghe/arctis-5-pubg/3-1-400x400.jpg" alt="Card image cap" />
                                    </a>
                                </div>
                                <div className="card-body Information_Items">
                                    <a href="#" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO HOWL EDITION</a>
                                    <p className="Price">
                                        3.289.000 đ
                                     </p>
                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 ">
                            <div className="card mb-4 equal_Cards ">
                                <a href="#" className="Image-main">
                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/Man%20Hinh/kinglight/M2758P/46954044_1455579274573062_7434486293708406784_n-400x400.jpg" alt="Card image cap" />
                                </a>
                                <div className="image-hover">
                                    <a href="#">
                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/Man%20Hinh/kinglight/M2758P/46804815_761538470872217_5001880103597113344_n-400x400.jpg" alt="Card image cap" />
                                    </a>
                                </div>
                                <div className="card-body Information_Items">
                                    <a href="#" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO HOWL EDITION</a>
                                    <p className="Price">
                                        3.289.000 đ
                                     </p>
                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 ">
                            <div className="card mb-4 equal_Cards ">
                                <a href="#" className="Image-main">
                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/chuot/rival-310-howl/2-1-400x400.jpg" alt="Card image cap" />
                                </a>
                                <div className="image-hover">
                                    <a href="#">
                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/chuot/rival-310-howl/3-400x400.jpg" alt="Card image cap" />
                                    </a>
                                </div>
                                <div className="card-body Information_Items">
                                    <a href="#" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO HOWL EDITION</a>
                                    <p className="Price">
                                        3.289.000 đ
                                     </p>
                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 ">
                            <div className="card mb-4 equal_Cards ">
                                <a href="#" className="Image-main">
                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/razer/chuot-razer/mamba-elite/1-400x400.jpg" alt="Card image cap" />
                                </a>
                                <div className="image-hover">
                                    <a href="#">
                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/razer/chuot-razer/mamba-elite/6-400x400.jpg" alt="Card image cap" />
                                    </a>
                                </div>
                                <div className="card-body Information_Items">
                                    <a href="#" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO HOWL EDITION</a>
                                    <p className="Price">
                                        3.289.000 đ
                                     </p>
                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 ">
                            <div className="card mb-4 equal_Cards ">
                                <a href="#" className="Image-main">
                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/1-400x400.jpg" alt="Card image cap" />
                                </a>
                                <div className="image-hover">
                                    <a href="#">
                                        <img className="card-img-top img-fluid" src=" https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/2-400x400.jpg" alt="Card image cap" />
                                    </a>
                                </div>
                                <div className="card-body Information_Items">
                                    <a href="#" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO HOWL EDITION</a>
                                    <p className="Price">
                                        3.289.000 đ
                                    </p>
                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 ">
                            <div className="card mb-4 equal_Cards ">
                                <a href="#" className="Image-main">
                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/Logitech/Mouse/g903/1-400x400.jpg" alt="Card image cap" />
                                </a>
                                <div className="image-hover">
                                    <a href="#">
                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/Logitech/Mouse/g903/3-400x400.jpg" alt="Card image cap" />
                                    </a>
                                </div>
                                <div className="card-body Information_Items">
                                    <a href="#" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO HOWL EDITION</a>
                                    <p className="Price">
                                        3.289.000 đ
                                    </p>
                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 ">
                            <div className="card mb-4 equal_Cards ">
                                <a href="#" className="Image-main">
                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/Logitech/Mouse/g502-hero/7-400x400.jpg" alt="Card image cap" />
                                </a>
                                <div className="image-hover">
                                    <a href="#">
                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/Logitech/Mouse/g502-hero/10-400x400.jpg" alt="Card image cap" />
                                    </a>
                                </div>
                                <div className="card-body Information_Items">
                                    <a href="#" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO HOWL EDITION</a>
                                    <p className="Price">
                                        3.289.000 đ
                                     </p>
                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 ">
                            <div className="card mb-4 equal_Cards ">
                                <a href="#" className="Image-main">
                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/razer/tai-nghe-razer/hammerhead-pro-v2/razer_rz04_01730100_r3u1_hammerhead_v2_pro_in_ear_1247311-400x400.jpg" alt="Card image cap" />
                                </a>
                                <div className="image-hover">
                                    <a href="#">
                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/razer/tai-nghe-razer/hammerhead-pro-v2/17-400x400.jpg" alt="Card image cap" />
                                    </a>
                                </div>
                                <div className="card-body Information_Items">
                                    <a href="#" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO HOWL EDITION</a>
                                    <p className="Price">
                                        3.289.000 đ
                                    </p>
                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 ">
                            <div className="card mb-4 equal_Cards ">
                                <a href="#" className="Image-main">
                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/tai-nghe/arctis-5-pubg/1-1-400x400.jpg" alt="Card image cap" />
                                </a>
                                <div className="image-hover">
                                    <a href="#">
                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/tai-nghe/arctis-5-pubg/3-1-400x400.jpg" alt="Card image cap" />
                                    </a>
                                </div>
                                <div className="card-body Information_Items">
                                    <a href="#" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO HOWL EDITION</a>
                                    <p className="Price">
                                        3.289.000 đ
                                    </p>
                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 ">
                            <div className="card mb-4 equal_Cards ">
                                <a href="#" className="Image-main">
                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/Man%20Hinh/kinglight/M2758P/46954044_1455579274573062_7434486293708406784_n-400x400.jpg" alt="Card image cap" />
                                </a>
                                <div className="image-hover">
                                    <a href="#">
                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/Man%20Hinh/kinglight/M2758P/46804815_761538470872217_5001880103597113344_n-400x400.jpg" alt="Card image cap" />
                                    </a>
                                </div>
                                <div className="card-body Information_Items">
                                    <a href="#" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO HOWL EDITION</a>
                                    <p className="Price">
                                        3.289.000 đ
                                    </p>
                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 " id="Pagination">
                            <nav>
                                <ul className="pagination ">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#" tabIndex={-1}>Previous</a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        OnNotificationProduct : state.onNotification_Product
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        On_Show_Notification_Cart: (Show_Product) => {
            dispatch(Action.Show_Notification_Product(Show_Product))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products)