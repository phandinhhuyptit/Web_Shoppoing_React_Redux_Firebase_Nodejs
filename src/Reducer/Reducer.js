import * as Action from '../Contants/Action_Types';

const ShoppingInitialState = {

    onShowNav: false,
    onNotification_Product: false,
    onVideo: false,
    onSliderPanel: false,
    onGridOrList : true,
    onPositionY : false,
    DataApi : [],
    ProductNotification :{}
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
        case Action.Show_Slidebar_Panel : 
            return {
                ...state,
                onSliderPanel : action.Show_Slidebar_Panel
            }
        case Action.Close_Slidebar_Panel : 
            return {

                ...state,
                onSliderPanel : action.Close_Slidebar_Panel
            }    
        case Action.Change_List_Or_Grid : 
            return {
                ...state,
                onGridOrList : action.List_Or_Grid
            }
        case Action.Get_PositionY_Window : 
        
            return {

                ...state, 
                onPositionY : action.PositionY    
            }
        case Action.Get_Data :
            return {

                    ...state,
                    DataApi : action.DataFirebase
              } 
              
        case Action.Get_Product_For_Notification :          

              let DataApi = state.DataApi;
              
              for (const key in DataApi) {
                    if(DataApi[key].ID_Product === action.IDProduct ){

                        return {

                            ...state, 
                            ProductNotification :DataApi[key]
                        }               


                    }
              }           
        return state;      
           
        default:    
            return state;
    }
}


export default rootReducer;