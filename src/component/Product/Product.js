import React, { Component } from 'react';
import './Product.css';
import SidebarWidget from './Sidebar Widget/SidebarWidget';
import TitleProduct from './Title Product/TitleProduct';
import Slidebar_Panel from './Slidebar Panel/Slidebar_Panel';
import Refine from './Refine/Refine';
import { connect } from 'react-redux';
import * as Action from '../../Actions/Actions';


class Product extends Component {

    Handle_Close_Background_Panel_And_Slider_Panel = () => {

        this.props.On_Close_Slidebar_Panel()

    }

    render() {
        let SliderPanel,Background_Panel; 

        if(this.props.onSliderPanel){

            SliderPanel = <Slidebar_Panel/>
            Background_Panel = <div class="Backgroud_Slidebar_Panel"></div>
        }
        return (
            <div>
                <Refine></Refine>
                <div className="Shop_Wrap">
                    <div className="container">
                        <div className="row">
                            <SidebarWidget />
                            <div className="col-lg-9  col-12">
                                <div className="Items">
                                    <div className="row Border-Card">
                                        <TitleProduct></TitleProduct>
                                        <div className=" col-xl-4 col-lg-6 col-md-6 col-sm-6 ">
                                            <div className="card mb-4 equal_Cards ">
                                                <a href="10" alt="OK" className="Image-main">
                                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/chuot/rival-310-howl/2-1-400x400.jpg" aria-hidden alt="Card image cap" />
                                                </a>
                                                <div className="image-hover">
                                                    <a href="14">
                                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/chuot/rival-310-howl/3-400x400.jpg" aria-hidden alt="Card image cap" />
                                                    </a>
                                                </div>
                                                <div className="card-body Information_Items">
                                                    <a href="56712344566781234545" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO
                                                                             HOWL EDITION
                                                </a>
                                                    <p className="Price">
                                                        3.289.000 đ
                                                </p>
                                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                            <div className="card mb-4 equal_Cards ">
                                                <a href="435" className="Image-main">
                                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/razer/chuot-razer/mamba-elite/1-400x400.jpg" aria-hidden alt="Card image cap" />
                                                </a>
                                                <div className="image-hover">
                                                    <a href="5346">
                                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/razer/chuot-razer/mamba-elite/6-400x400.jpg" aria-hidden alt="Card image cap" />
                                                    </a>
                                                </div>
                                                <div className="card-body Information_Items">
                                                    <a href="#6546" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO
                                                             HOWL EDITION
                            </a>
                                                    <p className="Price">
                                                        3.289.000 đ
                                                </p>
                                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                            <div className="card mb-4 equal_Cards ">
                                                <a href="54" className="Image-main">
                                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/1-400x400.jpg" aria-hidden alt="Card image cap" />
                                                </a>
                                                <div className="image-hover">
                                                    <a href="546">
                                                        <img className="card-img-top img-fluid" src=" https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/2-400x400.jpg" aria-hidden alt="Card image cap" />
                                                    </a>
                                                </div>
                                                <div className="card-body Information_Items">
                                                    <a href="768" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO
                                                       HOWL EDITION
                            </a>
                                                    <p className="Price">
                                                        3.289.000 đ
                             </p>
                                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                            <div className="card mb-4 equal_Cards ">
                                                <a href="234" className="Image-main">
                                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/Logitech/Mouse/g903/1-400x400.jpg" aria-hidden alt="Card image cap" />
                                                </a>
                                                <div className="image-hover">
                                                    <a href="467">
                                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/Logitech/Mouse/g903/3-400x400.jpg" aria-hidden alt="Card image cap" />
                                                    </a>
                                                </div>
                                                <div className="card-body Information_Items">
                                                    <a href="688" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO
                                                               HOWL EDITION
                                                </a>
                                                    <p className="Price">
                                                        3.289.000 đ
                                                </p>
                                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                            <div className="card mb-4 equal_Cards ">
                                                <a href="435" className="Image-main">
                                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/Logitech/Mouse/g502-hero/7-400x400.jpg" aria-hidden alt="Card image cap" />
                                                </a>
                                                <div className="image-hover">
                                                    <a href="4355">
                                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/Logitech/Mouse/g502-hero/10-400x400.jpg" aria-hidden alt="Card image cap" />
                                                    </a>
                                                </div>
                                                <div className="card-body Information_Items">
                                                    <a href="4355465" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO
                                                       HOWL EDITION
                            </a>
                                                    <p className="Price">
                                                        3.289.000 đ
                                                </p>
                                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                            <div className="card mb-4 equal_Cards ">
                                                <a href="4123" className="Image-main">
                                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/razer/tai-nghe-razer/hammerhead-pro-v2/razer_rz04_01730100_r3u1_hammerhead_v2_pro_in_ear_1247311-400x400.jpg" aria-hidden alt="Card image cap" />
                                                </a>
                                                <div className="image-hover">
                                                    <a href="799">
                                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/razer/tai-nghe-razer/hammerhead-pro-v2/17-400x400.jpg" aria-hidden alt="Card image cap" />
                                                    </a>
                                                </div>
                                                <div className="card-body Information_Items">
                                                    <a href="345" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO
                                                       HOWL EDITION
                            </a>
                                                    <p className="Price">
                                                        3.289.000 đ
                                                 </p>
                                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                            <div className="card mb-4 equal_Cards ">
                                                <a href="3456578" className="Image-main">
                                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/tai-nghe/arctis-5-pubg/1-1-400x400.jpg" aria-hidden alt="Card image cap" />
                                                </a>
                                                <div className="image-hover">
                                                    <a href="9789789">
                                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/tai-nghe/arctis-5-pubg/3-1-400x400.jpg" aria-hidden alt="Card image cap" />
                                                    </a>
                                                </div>
                                                <div className="card-body Information_Items">
                                                    <a href="97890545" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO
                                                           HOWL EDITION
                            </a>
                                                    <p className="Price">
                                                        3.289.000 đ
                                                 </p>
                                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                            <div className="card mb-4 equal_Cards ">
                                                <a href="354657687" className="Image-main">
                                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/Man%20Hinh/kinglight/M2758P/46954044_1455579274573062_7434486293708406784_n-400x400.jpg" aria-hidden alt="Card image cap" />
                                                </a>
                                                <div className="image-hover">
                                                    <a href="qqqq">
                                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/Man%20Hinh/kinglight/M2758P/46804815_761538470872217_5001880103597113344_n-400x400.jpg" aria-hidden alt="Card image cap" />
                                                    </a>
                                                </div>
                                                <div className="card-body Information_Items">
                                                    <a href="fhjkjl" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO
                                                        HOWL EDITION
                            </a>
                                                    <p className="Price">
                                                        3.289.000 đ
                            </p>
                                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                            <div className="card mb-4 equal_Cards ">
                                                <a href="ggjhj" className="Image-main">
                                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/chuot/rival-310-howl/2-1-400x400.jpg" aria-hidden alt="Card image cap" />
                                                </a>
                                                <div className="image-hover">
                                                    <a href="ggjhjdvcv">
                                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/chuot/rival-310-howl/3-400x400.jpg" aria-hidden alt="Card image cap" />
                                                    </a>
                                                </div>
                                                <div className="card-body Information_Items">
                                                    <a href="ggjhjdvcved" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO
                                                            HOWL EDITION
                            </a>
                                                    <p className="Price">
                                                        3.289.000 đ
                                                 </p>
                                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                            <div className="card mb-4 equal_Cards ">
                                                <a href="8798090" className="Image-main">
                                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/razer/chuot-razer/mamba-elite/1-400x400.jpg" aria-hidden alt="Card image cap" />
                                                </a>
                                                <div className="image-hover">
                                                    <a href="8798090456544">
                                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/razer/chuot-razer/mamba-elite/6-400x400.jpg" aria-hidden alt="Card image cap" />
                                                    </a>
                                                </div>
                                                <div className="card-body Information_Items">
                                                    <a href="0012435" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO
                                                        HOWL EDITION
                            </a>
                                                    <p className="Price">
                                                        3.289.000 đ
                                                 </p>
                                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                            <div className="card mb-4 equal_Cards ">
                                                <a href="0012435656" className="Image-main">
                                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/1-400x400.jpg" aria-hidden alt="Card image cap" />
                                                </a>
                                                <div className="image-hover">
                                                    <a href="1">
                                                        <img className="card-img-top img-fluid" src=" https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/2-400x400.jpg" aria-hidden alt="Card image cap" />
                                                    </a>
                                                </div>
                                                <div className="card-body Information_Items">
                                                    <a href="2" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO
                                                            HOWL EDITION
                            </a>
                                                    <p className="Price">
                                                        3.289.000 đ
                                                </p>
                                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                            <div className="card mb-4 equal_Cards ">
                                                <a href="44" className="Image-main">
                                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/Logitech/Mouse/g903/1-400x400.jpg" aria-hidden alt="Card image cap" />
                                                </a>
                                                <div className="image-hover">
                                                    <a href="778">
                                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/Logitech/Mouse/g903/3-400x400.jpg" aria-hidden alt="Card image cap" />
                                                    </a>
                                                </div>
                                                <div className="card-body Information_Items">
                                                    <a href="578" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO
                                                        HOWL EDITION</a>
                                                    <p className="Price">
                                                        3.289.000 đ
                                                </p>
                                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                            <div className="card mb-4 equal_Cards ">
                                                <a href="vcv" className="Image-main">
                                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/Logitech/Mouse/g502-hero/7-400x400.jpg" aria-hidden alt="Card image cap" />
                                                </a>
                                                <div className="image-hover">
                                                    <a href="467">
                                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/Logitech/Mouse/g502-hero/10-400x400.jpg" aria-hidden alt="Card image cap" />
                                                    </a>
                                                </div>
                                                <div className="card-body Information_Items">
                                                    <a href="467cvcvb" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO
                                                     HOWL EDITION</a>
                                                    <p className="Price">
                                                        3.289.000 đ
                                                </p>
                                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                            <div className="card mb-4 equal_Cards ">
                                                <a href="a34dfd" className="Image-main">
                                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/razer/tai-nghe-razer/hammerhead-pro-v2/razer_rz04_01730100_r3u1_hammerhead_v2_pro_in_ear_1247311-400x400.jpg" aria-hidden alt="Card image cap" />
                                                </a>
                                                <div className="image-hover">
                                                    <a href="h45656">
                                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/razer/tai-nghe-razer/hammerhead-pro-v2/17-400x400.jpg" aria-hidden alt="Card image cap" />
                                                    </a>
                                                </div>
                                                <div className="card-body Information_Items">
                                                    <a href="jk24435" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO
                                                     HOWL EDITION</a>
                                                    <p className="Price">
                                                        3.289.000 đ
                                                </p>
                                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                            <div className="card mb-4 equal_Cards ">
                                                <a href="1235" className="Image-main">
                                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/tai-nghe/arctis-5-pubg/1-1-400x400.jpg" aria-hidden alt="Card image cap" />
                                                </a>
                                                <div className="image-hover">
                                                    <a href="1235gfhfg">
                                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/tai-nghe/arctis-5-pubg/3-1-400x400.jpg" aria-hidden alt="Card image cap" />
                                                    </a>
                                                </div>
                                                <div className="card-body Information_Items">
                                                    <a href="1235gfhfg1234" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO
                                                          HOWL EDITION
                            </a>
                                                    <p className="Price">
                                                        3.289.000 đ
                                                </p>
                                                    <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-6  col-md-6 col-sm-6">
                                            <div className="card mb-4 equal_Cards ">
                                                <a href="003435" className="Image-main">
                                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/Man%20Hinh/kinglight/M2758P/46954044_1455579274573062_7434486293708406784_n-400x400.jpg" aria-hidden alt="Card image cap" />
                                                </a>
                                                <div className="image-hover">
                                                    <a href="567">
                                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/Man%20Hinh/kinglight/M2758P/46804815_761538470872217_5001880103597113344_n-400x400.jpg" aria-hidden alt="Card image cap" />
                                                    </a>
                                                </div>
                                                <div className="card-body Information_Items">
                                                    <a href="56712" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO
                                                        HOWL EDITION
                            </a>
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
                                                        <a className="page-link" href="5671234" tabIndex={-1}>Previous</a>
                                                    </li>
                                                    <li className="page-item"><a className="page-link" href="5671234456">1</a></li>
                                                    <li className="page-item"><a className="page-link" href="5671234456678">2</a></li>
                                                    <li className="page-item"><a className="page-link" href="567123445667812">3</a></li>
                                                    <li className="page-item">
                                                        <a className="page-link" href="567123445667812345">Next</a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                        {SliderPanel}
                        {Background_Panel}
                    
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        onSliderPanel : state.onSliderPanel
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        On_Close_Slidebar_Panel: (Close_Slidebar_Panel) => {
            dispatch(Action.Close_Slidebar_Panel(Close_Slidebar_Panel))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
