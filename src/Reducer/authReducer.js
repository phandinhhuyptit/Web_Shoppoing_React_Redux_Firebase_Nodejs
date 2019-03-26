
import * as actionAuth from '../Contants/Action_Auth'



const InitialAuth = {


    authError: null,
    stateAuth: ''
}
const authReducer = (state = InitialAuth, action) => {
    switch (action.type) {
        case actionAuth.Login_Sucess:
            console.log("Login Sucessful");
            return {

                ...state,
                authError: null,

            }
        case actionAuth.Login_Error:


            return {

                ...state,
                authError: 'Mật Khẩu Hoặc Email Không Khớp. Vui Lòng Kiểm Tra Lại '

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
        default:
            return state
    }
}
export default authReducer