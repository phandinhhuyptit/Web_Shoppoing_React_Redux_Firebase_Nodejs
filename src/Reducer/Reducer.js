import * as Action from '../Contants/Action_Types';

const ShoppingInitialState = {

    onShowNav: false,
    onNotification_Product: false,
    onVideo: false
}

const rootReducer = (state = ShoppingInitialState, action) => {

    switch (action.type) {


        case Action.Show_Nav_Mobile:
            if (action.ShowNav) {

                return { ...state, onShowNav: action.ShowNav }

            }
            return { ...state, onShowNav: false }
        case Action.Off_Nav_Mobile:
            if (!action.OffNav) {

                return { ...state, onShowNav: action.OffNav }

            }
        case Action.Close_Slide_Bar:
            return { ...state, onShowNav: !action.Close_Slide_Bar }
        case Action.Show_Notification_Product:
            return {
                ...state,
                onNotification_Product: action.Show_Product
            }
        case Action.Close_Notification_Product:
            return {
                ...state,
                onNotification_Product: action.Close_Product
            }
        case Action.Show_Video:
            return {
                ...state,
                onVideo: action.Show_Video
            }
        case Action.Close_Video:
            return {
                ...state,
                onVideo : action.Close_Video
            }     
        default:
            return state;
    }
}


export default rootReducer;