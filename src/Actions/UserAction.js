import { db } from '../Firebase/config';
import * as userAction from '../Contants/Action_User';

export const addProductToCart = (idProduct, CartProducts, IdUser) => {

    return (dispatch) => {
        const cartProductIndex = CartProducts.Items.findIndex((productCart) => idProduct === productCart.Product.ID_Product);

        const updateCartItems = [...CartProducts.Items];
        let newQuantity = 1;
        let TotalPrice = CartProducts.TotalPrice;
        let TotalPrice_2 = 0;
        let newPrice;

        if (cartProductIndex >= 0) {

            newQuantity = CartProducts.Items[cartProductIndex].Quantity + 1;
            newPrice = CartProducts.Items[cartProductIndex].Product.Price * newQuantity;
            updateCartItems[cartProductIndex].Quantity = newQuantity;
            updateCartItems[cartProductIndex].TotalPriceItems = newPrice;
            updateCartItems.forEach(item => {
                
                TotalPrice_2 += item.TotalPriceItems;

            })

            const UpdateCart = {

                Items: updateCartItems,
                TotalPrice: TotalPrice_2
            }
            dispatch(updateCart(UpdateCart));

            db.collection('Users').doc(IdUser)
                .update({ Cart: UpdateCart })
        }
        else {

            db.collection('Products').where('ID_Product', '==', idProduct)
                .get()
                .then(product => {

                    product.forEach(Product => {

                        updateCartItems.push({ Product: Product.data(), Quantity: newQuantity, TotalPriceItems: Product.data().Price });
                        TotalPrice = TotalPrice + (newQuantity * Product.data().Price);
                    })
                    const UpdateCart = {

                        Items: updateCartItems,
                        TotalPrice: TotalPrice
                    }
                    dispatch(updateCart(UpdateCart));
                    db.collection('Users').doc(IdUser)
                        .update({ Cart: { Items: updateCartItems, TotalPrice: TotalPrice } })
                })
        }
    }
}
export const addMultipleProduct = (idProduct, CartProducts, IdUser, Quantity) => {



    return (dispatch) => {
        const cartProductIndex = CartProducts.Items.findIndex((productCart) => idProduct === productCart.Product.ID_Product);

        const updateCartItems = [...CartProducts.Items];
        let newQuantity = 1;
        let TotalPrice = CartProducts.TotalPrice;
        let TotalPrice_2 = 0;
        let newPrice;

        if (cartProductIndex >= 0) {

            newQuantity = CartProducts.Items[cartProductIndex].Quantity + Quantity;
            newPrice = CartProducts.Items[cartProductIndex].Product.Price * newQuantity;
            updateCartItems[cartProductIndex].Quantity = newQuantity;
            updateCartItems[cartProductIndex].TotalPriceItems = newPrice;
            updateCartItems.forEach(item => {

                TotalPrice_2 += item.TotalPriceItems;

            })

            const UpdateCart = {

                Items: updateCartItems,
                TotalPrice: TotalPrice_2
            }
            dispatch(updateCart(UpdateCart));

            db.collection('Users').doc(IdUser)
                .update({ Cart: UpdateCart })
        }
        else {

            db.collection('Products').where('ID_Product', '==', idProduct)
                .get()
                .then(product => {

                    product.forEach(Product => {

                        updateCartItems.push({ Product: Product.data(), Quantity: newQuantity, TotalPriceItems: Product.data().Price });
                        TotalPrice = TotalPrice + (newQuantity * Product.data().Price);
                    })
                    const UpdateCart = {

                        Items: updateCartItems,
                        TotalPrice: TotalPrice
                    }
                    dispatch(updateCart(UpdateCart));
                    db.collection('Users').doc(IdUser)
                        .update({ Cart: { Items: updateCartItems, TotalPrice: TotalPrice } })
                })
        }
    }
}
export const plusProductToCart = (idProduct, CartProducts, IdUser) => {

    return (dispatch) => {
        const cartProductIndex = CartProducts.Items.findIndex((productCart) => idProduct === productCart.Product.ID_Product);

        const updateCartItems = [...CartProducts.Items];
        let newQuantity = 1;
        let TotalPrice = CartProducts.TotalPrice;
        let TotalPrice_2 = 0;
        let newPrice;

        if (cartProductIndex >= 0) {

            newQuantity = CartProducts.Items[cartProductIndex].Quantity + 1;
            newPrice = CartProducts.Items[cartProductIndex].Product.Price * newQuantity;
            updateCartItems[cartProductIndex].Quantity = newQuantity;
            updateCartItems[cartProductIndex].TotalPriceItems = newPrice;
            updateCartItems.forEach(item => {
                
                TotalPrice_2 += item.TotalPriceItems;

            })

            const UpdateCart = {

                Items: updateCartItems,
                TotalPrice: TotalPrice_2
            }
            dispatch(updateCart(UpdateCart));

            db.collection('Users').doc(IdUser)
                .update({ Cart: UpdateCart })
        }
        else {

            db.collection('Products').where('ID_Product', '==', idProduct)
                .get()
                .then(product => {

                    product.forEach(Product => {

                        updateCartItems.push({ Product: Product.data(), Quantity: newQuantity, TotalPriceItems: Product.data().Price });
                        TotalPrice = TotalPrice + (newQuantity * Product.data().Price);
                    })
                    const UpdateCart = {

                        Items: updateCartItems,
                        TotalPrice: TotalPrice
                    }
                    dispatch(updateCart(UpdateCart));
                    db.collection('Users').doc(IdUser)
                        .update({ Cart: { Items: updateCartItems, TotalPrice: TotalPrice } })
                })
        }
    }
}
export const minusProductToCart = (idProduct, CartProducts, IdUser) => {

    return (dispatch) => {
        const cartProductIndex = CartProducts.Items.findIndex((productCart) => idProduct === productCart.Product.ID_Product);

        const updateCartItems = [...CartProducts.Items];
        let newQuantity = 1;
        let TotalPrice = CartProducts.TotalPrice;
        let TotalPrice_2 = 0;
        let newPrice;

        if (cartProductIndex >= 0) {

            newQuantity = CartProducts.Items[cartProductIndex].Quantity - 1;
            newPrice = CartProducts.Items[cartProductIndex].Product.Price * newQuantity;
            updateCartItems[cartProductIndex].Quantity = newQuantity;
            updateCartItems[cartProductIndex].TotalPriceItems = newPrice;
            updateCartItems.forEach(item => {
                
                TotalPrice_2 += item.TotalPriceItems;

            })

            const UpdateCart = {

                Items: updateCartItems,
                TotalPrice: TotalPrice_2
            }
            dispatch(updateCart(UpdateCart));

            db.collection('Users').doc(IdUser)
                .update({ Cart: UpdateCart })
        }
        else {

            db.collection('Products').where('ID_Product', '==', idProduct)
                .get()
                .then(product => {

                    product.forEach(Product => {

                        updateCartItems.push({ Product: Product.data(), Quantity: newQuantity, TotalPriceItems: Product.data().Price });
                        TotalPrice = TotalPrice + (newQuantity * Product.data().Price);
                    })
                    const UpdateCart = {

                        Items: updateCartItems,
                        TotalPrice: TotalPrice
                    }
                    dispatch(updateCart(UpdateCart));
                    db.collection('Users').doc(IdUser)
                        .update({ Cart: { Items: updateCartItems, TotalPrice: TotalPrice } })
                })
        }
    }
}
export const removeProductFromCart = (idProduct, CartProducts,idUser) => {
    return (dispatch) => {
        const updateCartProducts = CartProducts.Items.filter(Item => idProduct !== Item.Product.ID_Product);
        let TotalPrice = 0;
        updateCartProducts.forEach(Product => {

            TotalPrice = TotalPrice + Product.TotalPriceItems;


        })
        const UpdateCart = {

            Items: updateCartProducts,
            TotalPrice: TotalPrice
        }

         dispatch(updateCart(UpdateCart));
         db.collection('Users').doc(idUser)
        .update({ Cart: UpdateCart })
    }   

}
export const getCartOfUser = (idUser) => {

    return (dispatch) => {

        db.collection('Users').doc(idUser)
            .get()
            .then((user) => {

                if (user.data()) {

                    dispatch(getCartOfUserSucess(user.data().Cart));
                }

            })
            .catch(err => {


                dispatch(getCartOfUserFail(err))

            })
    }
}
export const getCartOfUserSucess = (payload) => {

    return {

        type: userAction.getCartUserSucess,
        payload

    }
}

export const getCartOfUserFail = (error) => {
    return {

        type: userAction.getCartOfUserFail,
        error
    }
}
export const updateCart = (updateCart) => {

    return {

        type: userAction.updateCart,
        updateCart
    }
}

