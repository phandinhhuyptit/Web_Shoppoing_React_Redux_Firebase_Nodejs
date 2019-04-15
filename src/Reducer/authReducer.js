
import * as actionAuth from '../Contants/Action_Auth'

const InitialAuth = {
    authSignUpError : null,
    authGetTokenError : null,
    authSignInError: null,
    StateSignUp :true,
    stateAuth: null,
    AuthData : null
}
const authReducer = (state = InitialAuth, action) => {
    switch (action.type) {
        case actionAuth.Login_Sucess:
            console.log("Login Sucessful");
            return {

                ...state,
                authSignInError: null,

            }
        case actionAuth.Login_Error:        
            return {
                ...state,
                authSignInError: 'Mật Khẩu Hoặc Email Không Khớp. Vui Lòng Kiểm Tra Lại '

            }

        case actionAuth.LogOut_Sucess:
            console.log(" Log Out Scucessful ");
            return state
        case actionAuth.LogOut_Fail:
            console.log("Logout Fail . Please Check Your Data or Your Code");
            return state
        case actionAuth.Still_Account:
            return {

                ...state,
                stateAuth: action.state

            }
        case actionAuth.Nothing_Account:
            return {
                ...state,
                stateAuth: action.state
            }
        case actionAuth.AUTH_START : 
            return state
        case actionAuth.AUTH_SUCESS : 
            return {

                ...state , 
                AuthData : action.authData
            }    

        case actionAuth.AUTH_FAIL : 
        
                return state

        case actionAuth.Decode_User_Sucess :
        
            return {

                ...state ,
                AuthData : action.payload
            }
        case actionAuth.Decode_User_Fail :
        
            console.log("Fail Get Auth Data")
            
            return {

                ...state,
                authGetTokenError : "Fail Get Data From Token"            
            }
        case actionAuth.Sucess_Sign_Up : 
        return {

                ...state,
                authSignUpError : null,
                StateSignUp : true
        }    
        case actionAuth.Fail_Sign_Up : 
        return {

            ...state,
            authSignUpError :"Tài Khoản Này Đã Có Người Đăng Ký. Vui Lòng Kiểm Tra Lại",
            StateSignUp : false            
        }
        case actionAuth.clearAuth: 
        return {

            ...state,
            AuthData : null
        }    
        default:
            return state
    }
}
export default authReducer