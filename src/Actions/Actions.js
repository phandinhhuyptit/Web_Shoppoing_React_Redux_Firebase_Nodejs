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
export function Show_Video(Show_Video){

    return {

        type : Action.Show_Video,
        Show_Video

    }
}
export function Close_Video(Close_Video){

    return {
        type: Action.Close_Video,
        Close_Video
    }

}
export function Show_Slidebar_Panel(Show_Slidebar_Panel){

    return {
           type : Action.Show_Slidebar_Panel,
           Show_Slidebar_Panel 
    }

}
export function Close_Slidebar_Panel(Close_Slidebar_Panel){

        return {

                type : Action.Close_Slidebar_Panel,
                Close_Slidebar_Panel

        }

}
export function Change_List_Or_Grid(List_Or_Grid) {

    return {

            type : Action.Change_List_Or_Grid,
            List_Or_Grid
    }
}
export function Get_PositionY_Window(PositionY) {


    return {

            type : Action.Get_PositionY_Window,
            PositionY
    }
}