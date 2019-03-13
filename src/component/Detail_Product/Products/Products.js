import React, { Component } from 'react';
import './Products';

class Products extends Component {
    render() {
        return (
            <div>
                <div className="Title_Item">
                    <div className="container">
                        <div className="row RowTitleItem">
                            <h3>Sảm Phẩm Liên Quan</h3>
                        </div>
                    </div>
                </div>
                <div className="Items">
                    <div className="container">
                        <div className="row Border-Card">
                            <div className="col-sm-6 col-md-4 col-lg-3 ">
                                <div className="card mb-4 equal_Cards ">
                                    <a href="23" className="Image-main">
                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/chuot/rival-310-howl/2-1-400x400.jpg" aria-hidden alt="Card image cap" />
                                    </a>
                                    <div className="image-hover">
                                        <a href="24">
                                            <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/chuot/rival-310-howl/3-400x400.jpg" aria-hidden alt="Card image cap" />
                                        </a>
                                    </div>
                                    <div className="card-body Information_Items">
                                        <a href="25" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO HOWL EDITION</a>
                                        <p className="Price">
                                            3.289.000 đ
                                        </p>
                                        <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 ">
                                <div className="card mb-4 equal_Cards ">
                                    <a href="26" className="Image-main">
                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/razer/chuot-razer/mamba-elite/1-400x400.jpg" aria-hidden alt="Card image cap" />
                                    </a>
                                    <div className="image-hover">
                                        <a href="27">
                                            <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/razer/chuot-razer/mamba-elite/6-400x400.jpg" aria-hidden alt="Card image cap" />
                                        </a>
                                    </div>
                                    <div className="card-body Information_Items">
                                        <a href="28" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO HOWL EDITION</a>
                                        <p className="Price">
                                            3.289.000 đ
                                        </p>
                                        <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 ">
                                <div className="card mb-4 equal_Cards ">
                                    <a href="30" className="Image-main">
                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/1-400x400.jpg" aria-hidden alt="Card image cap" />
                                    </a>
                                    <div className="image-hover">
                                        <a href="31">
                                            <img className="card-img-top img-fluid" src=" https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/2-400x400.jpg" aria-hidden alt="Card image cap" />
                                        </a>
                                    </div>
                                    <div className="card-body Information_Items">
                                        <a href="32" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO HOWL EDITION</a>
                                        <p className="Price">
                                            3.289.000 đ
                                        </p>
                                        <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 ">
                                <div className="card mb-4 equal_Cards ">
                                    <a href="33" className="Image-main">
                                        <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/Logitech/Mouse/g903/1-400x400.jpg" aria-hidden alt="Card image cap" />
                                    </a>
                                    <div className="image-hover">
                                        <a href="34">
                                            <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/Logitech/Mouse/g903/3-400x400.jpg" aria-hidden alt="Card image cap" />
                                        </a>
                                    </div>
                                    <div className="card-body Information_Items">
                                        <a href="35" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO HOWL EDITION</a>
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
                                            <a className="page-link" href="13" tabIndex={-1}>Previous</a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="2">1</a></li>
                                        <li className="page-item"><a className="page-link" href="3">2</a></li>
                                        <li className="page-item"><a className="page-link" href="4">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="5">Next</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Products;