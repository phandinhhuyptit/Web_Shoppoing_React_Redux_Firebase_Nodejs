import React, { Component } from 'react';

class Mutiple_Slider extends Component {
    render() {
        return (
            <div className="Our-Special-Dishes">
                <div className="container-fluid">
                    <div className="row Title-Explore">
                        <div className="col-sm-12">
                            <h1>
                                <strong>Explore</strong>
                                PRODUCTS
            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div id="MultipleSile" className="carousel slide" data-ride="carousel" data-interval={3000}>
                                {/* Indicators */}
                                <ul className="carousel-indicators indicators">
                                    <li data-target="#MultipleSile" data-slide-to={0} className="true" />
                                    <li data-target="#MultipleSile" data-slide-to={1} className="active" />
                                    <li data-target="#MultipleSile" data-slide-to={2} className="true" />
                                </ul>
                                {/* The slideshow */}
                                <div className="carousel-inner">
                                    {/* carousel item */}
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-6 col-md-4 col-lg-2 items">
                                                <a href="#">
                                                    <img src="//cwsmgmt.corsair.com/responsive/img/product_cat/mice_2.png" alt="error" className="img-fluid" />
                                                </a>
                                                <a className="Name-Ricipe" href="#">MICE</a>
                                            </div>
                                            <div className=" col-6 col-md-4 col-lg-2 items">
                                                <a href="#">
                                                    <img src="//cwsmgmt.corsair.com/responsive/img/product_cat/cases2.png" alt="error" className="img-fluid" />
                                                </a>
                                                <a className="Name-Ricipe" href="#">CASES</a>
                                            </div>
                                            <div className="col-6 col-md-4 col-lg-2 items">
                                                <a href="#">
                                                    <img src="//cwsmgmt.corsair.com/responsive/img/product_cat/mousemats_2.png" alt="error" className="img-fluid" />
                                                </a>
                                                <a className="Name-Ricipe" href="#">MOUSE PADS</a>
                                            </div>
                                            <div className=" col-6 col-md-4 col-lg-2 items">
                                                <a href="#">
                                                    <img src="//cwsmgmt.corsair.com/responsive/img/product_cat/keyboards_2.png" alt="error" className="img-fluid" />
                                                </a>
                                                <a className="Name-Ricipe" href="#">KEYBOARDS</a>
                                            </div>
                                            <div className="col-6  col-md-4 col-lg-2 items">
                                                <a href="#">
                                                    <img src="//cwsmgmt.corsair.com/responsive/img/product_cat/headsetsImage_2.png" alt="error" className="img-fluid" />
                                                </a>
                                                <a className="Name-Ricipe" href="#">
                                                    HEADSETS
                      </a>
                                            </div>
                                            <div className="col-6  col-md-4 col-lg-2 items">
                                                <a href="#">
                                                    <img src="https://cwsmgmt.corsair.com/responsive/img/product_cat/cooler2.png" alt="error" className="img-fluid" />
                                                </a>
                                                <a className="Name-Ricipe" href="#">COOLING</a>
                                            </div>
                                        </div>
                                    </div>{/* end carousel item */}
                                    {/* carousel item */}
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-6 col-md-4 col-lg-2 items">
                                                <a href="#">
                                                    <img src="//cwsmgmt.corsair.com/responsive/img/product_cat/memoryCarousel.png" alt="error" className="img-fluid" />
                                                </a>
                                                <a className="Name-Ricipe" href="#">MEMORY</a>
                                            </div>
                                            <div className=" col-6 col-md-4 col-lg-2 items">
                                                <a href="#">
                                                    <img src="//cwsmgmt.corsair.com/responsive/img/product_cat/power_supply_2.png" alt="error" className="img-fluid" />
                                                </a>
                                                <a className="Name-Ricipe" href="#">POWER SUPPLIES</a>
                                            </div>
                                            <div className="col-6 col-md-4 col-lg-2 items">
                                                <a href="#">
                                                    <img src="//cwsmgmt.corsair.com/responsive/img/product_cat/explore_one_2.png" alt="error" className="img-fluid" />
                                                </a>
                                                <a className="Name-Ricipe" href="#">CORSAIR ONE</a>
                                            </div>
                                            <div className=" col-6 col-md-4 col-lg-2 items">
                                                <a href="#">
                                                    <img src="//cwsmgmt.corsair.com/responsive/img/product_cat/explore_chairs_2.png" alt="error" className="img-fluid" />
                                                </a>
                                                <a className="Name-Ricipe" href="#">GAMING CHAIRS</a>
                                            </div>
                                            <div className="col-6  col-md-4 col-lg-2 items">
                                                <a href="#">
                                                    <img src="//cwsmgmt.corsair.com/responsive/img/product_cat/lapboard_2.png" alt="error" className="img-fluid" />
                                                </a>
                                                <a className="Name-Ricipe" href="#">
                                                    LAPBOARD
                      </a>
                                            </div>
                                            <div className="col-6  col-md-4 col-lg-2 items">
                                                <a href="#">
                                                    <img src="//cwsmgmt.corsair.com/responsive/img/product_cat/storage_home_carousel.png" alt="error" className="img-fluid" />
                                                </a>
                                                <a className="Name-Ricipe" href="#">STORAGE</a>
                                            </div>
                                        </div>
                                    </div>{/* end carousel item */}
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-6 col-md-4 col-lg-2 items">
                                                <a href="#">
                                                    <img src="//cwsmgmt.corsair.com/responsive/img/product_cat/mice_2.png" alt="error" className="img-fluid" />
                                                </a>
                                                <a className="Name-Ricipe" href="#">MICE</a>
                                            </div>
                                            <div className=" col-6 col-md-4 col-lg-2 items">
                                                <a href="#">
                                                    <img src="//cwsmgmt.corsair.com/responsive/img/product_cat/cases2.png" alt="error" className="img-fluid" />
                                                </a>
                                                <a className="Name-Ricipe" href="#">CASES</a>
                                            </div>
                                            <div className="col-6 col-md-4 col-lg-2 items">
                                                <a href="#">
                                                    <img src="//cwsmgmt.corsair.com/responsive/img/product_cat/mousemats_2.png" alt="error" className="img-fluid" />
                                                </a>
                                                <a className="Name-Ricipe" href="#">MOUSE PADS</a>
                                            </div>
                                            <div className=" col-6 col-md-4 col-lg-2 items">
                                                <a href="#">
                                                    <img src="//cwsmgmt.corsair.com/responsive/img/product_cat/keyboards_2.png" alt="error" className="img-fluid" />
                                                </a>
                                                <a className="Name-Ricipe" href="#">KEYBOARDS</a>
                                            </div>
                                            <div className="col-6  col-md-4 col-lg-2 items">
                                                <a href="#">
                                                    <img src="//cwsmgmt.corsair.com/responsive/img/product_cat/headsetsImage_2.png" alt="error" className="img-fluid" />
                                                </a>
                                                <a className="Name-Ricipe" href="#">
                                                    HEADSETS
                      </a>
                                            </div>
                                            <div className="col-6  col-md-4 col-lg-2 items">
                                                <a href="#">
                                                    <img src="https://cwsmgmt.corsair.com/responsive/img/product_cat/cooler2.png" alt="error" className="img-fluid" />
                                                </a>
                                                <a className="Name-Ricipe" href="#">COOLING</a>
                                            </div>
                                        </div>
                                    </div>{/* end carousel item */}
                                </div>
                            </div> {/* End The Slide */}
                            {/* Left and right controls */}
                            <a className="carousel-control-prev previous" href="#MultipleSile" data-slide="prev">
                                <span><i className="fas fa-angle-left left" /></span>
                            </a>
                            <a className="carousel-control-next next" href="#MultipleSile" data-slide="next">
                                <span><i className="fas fa-angle-right right" /></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Mutiple_Slider;