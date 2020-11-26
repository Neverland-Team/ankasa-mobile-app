// const AuthLoginRequest = ()=> {
//     return{
//         type: 'LOGIN_REQUEST'
//     }
// }

const AuthLoginSuccess = (data)=> {
    return{
        type: 'LOGIN_SUCCESS',
        payload: data
    }
}
// const AuthLoginError = (error)=> {
//     return{
//         type: 'LOGIN_ERROR',
//         payload: error
//     }
// }

export const AuthLogin = (data) => {
    return (dispatch) =>{
        // dispatch(AuthLoginRequest())
        dispatch(AuthLoginSuccess(data))
        // dispatch(AuthLoginError(err))
    }

}

export const AuthLogout = ()=> {
    return{
        type: 'LOGOUT',
    }
}
