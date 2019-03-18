import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as Action from '../../../../Actions/Actions'
class Products extends Component {
    On_Notification_Product = (event) =>{


        const IDProduct = event.currentTarget.value;

        this.props.On_Show_Notification_Cart(true);

        
        this.props.On_Get_Product_For_Notification(IDProduct);
    }
    coverStringMoney = (Price) => {
        var _tmpString = '';
        var _returnString = '';
        Price = Price.toString();
        var _count = 0;
        for (var i = Price.length; i > 0; i--) {
            if (_count % 3 === 0 && i !== Price.length) {
                _tmpString += '.';
            }
            _tmpString += Price[i - 1];
            _count++;
        }
        for (var i = _tmpString.length; i > 0; i--) {
            _returnString += _tmpString[i - 1];
        }
        return _returnString;
    }   

    
    render() {

        let Products;

        if(this.props.OnDataApi){



            Products = this.props.OnDataApi.map((Product,Key) =>{


                    return <div className="col-sm-6 col-md-4 col-lg-3 " key={Key}>
                                         <div className="card mb-4 equal_Cards ">
                                    <a href="54" className="Image-main">
                                        <img className="card-img-top img-fluid" src={Product.Image.Image} aria-hidden alt="Card image cap" />
                                    </a>
                                    <div className="image-hover">
                                        <a href={`DetailProduct/${Product.ID_Product}`}>
                                            <img  className="card-img-top img-fluid" src={Product.Image.ImageHover} aria-hidden alt="Card image cap" />
                                        </a>
                                    </div>
                                    <div className="card-body Information_Items">
                                        <a href={`DetailProduct/${Product.ID_Product}`} className="card-text Text_Items ">{Product.Name}</a>
                                        <p className="Price">
                                            {this.coverStringMoney(Product.Price)} đ
                                         </p> 
                                        <button onClick = {(event)=>this.On_Notification_Product(event)} type="button" value={Product.ID_Product } className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                    </div>
                                </div>
                            </div>
            })
        }
        
        
        
        return (
            <div className="Items">
                <div className="container">
                    <div className="row Border-Card">


                            {Products}

                        {/* <div className="col-sm-6 col-md-4 col-lg-3 ">
                            <div className="card mb-4 equal_Cards ">
                                <a href="46" className="Image-main">
                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/razer/chuot-razer/mamba-elite/1-400x400.jpg" aria-hidden alt="Card image cap" />
                                </a>
                                <div className="image-hover">
                                    <a href="24">
                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/razer/chuot-razer/mamba-elite/6-400x400.jpg" aria-hidden alt="Card image cap" />
                                    </a>
                                </div>
                                <div className="card-body Information_Items">
                                    <a href="46" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO HOWL EDITION</a>
                                    <p className="Price">
                                        3.289.000 đ
                                    </p>
                                    <button type="button"  className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 ">
                            <div className="card mb-4 equal_Cards ">
                                <a href="98" className="Image-main">
                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/1-400x400.jpg" aria-hidden alt="Card image cap" />
                                </a>
                                <div className="image-hover">
                                    <a href="234">
                                        <img className="card-img-top img-fluid" src=" https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/2-400x400.jpg" aria-hidden alt="Card image cap" />
                                    </a>
                                </div>
                                <div className="card-body Information_Items">
                                    <a href="4656" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO HOWL EDITION</a>
                                    <p className="Price">
                                        3.289.000 đ
                                    </p>
                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 ">
                            <div className="card mb-4 equal_Cards ">
                                <a href="67" className="Image-main">
                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/Logitech/Mouse/g903/1-400x400.jpg" aria-hidden alt="Card image cap" />
                                </a>
                                <div className="image-hover">
                                    <a href="34345">
                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/Logitech/Mouse/g903/3-400x400.jpg" aria-hidden alt="Card image cap" />
                                    </a>
                                </div>
                                <div className="card-body Information_Items">
                                    <a href="576" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO HOWL EDITION</a>
                                    <p className="Price">
                                        3.289.000 đ
                                    </p>
                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 ">
                            <div className="card mb-4 equal_Cards ">
                                <a href="687" className="Image-main">
                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/Logitech/Mouse/g502-hero/7-400x400.jpg" aria-hidden alt="Card image cap" />
                                </a>
                                <div className="image-hover">
                                    <a href="546">
                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/Logitech/Mouse/g502-hero/10-400x400.jpg" aria-hidden alt="Card image cap" />
                                    </a>
                                </div>
                                <div className="card-body Information_Items">
                                    <a href="34534" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO HOWL EDITION</a>
                                    <p className="Price">
                                        3.289.000 đ
                                    </p>
                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 ">
                            <div className="card mb-4 equal_Cards ">
                                <a href="3456" className="Image-main">
                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/razer/tai-nghe-razer/hammerhead-pro-v2/razer_rz04_01730100_r3u1_hammerhead_v2_pro_in_ear_1247311-400x400.jpg" aria-hidden alt="Card image cap" />
                                </a>
                                <div className="image-hover">
                                    <a href="45657">
                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/razer/tai-nghe-razer/hammerhead-pro-v2/17-400x400.jpg" aria-hidden alt="Card image cap" />
                                    </a>
                                </div>
                                <div className="card-body Information_Items">
                                    <a href="5647" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO HOWL EDITION</a>
                                    <p className="Price">
                                        3.289.000 đ
                                   </p>
                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 ">
                            <div className="card mb-4 equal_Cards ">
                                <a href="3254" className="Image-main">
                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/tai-nghe/arctis-5-pubg/1-1-400x400.jpg" aria-hidden alt="Card image cap" />
                                </a>
                                <div className="image-hover">
                                    <a href="7567">
                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/tai-nghe/arctis-5-pubg/3-1-400x400.jpg" aria-hidden alt="Card image cap" />
                                    </a>
                                </div>
                                <div className="card-body Information_Items">
                                    <a href="5647" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO HOWL EDITION</a>
                                    <p className="Price">
                                        3.289.000 đ
                                     </p>
                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 ">
                            <div className="card mb-4 equal_Cards ">
                                <a href="657" className="Image-main">
                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/Man%20Hinh/kinglight/M2758P/46954044_1455579274573062_7434486293708406784_n-400x400.jpg" aria-hidden alt="Card image cap" />
                                </a>
                                <div className="image-hover">
                                    <a href="56765">
                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/Man%20Hinh/kinglight/M2758P/46804815_761538470872217_5001880103597113344_n-400x400.jpg" aria-hidden alt="Card image cap" />
                                    </a>
                                </div>
                                <div className="card-body Information_Items">
                                    <a href="5675" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO HOWL EDITION</a>
                                    <p className="Price">
                                        3.289.000 đ
                                     </p>
                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 ">
                            <div className="card mb-4 equal_Cards ">
                                <a href="6547" className="Image-main">
                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/chuot/rival-310-howl/2-1-400x400.jpg" aria-hidden alt="Card image cap" />
                                </a>
                                <div className="image-hover">
                                    <a href="54657">
                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/chuot/rival-310-howl/3-400x400.jpg" aria-hidden alt="Card image cap" />
                                    </a>
                                </div>
                                <div className="card-body Information_Items">
                                    <a href="657657" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO HOWL EDITION</a>
                                    <p className="Price">
                                        3.289.000 đ
                                     </p>
                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 ">
                            <div className="card mb-4 equal_Cards ">
                                <a href="65456" className="Image-main">
                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/razer/chuot-razer/mamba-elite/1-400x400.jpg" aria-hidden alt="Card image cap" />
                                </a>
                                <div className="image-hover">
                                    <a href="54645">
                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/razer/chuot-razer/mamba-elite/6-400x400.jpg" aria-hidden alt="Card image cap" />
                                    </a>
                                </div>
                                <div className="card-body Information_Items">
                                    <a href="54765" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO HOWL EDITION</a>
                                    <p className="Price">
                                        3.289.000 đ
                                     </p>
                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 ">
                            <div className="card mb-4 equal_Cards ">
                                <a href="546" className="Image-main">
                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/1-400x400.jpg" aria-hidden alt="Card image cap" />
                                </a>
                                <div className="image-hover">
                                    <a href="57657">
                                        <img className="card-img-top img-fluid" src=" https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/2-400x400.jpg" aria-hidden alt="Card image cap" />
                                    </a>
                                </div>
                                <div className="card-body Information_Items">
                                    <a href="5435" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO HOWL EDITION</a>
                                    <p className="Price">
                                        3.289.000 đ
                                    </p>
                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 ">
                            <div className="card mb-4 equal_Cards ">
                                <a href="46546" className="Image-main">
                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/Logitech/Mouse/g903/1-400x400.jpg" aria-hidden alt="Card image cap" />
                                </a>
                                <div className="image-hover">
                                    <a href="435">
                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/Logitech/Mouse/g903/3-400x400.jpg" aria-hidden alt="Card image cap" />
                                    </a>
                                </div>
                                <div className="card-body Information_Items">
                                    <a href="5436" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO HOWL EDITION</a>
                                    <p className="Price">
                                        3.289.000 đ
                                    </p>
                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 ">
                            <div className="card mb-4 equal_Cards ">
                                <a href="6456" className="Image-main">
                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/Logitech/Mouse/g502-hero/7-400x400.jpg" aria-hidden alt="Card image cap" />
                                </a>
                                <div className="image-hover">
                                    <a href="6446">
                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/Logitech/Mouse/g502-hero/10-400x400.jpg" aria-hidden alt="Card image cap" />
                                    </a>
                                </div>
                                <div className="card-body Information_Items">
                                    <a href="76876" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO HOWL EDITION</a>
                                    <p className="Price">
                                        3.289.000 đ
                                     </p>
                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 ">
                            <div className="card mb-4 equal_Cards ">
                                <a href="7657" className="Image-main">
                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/razer/tai-nghe-razer/hammerhead-pro-v2/razer_rz04_01730100_r3u1_hammerhead_v2_pro_in_ear_1247311-400x400.jpg" aria-hidden alt="Card image cap" />
                                </a>
                                <div className="image-hover">
                                    <a href="43534">
                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/razer/tai-nghe-razer/hammerhead-pro-v2/17-400x400.jpg" aria-hidden alt="Card image cap" />
                                    </a>
                                </div>
                                <div className="card-body Information_Items">
                                    <a href="34654" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO HOWL EDITION</a>
                                    <p className="Price">
                                        3.289.000 đ
                                    </p>
                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 ">
                            <div className="card mb-4 equal_Cards ">
                                <a href="6546" className="Image-main">
                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/tai-nghe/arctis-5-pubg/1-1-400x400.jpg" aria-hidden alt="Card image cap" />
                                </a>
                                <div className="image-hover">
                                    <a href="32453">
                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/tai-nghe/arctis-5-pubg/3-1-400x400.jpg" aria-hidden alt="Card image cap" />
                                    </a>
                                </div>
                                <div className="card-body Information_Items">
                                    <a href="54645" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO HOWL EDITION</a>
                                    <p className="Price">
                                        3.289.000 đ
                                    </p>
                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-3 ">
                            <div className="card mb-4 equal_Cards ">
                                <a href="65786" className="Image-main">
                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/Man%20Hinh/kinglight/M2758P/46954044_1455579274573062_7434486293708406784_n-400x400.jpg" aria-hidden alt="Card image cap" />
                                </a>
                                <div className="image-hover">
                                    <a href="65765">
                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/Man%20Hinh/kinglight/M2758P/46804815_761538470872217_5001880103597113344_n-400x400.jpg" aria-hidden alt="Card image cap" />
                                    </a>
                                </div>
                                <div className="card-body Information_Items">
                                    <a href="4567" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO HOWL EDITION</a>
                                    <p className="Price">
                                        3.289.000 đ
                                    </p>
                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                </div>
                            </div>
                        </div>
                         */}
                        <div className="col-12  " id="Pagination">
                            <nav>
                                <ul className="pagination">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="7567" tabIndex={-1}>Previous</a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="45">1</a></li>
                                    <li className="page-item"><a className="page-link" href="12">2</a></li>
                                    <li className="page-item"><a className="page-link" href="45">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="45654">Next</a>
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
        OnNotificationProduct : state.onNotification_Product,
        OnDataApi : state.DataApi        


    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        On_Show_Notification_Cart: (Show_Product) => {
            dispatch(Action.Show_Notification_Product(Show_Product))
        },
        On_Get_Product_For_Notification: (IDProduct) => {
            dispatch(Action.Get_Product_For_Notification(IDProduct))
        },
        

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products)