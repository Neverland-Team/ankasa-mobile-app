// const SaveRequest = ()=> {
//     return{
//         type: 'SAVE_DATA_REQUEST'
//     }
// }

const SaveSuccess = (data)=> {
    return{
        type: 'SAVE_DATA_SUCCESS',
        payload: data
    }
}

// const SaveError = (error)=> {
//     return{
//         type: 'SAVE_DATA_ERROR',
//         payload: error
//     }
// }




export const SaveDataProfile = (data) => {
    return (dispatch) =>{
        // dispatch(SaveRequest())
        dispatch(SaveSuccess(data))
        // dispatch(DeletePhoneError(message))
    }
}
