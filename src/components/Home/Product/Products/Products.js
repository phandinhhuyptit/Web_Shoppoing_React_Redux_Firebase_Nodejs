import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Action from '../../../../Actions/ProjectActions';
import PropTypes from 'prop-types';

const proppTypes = {

    OnNotificationProduct : PropTypes.bool.isRequired,  
    OnDataApi : PropTypes.arrayOf(
        PropTypes.shape({

                Brand : PropTypes.string.isRequired,
                Evaluate : PropTypes.number.isRequired,
                GeneralImage :PropTypes.string.isRequired,
                Guarantee : PropTypes.number.isRequired,    
                ID_Product : PropTypes.string.isRequired,
                Image : PropTypes.shape({

                    Image : PropTypes.string.isRequired,
                    ImageHover : PropTypes.string.isRequired

                }),
                Information : PropTypes.shape({

                     Video : PropTypes.string.isRequired,
                     ShortVideo : PropTypes.string.isRequired,                            
                     Features : PropTypes.array.isRequired
                }),
                KindOfProduct1 : PropTypes.string,
                KindOfProduct2 : PropTypes.string.isRequired,
                Name : PropTypes.string.isRequired,
                Price : PropTypes.number.isRequired,   
                Promotion : PropTypes.string,
                Quanity : PropTypes.number.isRequired,
                Small_Image : PropTypes.arrayOf(


                    PropTypes.shape({

                        Image : PropTypes.string.isRequired

                    })
                ).isRequired,
                Statistics : PropTypes.objectOf(PropTypes.string)    

        })
    ).isRequired,
    On_Show_Notification_Cart : PropTypes.func.isRequired,
    On_Get_Product_For_Notification : PropTypes.func.isRequired         
}
const defaultProps = {

    On_Show_Notification_Cart : ()=>{},
    On_Get_Product_For_Notification : ()=>{}
}
class Products extends Component {
    On_Notification_Product = (event) =>{


        const IDProduct = event.currentTarget.value;

        this.props.On_Show_Notification_Cart(true);

        
        this.props.On_Get_Product_For_Notification(IDProduct);
    }
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

    
    render() {

        let Products;
        if(this.props.OnDataApi){

            Products = this.props.OnDataApi.map((Product,Key) =>{


                    return <div className="col-sm-6 col-md-4 col-lg-3 " key={Key}>
                                         <div className="card mb-4 equal_Cards ">
                                    <a href={`DetailProduct/${this.ChangeToSlug(Product.Name)}.${Product.ID_Product}.html`} className="Image-main">
                                        <img className="card-img-top img-fluid" src={Product.Image.Image} aria-hidden alt="Card image cap" />
                                    </a>
                                    <div className="image-hover">
                                        <a href={`DetailProduct/${this.ChangeToSlug(Product.Name)}.${Product.ID_Product}.html`}>
                                            <img  className="card-img-top img-fluid" src={Product.Image.ImageHover} aria-hidden alt="Card image cap" />
                                        </a>
                                    </div>
                                    <div className="card-body Information_Items">
                                        <a href={`DetailProduct/${this.ChangeToSlug(Product.Name)}.${Product.ID_Product}.html`} className="card-text Text_Items ">{Product.Name}</a>
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

Products.proppTypes = proppTypes;
Products.defaultProps = defaultProps;    

const mapStateToProps = (state, ownProps) => {
    return {
        OnNotificationProduct : state.project.onNotification_Product,
        OnDataApi : state.project.DataApi        


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