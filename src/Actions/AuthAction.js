
import {auth} from '../Firebase/config';

import * as actionAuth from '../Contants/Action_Auth';





 
export const signIn = (credentials)=>{

    return (dispatch) =>{


        auth.signInWithEmailAndPassword(
            credentials.Email,
            credentials.Password

        ).then((account)=>{

            console.log(account);
            dispatch(Login_Sucess())
            
            
        }).catch(err =>{

            dispatch(Login_Error(err))               

        })
    }

}

export const SignOut = () =>{

    return(dispatch) =>{

      auth.signOut()
      .then(Auth =>{

        console.log(Auth);    
        dispatch(LogOut_Sucess())

      }) 
      .catch (Error =>{

        dispatch(LogOut_Fail())

      } )   

    }
}
export const Login_Error = (Error) =>{

    return {
        type : actionAuth.Login_Error,
        Error
    }
}

export const Login_Sucess =() =>{

        return {
            type : actionAuth.Login_Sucess,
           
        }   

}

export const LogOut_Sucess = () =>{

        return {
            
            type : actionAuth.LogOut_Sucess
        }
}
export const LogOut_Fail = () =>{

    return {

        type : actionAuth.LogOut_Fail

    }
}

export const First_State_Account  = (State) =>{
    
    return (dispatch) =>{

        if(State ===true){

            dispatch(Still_Account(State))

        }
        else{

            dispatch(Nothing_Account(State))

        }        

    }
}


export const State_Account = (State) =>{

    return  (dispatch)=>{

        auth.onAuthStateChanged(function(user) {
            if (user) {
                dispatch(Still_Account(true))
            } else {
                
                dispatch(Nothing_Account(false))
            }
          });
    }
}
export const Still_Account = (state) =>{

    return {
        type : actionAuth.Still_Account,
        state
        
    }
}

export const Nothing_Account = (state) =>{

    return {
        type : actionAuth.Nothing_Account,
        state
    }

}
export const authStart = () =>{

    return {
        type : actionAuth.AUTH_START
    }   

}
export const authSucess = (authData) =>{

    return {

        type : actionAuth.AUTH_SUCESS,
        authData
    } 

}
export const authFail = (Error) =>{

    return { 

        type : actionAuth.AUTH_FAIL,
        Error 

    }

}
