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
            backgroundImage: "",
            backgroundPosition: '0% 0%',
            Zoom_Thumb_Product: false,
            Position_Slide_Product: 1,
            DataProduct : []            
        }
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
    Show_Zomm_Thumb_Product = () => {

        this.setState((previousState, currentProps) => {

            return { ...previousState, Zoom_Thumb_Product: true }

        })
    }
    Close_Zomm_Thumb_Product = () => {

        this.setState((previousState, currentProps) => {

            return { ...previousState, Zoom_Thumb_Product: false, Position_Slide_Product: 1 }

        })

    }

    Handle_Close_Video = () => {

        this.props.On_Close_Video();

    }

    Handle_Prev_And_Next = (e) => {
        let DataProduct,Length_Big_Image;   
        const Prev_Or_Next = e.currentTarget.getAttribute('data');
          

        if(this.props.OnDataProduct){

            this.props.OnDataProduct.forEach(Product => {

                if (this.props.match.params.id === Product.ID_Product){
                       
                    DataProduct = Product;
                
                }    
            })
        }        
        if(DataProduct){

            Length_Big_Image = DataProduct.BigImage.length;
        }    

        if (Prev_Or_Next === "Previous") {

            
            if (this.state.Position_Slide_Product >= 2) {

                this.setState((previousState, currentProps) => {

                    return { ...previousState, Position_Slide_Product: this.state.Position_Slide_Product - 1 }

                })
            }
        }
        else {

            if (this.state.Position_Slide_Product <= Length_Big_Image-1) {


                this.setState((previousState, currentProps) => {

                    return { ...previousState, Position_Slide_Product: this.state.Position_Slide_Product + 1 }
                })
            }

        }
    }
    handleMouseMove = e => {

        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = (e.pageX - left) / width * 100;
        const y = (e.pageY - top) / height * 100;


        this.setState((previousState, currentProps) => {

            return { ...previousState, backgroundPosition: `${x}% ${y}%` }

        })    

    }

    Handle_Choose_Image = (e) => {  
        

        let DataProduct;         
        const Position = e.target.getAttribute('data-image');
        let Src;
        if (this.props.OnDataProduct) {

            this.props.OnDataProduct.forEach(Product => {

                if (this.props.match.params.id === Product.ID_Product) {

                        DataProduct =  Product;
                }
            })

    }
        if(DataProduct){
            let ArrayProduct =DataProduct.BigImage;
            for (const index in ArrayProduct) {
                if(Position === index)
                {
                    
                   Src=ArrayProduct[index].Image                   

                }
               
             }
        }       
        this.setState({
            backgroundImage: `url(${`${Src}`})`,
            position: Position

        })
    }
    
    render() {      
        
        let OnVideo,DataImageOfProduct,Data_Images_Of_Zoom_Thumb_Items,Big_Image_Product,SubDataImageOfProduct,Length_Big_Image ;
        let DataProduct,Check_Quantity;      


        if(this.props.OnDataProduct){

            this.props.OnDataProduct.forEach(Product => {

                if (this.props.match.params.id === Product.ID_Product){
                       
                    DataProduct = Product;
                
                }    
            })
        }        
        if(DataProduct){
            
            Length_Big_Image = DataProduct.BigImage.length;

            SubDataImageOfProduct = DataProduct.Small_Image.map((Product,Key) =>{

                    return (<div className="column" key={Key}>
                    <img onClick={this.Handle_Choose_Image} className={`Small-Image cursor ${this.state.position === `${Key}` ? 'ActiveImage' : ''}`} src={Product.Image} data-image={Key} aria-hidden alt="The Woods" />
                    </div>)

            })

            Big_Image_Product =DataProduct.BigImage.map((Image_Product,Key)=>{

                return (

                    <div key={Key} className={`mySlides ${this.state.position === `${Key}` ? '' : 'd-none'}`}>

                    <img className="myimage" src={`${Image_Product.Image}`} aria-hidden alt="Nature and sunrise" />
                    <div onMouseMove={this.handleMouseMove} style={this.state} className="numbertext"></div>
                </div>
                )
            })
            Data_Images_Of_Zoom_Thumb_Items = DataProduct.BigImage.map((Images,Key)=>{


               return <img key={Key} src={Images.Image} alt="Image" className={`Thumb_Items_Image ${this.state.Position_Slide_Product === (Key+1) ? 'Watching' : ''} `} />                  


            })
            Check_Quantity = <span className={DataProduct.Quanity === 0 ? 'Out_of_stock' : 'Stock'}>{DataProduct.Quanity === 0 ? 'Tạm Hết' : 'Có Hàng'}</span>
              
        }     
                
        if(SubDataImageOfProduct){

            DataImageOfProduct=SubDataImageOfProduct;
           
        }      
        if (this.props.Onvideo) {

            OnVideo = <div>
                <iframe title="This is a unique title" id="Video_Tech" src={`${ DataProduct ? DataProduct.Information.Video :''}`}>
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
                                {
                                    DataImageOfProduct                                    
                                }
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="image-product">

                                    <div onClick={this.Show_Zomm_Thumb_Product} className="thumb-items d-none d-md-flex">
                                        <i className="fas fa-expand-arrows-alt" />
                                    </div>
                                   {
                                       Big_Image_Product

                                   }
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
                                <h4 className="Title_Items">{ DataProduct ?  DataProduct.Name :''}</h4>
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
                                <p className="producer">Nhà sản xuất: <a href="3" className="brand">{ DataProduct ? DataProduct.Brand :''}</a></p>
                                <p className="text_Items"> Mã Sản Phẩm: <span className="ID_Items">{DataProduct ? DataProduct.ID_Product :''}</span> </p>
                                <p className="Text_Quantity">Số lượng sản phẩm trong kho: {Check_Quantity}</p>
                                <div className="Wrap_Guarantee">
                                    <span className="Guarantee">Bảo Hành:</span>
                                    <span className="Month_Guarantee">{DataProduct ? DataProduct.Guarantee : ''}</span>
                                </div>
                                <p className="Price_Products">{DataProduct ? this.coverStringMoney(DataProduct.Price) : ''} đ</p>
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
                <InformationAndStatistics DataProduct={ DataProduct ? DataProduct :''}></InformationAndStatistics>
                <Products></Products>
                <ReactCSSTransitionGroup
                    transitionName="Zoom_Thumb_Items_Aniamtion"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >
                    <div className={`Zoom_Thumb_Items ${this.state.Zoom_Thumb_Product ? '' : 'd-none'}`}>
                        <div className="Sub_Thumb_items_Image">

                            {Data_Images_Of_Zoom_Thumb_Items}   

                        </div>
                        <button onClick={this.Handle_Prev_And_Next} className={`Previous_Thumb_Items ${this.state.Position_Slide_Product === 1 ? 'Litmit' : ''}`} data="Previous">
                            <i className="fas fa-chevron-left" />
                        </button>
                        <button onClick={this.Handle_Prev_And_Next} className={`Next_Thumb_Items ${this.state.Position_Slide_Product === Length_Big_Image ? 'Litmit' : ''} `} data="Next">
                            <i className="fas fa-chevron-right" />
                        </button>
                        <i onClick={this.Close_Zomm_Thumb_Product} className="fas fa-times Close_Thumb_Items" />
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        Onvideo: state.onVideo,
        OnDataProduct: state.DataApi
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
