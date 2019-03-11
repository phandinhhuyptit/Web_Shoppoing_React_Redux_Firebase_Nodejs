import React, { Component } from 'react';
import InformationAndStatistics from './Infomation And Statistic Product/Information_And_Statistics';
import Products from './Products/Products';


class Detail_Product extends Component {
    render() {
        return (
            <div>
                <div className="product_info">
                    <div className="container">
                        <div className="row">
                            <div className="d-none d-lg-block  col-lg-1">
                                <div className="column">
                                    <img className="Small-Image cursor" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/2-83x83.jpg" data-image={0} aria-hidden alt="The Woods" />
                                </div>
                                <div className="column">
                                    <img className="Small-Image cursor" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/3-83x83.jpg" data-image={1} aria-hidden alt="Cinque Terre" />
                                </div>
                                <div className="column">
                                    <img className="Small-Image cursor" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/4-83x83.jpg" data-image={2} aria-hidden alt="Mountains and fjords" />
                                </div>
                                <div className="column">
                                    <img className="Small-Image cursor" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/5-83x83.jpg" data-image={3} aria-hidden alt="Northern Lights" />
                                </div>
                                <div className="column">
                                    <img className="Small-Image cursor" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/1-83x83.jpg" data-image={4} aria-hidden alt="Nature and sunrise" />
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="image-product">

                                    <div className="thumb-items d-none d-md-flex">
                                        <i className="fas fa-expand-arrows-alt" />
                                    </div>
                                    <div className="mySlides">
                                        <img className="myimage" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/2-1000x1000.jpg"  aria-hidden alt="Nature and sunrise"/>
                                        <div onmousemove="zoom(event)" ontouchmove="zoom(event)" className="numbertext">1 / 5</div>
                                    </div>
                                    <div className="mySlides">
                                        <div onmousemove="zoom(event)" ontouchmove="zoom(event)" className="numbertext">2 / 5</div>
                                        <img className="myimage" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/3-1000x1000.jpg"   aria-hidden alt="Nature and sunrise"/>
                                    </div>
                                    <div className="mySlides">
                                        <div onmousemove="zoom(event)" ontouchmove="zoom(event)" className="numbertext">3 / 5</div>
                                        <img className="myimage" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/4-1000x1000.jpg"  aria-hidden alt="Nature and sunrise" />
                                    </div>
                                    <div className="mySlides">
                                        <div onmousemove="zoom(event)" ontouchmove="zoom(event)" className="numbertext">4 / 5</div>
                                        <img className="myimage" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/5-1000x1000.jpg"  aria-hidden alt="Nature and sunrise" />
                                    </div>
                                    <div className="mySlides">
                                        <div onmousemove="zoom(event)" ontouchmove="zoom(event)" className="numbertext">5 / 5</div>
                                        <img className="myimage" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/1-1000x1000.jpg"  aria-hidden alt="Nature and sunrise" />
                                    </div>

                                    <div className="col-12 Sub_Image d-none ">
                                        <div className="column2">
                                            <img className="Small-Image2 cursor" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/2-83x83.jpg" data-image={0} aria-hidden alt="The Woods"   />
                                        </div>
                                        <div className="column2">
                                            <img className="Small-Image2 cursor" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/3-83x83.jpg" data-image={1} aria-hidden alt="Cinque Terre" />
                                        </div>
                                        <div className="column2">
                                            <img className="Small-Image2 cursor" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/4-83x83.jpg" data-image={2} aria-hidden alt="Mountains and fjords" />
                                        </div>
                                        <div className="column2">
                                            <img className="Small-Image2 cursor" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/5-83x83.jpg" data-image={3} aria-hidden alt="Northern Lights" />
                                        </div>
                                        <div className="column2">
                                            <img className="Small-Image2 cursor" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/1-83x83.jpg" data-image={4} aria-hidden alt="Nature and sunrise" />
                                        </div>
                                    </div>
                                </div>
                                <div className="multiple-image-product" />
                            </div>
                            <div className="col-md-6 col-lg-5 statistic_product ">
                                <h4 className="Title_Items">Bàn Phím Cơ SteelSeries Apex M750 RGB TKL - PUBG Edition</h4>
                                <p className="border_product" />
                                <div className="review">
                                    <i className="far fa-star" />
                                    <i className="far fa-star" />
                                    <i className="far fa-star" />
                                    <i className="far fa-star" />
                                    <i className="far fa-star" />
                                    <a href="1"> 0 Bình luận</a>
                                    <a href="2">Gửi Bình luận</a>
                                </div>
                                <p className="producer">Nhà sản xuất: <a href="3" className="brand">Steelseries</a></p>
                                <p className="text_Items"> Mã Sản Phẩm: <span className="ID_Items">M15</span> </p>
                                <p className="Text_Quantity">Số lượng sản phẩm trong kho: <span>Tạm hết</span></p>
                                <div className="Wrap_Guarantee">
                                    <span className="Guarantee">Bảo Hành:</span>
                                    <span className="Month_Guarantee">12</span>
                                </div>
                                <p className="Price_Products">3.348.000 đ</p>
                                <div className="Quantity_Button_Add">
                                    <span className="minus_quantity">-</span>
                                    <input type="text" id="quantity" min={0} />
                                    <span className="plus_quantity">+</span>
                                </div>
                                <button type="button" className="btn btn-success Add_Cart">Thêm Vào Giỏ</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <iframe title="This is a unique title" id="Video_Tech" src="https://www.youtube.com/embed/uvfaXQSVCPM">
                        </iframe>
                        <div className="Backgroud_Video" />
                    </div>

                </div>
                <InformationAndStatistics></InformationAndStatistics>
                <Products></Products>
            </div>
        );
    }
}
export default Detail_Product;