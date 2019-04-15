import * as Action from '../Contants/Action_Types';
import { CallApi} from '../utils/apiCaller';
import { db } from '../Firebase/config';

export function Get_Product_For_Notification  ( IDProduct ) {
    return {
            type: Action.Get_Product_For_Notification,
            IDProduct            
    }

}
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
export function Fetch_Data(Fetch_Data){

    return {

        type :Action.Fetch_Data,
        Fetch_Data
    }
}


export const Fetch_All_Product = () =>{

    return (dispatch) => {

          return CallApi('/News','GET',null) 
          .then(res =>{
            if(res){

                dispatch(Fetch_Data(res.data));
            }      

          })
          .catch ( err =>{

            console.log(err);

          })
    }
}

export function Get_Data_Firebase () {

    return (dispatch) =>{

    //    return  UsersRef.where('Email','==','sihaojunvn2012@gmail.com')
    //    .get()
    //    .then( docs =>{

    //         if(docs){
    //             docs.forEach( doc =>{
    //                 console.log(doc.data());
    //             })       

    //         }    
           
    //    })
    //    .catch( err =>{

    //     console.log(err); 

    //    })   


    return db.collection('Products')
    .get()
    .then(docs =>{

        if(docs){

            let DataFirebase = [];
            docs.forEach(doc =>{

                DataFirebase.push(doc.data());
               
            })
            dispatch(Get_Data(DataFirebase));
        }
    })   



        // return db.collection('Users').get().then((snapshot) => {

        //             let DataFirebase = [];

        //             if(snapshot){

        //                snapshot.docs.forEach( doc =>{

        //                     DataFirebase.push(doc.data());

        //                })
        //                console.log(DataFirebase);
                                              
        //                dispatch(Get_Data(DataFirebase));
                       
                         
        //             }
        //             else {

        //                 console.log("No Such Data");

        //             } 
                   
        //         })
        //         .catch(err=>{

        //             console.log(err);

        //         })

        }
    }   

export function Get_Data(DataFirebase) {

    return {

        type : Action.Get_Data,
        DataFirebase 

    }

}



