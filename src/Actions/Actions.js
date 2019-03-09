import * as Action from '../Contants/Action_Types';

export function Show_Nav(ShowNav) {

    return {

        type : Action.Show_Nav_Mobile,
        ShowNav

    }
}
export function Off_Nav(OffNav){

    return {

        type : Action.Off_Nav_Mobile,
        OffNav

    }

}
export function Close_Silde_Bar(Close_Slide_Bar){

    return{

        type: Action.Close_Slide_Bar,
        Close_Slide_Bar

    } 

}
export function Show_Notification_Product(Show_Product){

    return {
        type : Action.Show_Notification_Product,
        Show_Product
    }
}
export function Close_Notification_Product(Close_Product){
    return {
            type : Action.Close_Notification_Product,
            Close_Product

    }
}
