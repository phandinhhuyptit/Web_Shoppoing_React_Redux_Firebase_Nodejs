import React, { Component } from 'react';

class ListProducts extends Component {
    render() {
        return (
            <div class="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className=" mb-4 List_Cards row">
                        <div className=" col-12 col-lg-4 col-sm-4 col-xl-4 col-md-4">
                            <a href="3456578" className="Image-main">
                                <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/dare-u/ban-phim/dk1280/1-400x400.jpg" aria-hidden alt="Card image cap" />
                            </a>
                            <div className="image-hover">
                                <a href="9789789">
                                    <img className="card-img-top img-fluid" src="https://www.playzone.vn/image/cache/catalog/san%20pham/dare-u/ban-phim/dk1280/2-400x400.png" aria-hidden alt="Card image cap" />
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-lg-8 col-sm-8 col-xl-8 col-md-8">

                            <div className="card-body Information_Items">
                                <a href="97890545" className="card-text Text_Items ">Chuột SteelSeries Rival 310 - CS:GO
                                       HOWL EDITION
                            </a>
                                <p className="Price">
                                    3.289.000 đ
                            </p>
                                <button type="button" className="btn btn-success Button_Add_Cart">Thêm Vào Giỏ</button>
                                <a className="btn btn-icon ">

                                    <i class="fas fa-heart"></i>
                                    <span class="Tool_Tip_Like">Yêu Thích</span>
                                </a>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
export default ListProducts;