import * as userAction from '../Contants/Action_User';

const initialUser = {


    cartOfUser : null,
    errorCartOfUser :''
}

const userReducer = (state = initialUser, action) => {
    switch (action.type) {
        
        case userAction.getCartUserSucess : 
        return {

            ...state,
            cartOfUser : action.payload

        }           
        case userAction.getCartOfUserFail : 
        return {
            ...state ,
            errorCartOfUser : action.error
        }
        case userAction.updateCart : 
        return {

            ...state,
            cartOfUser : action.updateCart
        }
        case userAction.clearCart : 
        return {

                ...state,
                cartOfUser : null

        }
        default:
            return state
    }
}
export default userReducer;