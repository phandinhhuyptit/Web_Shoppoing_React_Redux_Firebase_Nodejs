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

