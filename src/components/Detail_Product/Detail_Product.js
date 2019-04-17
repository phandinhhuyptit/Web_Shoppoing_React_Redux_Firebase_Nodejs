import React, { Component } from 'react';
import InformationAndStatistics from './Infomation And Statistic Product/Information_And_Statistics';
import Products from './Products/Products';
import './Detail_Product.css';
import { connect } from 'react-redux';
import * as Action from '../../Actions/ProjectActions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types'; 
import * as userAction from '../../Actions/UserAction';
import {Link ,withRouter } from 'react-router-dom';
const propTypes = {

    Onvideo : PropTypes.bool.isRequired,
    OnDataProduct : PropTypes.arrayOf(
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
    On_Close_Video : PropTypes.func.isRequired
}
const defaultProps = {

    On_Close_Video : () =>{}
}

class Detail_Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backGround : {
                position: '0',
                backgroundImage: "",
                backgroundPosition: '0% 0%',
            },
            DataProduct : [],      
            Position_Slide_Product: 1,
            Zoom_Thumb_Product: false,
            quantityMinusOrPlus : 1
                  
        }
    }
    handleMinusQuantity = () => {
        if (this.state.quantityMinusOrPlus > 1) {

            this.setState((prevState) => ({

                ...prevState, quantityMinusOrPlus: prevState.quantityMinusOrPlus - 1

            }))
        }
    }
    handlePlusQuantity = (DataProduct) => {


        if (DataProduct) {


            if (this.state.quantityMinusOrPlus < parseInt(DataProduct.Quantity)) {

                this.setState((prevState) => ({


                    ...prevState, quantityMinusOrPlus: prevState.quantityMinusOrPlus + 1

                }))
            }
        }
    }
    handleAddProduct = (event) =>{

        const IdProduct = event.currentTarget.value;
        if(this.props.CartOfUser){

            this.props.onAddMultipleProduct(IdProduct,this.props.CartOfUser,this.props.AuthData.user_id,this.state.quantityMinusOrPlus);

        }else {
            
              this.props.history.push("/Login");
        }        
        
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

        this.setState((previousState, currentProps) => ({

             ...previousState,        
                 backGround : {                
                ...previousState.backGround,
                backgroundPosition: `${x}% ${y}%`
             }
        }))
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
        this.setState(prevState =>({
            ...prevState,
            backGround : {                
                ...prevState.backGround,
                backgroundImage: `url(${`${Src}`})`,
                position: Position                
            }  
        }))
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
                    <img onClick={this.Handle_Choose_Image} className={`Small-Image cursor ${this.state.backGround.position === `${Key}` ? 'ActiveImage' : ''}`} src={Product.Image} data-image={Key} aria-hidden alt="The Woods" />
                    </div>)

            })

            Big_Image_Product =DataProduct.BigImage.map((Image_Product,Key)=>{

                return (

                    <div key={Key} className={`mySlides ${this.state.backGround.position === `${Key}` ? '' : 'd-none'}`}>

                    <img className="myimage" src={`${Image_Product.Image}`} aria-hidden alt="Nature and sunrise" />
                    <div onMouseMove={this.handleMouseMove} style={this.state.backGround} className="numbertext"></div>
                </div>
                )
            })
            Data_Images_Of_Zoom_Thumb_Items = DataProduct.BigImage.map((Images,Key)=>{


               return <img key={Key} src={Images.Image} alt="Image" className={`Thumb_Items_Image ${this.state.Position_Slide_Product === (Key+1) ? 'Watching' : ''} `} aria-hidden />                  


            })
            Check_Quantity = <span className={DataProduct.Quanity === 0 ? 'Out_of_stock' : 'Stock'}>{DataProduct.Quantity === 0 ? 'Tạm Hết' : 'Có Hàng'}</span>
              
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
                                    <span onClick={() =>this.handleMinusQuantity(DataProduct)}  className={`minus_quantity ${this.state.quantityMinusOrPlus ===1 ?'LimitQuantity' :''}`}>-</span>
                                    <input type="number" id="quantity" min={1} value={this.state.quantityMinusOrPlus} />
                                    <span onClick = {() =>this.handlePlusQuantity(DataProduct)} className={`plus_quantity ${ DataProduct ? (this.state.quantityMinusOrPlus === parseInt(DataProduct.Quantity) ?'LimitQuantity' :'') :'' }`}>+</span>
                                </div> 
                                <button onClick ={(event) =>this.handleAddProduct(event)} type="button" className="btn btn-success Add_Cart" value={DataProduct ? DataProduct.ID_Product :''}>Thêm Vào Giỏ</button>
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


Detail_Product.propTypes =propTypes;
Detail_Product.defaultProps =defaultProps;  


const mapStateToProps = (state, ownProps) => {
    return {
        Onvideo: state.project.onVideo,
        OnDataProduct: state.project.DataApi,
        AuthData : state.auth.AuthData,
        CartOfUser : state.user.cartOfUser

    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        On_Close_Video: (Close_Video) => {
            dispatch(Action.Close_Video(Close_Video));
        },
        onAddMultipleProduct : (idProduct, CartProducts, IdUser, Quantity) =>{

                dispatch(userAction.addMultipleProduct(idProduct, CartProducts, IdUser, Quantity));


        }
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Detail_Product));
