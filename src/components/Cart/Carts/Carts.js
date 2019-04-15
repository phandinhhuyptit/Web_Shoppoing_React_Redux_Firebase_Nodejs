import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import * as userAction from '../../../Actions/UserAction';

class Carts extends Component {


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

    handleMinusCart = (event) =>{

      const idProduct = event.currentTarget.value;
      let Quantity;     
      this.props.cartOfUser.Items.forEach(Item =>{

            if(Item.Product.ID_Product === idProduct ){
             
                Quantity = Item.Quantity
        
            }
      })  
      if(Quantity > 1 ){

        this.props.onMinusProductToCart( idProduct,this.props.cartOfUser,this.props.AuthData.user_id); 

      }
      
    }
    handlePlusCart = (event) =>{

      const idProduct = event.currentTarget.value;
        
      this.props.onPlusProductToCart( idProduct,this.props.cartOfUser,this.props.AuthData.user_id);  

    }
    handleRemoveItem = (event) => {

        event.preventDefault();
        const idProduct = event.currentTarget.value;        
       this.props.onRemoveProductFromCart(idProduct,this.props.cartOfUser,this.props.AuthData.user_id);
    }   
    render() {
        let { cartOfUser } = this.props
        let Carts;     
      
        if (cartOfUser) {

            Carts = cartOfUser.Items.map(Items => {

                if (Items) {

                    return (

                        <tr>
                            <td className="d-none d-lg-table-cell"><img src={Items.Product.GeneralImage} aria-hidden alt="Card image cap" className="img-fluid" />
                            </td>
                            <td>
                                <Link to={`DetailProduct/${this.ChangeToSlug(Items.Product.Name)}.${Items.Product.ID_Product}.html`} className="Nanme_Products">{Items.Product.Name}</Link>
                            </td>
                            <td className="d-none d-md-table-cell">
                                <b className="price_products">{this.coverStringMoney(Items.Product.Price)} đ</b>
                            </td>
                            <td>
                                <div className="input-group Quantity d-flex justify-content-center  ">
                                    <span className="input-group-btn d-none d-lg-block">
                                        <button onClick={(event)=>this.handleMinusCart(event)} type="button" className="btn btn-primary Minus_Quantity" value={Items.Product.ID_Product}>-</button>
                                    </span>
                                    <input type="number" defaultValue={Items.Quantity} min={0} className="form-group" />
                                    <span className="input-group-btn d-none d-lg-block ">
                                        <button onClick={(event) =>this.handlePlusCart(event)} type="button" className="btn btn-primary Plus_Quantity" value={Items.Product.ID_Product} >+</button>
                                    </span>
                                </div>
                            </td>
                            <td className="d-none d-md-table-cell">
                                <b className="price_total">{this.coverStringMoney(Items.TotalPriceItems)} đ</b>
                            </td>
                            <td className="text-center">
                                <a name  className="btn btn-primary refresh" href="5436" role="button"><i className="fas fa-sync-alt" /></a>
                                <button onClick={(event)=>this.handleRemoveItem(event)} className="btn btn-primary remove" value={Items.Product.ID_Product} >
                                    <i className="fas fa-times" />
                                </button>
                            </td>
                        </tr>
                    )

                }
            })
        }
        return (
            <React.Fragment>

                {
                    Carts
                }


            </React.Fragment>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        cartOfUser: state.user.cartOfUser,
        AuthData : state.auth.AuthData
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onPlusProductToCart: (idProduct, CartProducts, IdUser) => {
            dispatch(userAction.plusProductToCart(idProduct, CartProducts, IdUser))
        },
        onMinusProductToCart: (idProduct, CartProducts, IdUser) => {
            dispatch(userAction.minusProductToCart(idProduct, CartProducts, IdUser))
        },
        onRemoveProductFromCart :(idProduct, CartProducts,idUser) =>{
            dispatch(userAction.removeProductFromCart(idProduct, CartProducts,idUser));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Carts)
