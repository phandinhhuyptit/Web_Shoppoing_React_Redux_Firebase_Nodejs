import * as Action from '../Contants/Action_Types';

const ShoppingInitialState = {

    onShowNav : false
}

const rootReducer = (state = ShoppingInitialState, action) => {

    switch (action.type) {
        
        
        case Action.Show_Nav_Mobile : 
            if(action.ShowNav){

                return {...state,onShowNav : action.ShowNav}

            }
                return  {...state,onShowNav : false}
        case Action.Off_Nav_Mobile :
            if(!action.OffNav){

                return {...state,onShowNav : action.OffNav }

            }     
        case Action.Close_Slide_Bar :     
            return {...state,onShowNav :!action.Close_Slide_Bar}

        default:
            return state;
    }
}


export default rootReducer;