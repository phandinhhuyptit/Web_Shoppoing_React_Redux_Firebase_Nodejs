import React, { Component } from 'react';
import InformationAndStatistics from './Infomation And Statistic Product/Information_And_Statistics';
import Products from './Products/Products';
import './Detail_Product.css';
import { connect } from 'react-redux';
import * as Action from '../../Actions/Actions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Detail_Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: '0',
            backgroundImage: `url(${"https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/2-1000x1000.jpg"})`,
            backgroundPosition: '0% 0%',
            Zoom_Thumb_Product : false,
            Position_Slide_Product : 1
        }
    }

    Show_Zomm_Thumb_Product = () =>{

            this.setState((previousState, currentProps)=>{

                    return {...previousState ,Zoom_Thumb_Product : true }

            })       
    }
    Close_Zomm_Thumb_Product = () =>{


        this.setState((previousState, currentProps)=>{

            return {...previousState ,Zoom_Thumb_Product : false , Position_Slide_Product : 1}

    })       

    }


    Handle_Close_Video = () => {

        this.props.On_Close_Video();

    }

    Handle_Prev_And_Next = (e) => {

        const Prev_Or_Next = e.currentTarget.getAttribute('data');
       

        if (Prev_Or_Next === "Previous") {

            console.log("OK previous");
            if (this.state.Position_Slide_Product >= 2) {

                this.setState((previousState, currentProps) => {

                    return { ...previousState, Position_Slide_Product: this.state.Position_Slide_Product - 1 }

                })
            }
        }
            else {

                if (this.state.Position_Slide_Product <= 4) {


                    this.setState((previousState, currentProps) => {

                        return {...previousState, Position_Slide_Product: this.state.Position_Slide_Product + 1 }

                    })
                }


            }

        }

    


    handleMouseMove = e => {

        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = (e.pageX - left) / width * 100;
        const y = (e.pageY - top) / height * 100;


        this.setState((previousState, currentProps)=>{

            return {...previousState ,backgroundPosition : `${x}% ${y}%` }

         })           
        // this.setState({
                
        //     backgroundPosition: `${x}% ${y}%`

        // })

    }
    Handle_Choose_Image = (e) => {

        const Position = e.target.getAttribute('data-image');
        let Src;
        if (Position === '0') {

            Src = "https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/2-1000x1000.jpg";


        }
        else if (Position === '1') {

            Src = "https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/3-1000x1000.jpg";

        }
        else if (Position === '2') {

            Src = "https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/4-1000x1000.jpg";
        }
        else if (Position === '3') {

            Src = "https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/5-1000x1000.jpg";
        }
        else {

            Src = "https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/1-1000x1000.jpg";
        }
        this.setState({
            backgroundImage: `url(${`${Src}`})`,
            position: Position

        })
    }
    render() {

        let OnVideo;

        if (this.props.Onvideo) {

            OnVideo = <div>
                <iframe title="This is a unique title" id="Video_Tech" src="https://www.youtube.com/embed/uvfaXQSVCPM">
                </iframe>
                <div onClick={this.Handle_Close_Video} className="Backgroud_Video" />
            </div>
        }

        return (
            <div>
                <div className="product_info">
                    <div className="container">
                        <div className="row">
                            <div className="d-none d-lg-block  col-lg-1">
                                <div className="column">
                                    <img onClick={this.Handle_Choose_Image} className={`Small-Image cursor ${this.state.position === '0' ? 'ActiveImage' : ''}`} src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/2-83x83.jpg" data-image={0} aria-hidden alt="The Woods" />
                                </div>
                                <div className="column">
                                    <img onClick={this.Handle_Choose_Image} className={`Small-Image cursor ${this.state.position === '1' ? 'ActiveImage' : ''}`} src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/3-83x83.jpg" data-image={1} aria-hidden alt="Cinque Terre" />
                                </div>
                                <div className="column">
                                    <img onClick={this.Handle_Choose_Image} className={`Small-Image cursor ${this.state.position === '2' ? 'ActiveImage' : ''}`} src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/4-83x83.jpg" data-image={2} aria-hidden alt="Mountains and fjords" />
                                </div>
                                <div className="column">
                                    <img onClick={this.Handle_Choose_Image} className={`Small-Image cursor ${this.state.position === '3' ? 'ActiveImage' : ''}`} src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/5-83x83.jpg" data-image={3} aria-hidden alt="Northern Lights" />
                                </div>
                                <div className="column">
                                    <img onClick={this.Handle_Choose_Image} className={`Small-Image cursor ${this.state.position === '4' ? 'ActiveImage' : ''}`} src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/1-83x83.jpg" data-image={4} aria-hidden alt="Nature and sunrise" />
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="image-product">

                                    <div onClick={this.Show_Zomm_Thumb_Product} className="thumb-items d-none d-md-flex">
                                        <i className="fas fa-expand-arrows-alt" />
                                    </div>
                                    <div className={`mySlides ${this.state.position === '0' ? '' : 'd-none'}`}>

                                        <img className="myimage" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/2-1000x1000.jpg" aria-hidden alt="Nature and sunrise" />
                                        <div onMouseMove={this.handleMouseMove} style={this.state} className="numbertext">1 / 5</div>
                                    </div>
                                    <div className={`mySlides ${this.state.position === '1' ? '' : 'd-none'}`} >
                                        <div onMouseMove={this.handleMouseMove} style={this.state} className="numbertext">2 / 5</div>
                                        <img className="myimage" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/3-1000x1000.jpg" aria-hidden alt="Nature and sunrise" />
                                    </div>
                                    <div className={`mySlides ${this.state.position === '2' ? '' : 'd-none'}`}>
                                        <div onMouseMove={this.handleMouseMove} style={this.state} className="numbertext">3 / 5</div>
                                        <img className="myimage" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/4-1000x1000.jpg" aria-hidden alt="Nature and sunrise" />
                                    </div>
                                    <div className={`mySlides ${this.state.position === '3' ? '' : 'd-none'}`}>
                                        <div onMouseMove={this.handleMouseMove} style={this.state} className="numbertext">4 / 5</div>
                                        <img className="myimage" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/5-1000x1000.jpg" aria-hidden alt="Nature and sunrise" />
                                    </div>
                                    <div className={`mySlides ${this.state.position === '4' ? '' : 'd-none'}`}>
                                        <div onMouseMove={this.handleMouseMove} style={this.state} className="numbertext">5 / 5</div>
                                        <img className="myimage" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/1-1000x1000.jpg" aria-hidden alt="Nature and sunrise" />
                                    </div>

                                    <div className="col-12 Sub_Image d-none ">
                                        <div className="column2">
                                            <img onClick={this.Handle_Choose_Image} className="Small-Image2 cursor" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/2-83x83.jpg" data-image={0} aria-hidden alt="The Woods" />
                                        </div>
                                        <div className="column2">
                                            <img onClick={this.Handle_Choose_Image} className="Small-Image2 cursor" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/3-83x83.jpg" data-image={1} aria-hidden alt="Cinque Terre" />
                                        </div>
                                        <div className="column2">
                                            <img onClick={this.Handle_Choose_Image} className="Small-Image2 cursor" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/4-83x83.jpg" data-image={2} aria-hidden alt="Mountains and fjords" />
                                        </div>
                                        <div className="column2">
                                            <img onClick={this.Handle_Choose_Image} className="Small-Image2 cursor" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/5-83x83.jpg" data-image={3} aria-hidden alt="Northern Lights" />
                                        </div>
                                        <div className="column2">
                                            <img onClick={this.Handle_Choose_Image} className="Small-Image2 cursor" src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/1-83x83.jpg" data-image={4} aria-hidden alt="Nature and sunrise" />
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
                    <ReactCSSTransitionGroup
                        transitionName="onVideo"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>

                        {OnVideo}

                    </ReactCSSTransitionGroup>
                </div>
                <InformationAndStatistics></InformationAndStatistics>
                <Products></Products>
                <ReactCSSTransitionGroup 
                transitionName="Zoom_Thumb_Items_Aniamtion"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}              
                >
                <div className={`Zoom_Thumb_Items ${this.state.Zoom_Thumb_Product ? '' : 'd-none'}`}>
                    <div className="Sub_Thumb_items_Image">
                        <img src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/2-1000x1000.jpg" alt="Image" className={`Thumb_Items_Image ${this.state.Position_Slide_Product === 1 ? 'Watching' : '' } `}/>
                        <img src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/3-1000x1000.jpg" alt="Image" className={`Thumb_Items_Image ${this.state.Position_Slide_Product === 2 ? 'Watching' : '' } `}/>
                        <img src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/4-1000x1000.jpg" alt="Image" className={`Thumb_Items_Image ${this.state.Position_Slide_Product === 3 ? 'Watching' : '' } `}/>
                        <img src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/5-1000x1000.jpg" alt="Image" className={`Thumb_Items_Image ${this.state.Position_Slide_Product === 4 ? 'Watching' : '' } `}/>
                        <img src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-phim/m750-tkl-pubg/1-1000x1000.jpg" alt="Image" className={`Thumb_Items_Image ${this.state.Position_Slide_Product === 5 ? 'Watching' : '' } `}/>
                    </div>
                    <button onClick={this.Handle_Prev_And_Next} className={`Previous_Thumb_Items ${this.state.Position_Slide_Product === 1 ? 'Litmit' : ''}` } data="Previous">
                        <i className="fas fa-chevron-left" />
                    </button>
                    <button onClick={this.Handle_Prev_And_Next} className={`Next_Thumb_Items ${this.state.Position_Slide_Product === 5 ? 'Litmit' : ''} `} data="Next">
                        <i className="fas fa-chevron-right" />
                    </button>
                    <i onClick = {this.Close_Zomm_Thumb_Product} className="fas fa-times Close_Thumb_Items" />
                </div>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        Onvideo: state.onVideo
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        On_Close_Video: (Close_Video) => {
            dispatch(Action.Close_Video(Close_Video));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail_Product)
