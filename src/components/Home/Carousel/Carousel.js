import React, { Component } from 'react';

class Carousel extends Component {
    render() {
        return (
            <div className="Carousel">
                <div className="container">
                    <div className="row">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                                <li data-target="#carouselExampleIndicators" data-slide-to={3} />
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100 Image" src="https://assets2.razerzone.com/images/keyboard-guide/keyboard_og.jpg" alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 Image" src="http://assets.razerzone.com/eeimages/razer_pages/26526/projvalerie-og-1200x630-v1.png" alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className=" d-block w-100 Image" src="https://i.amz.mshcdn.com/UXoONmx343Y14PBz9pFlNLfOR60=/1200x630/2018%2F10%2F23%2F53%2Fcde8ece013a04e17a3bcfb80dda13557.4e654.jpg" alt="Third slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className=" d-block w-100 Image" src="https://vrzone.com/wp-content/uploads/2018/06/photo_2018-06-04_19-56-39-1200x630.jpg" alt="Four slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Carousel;