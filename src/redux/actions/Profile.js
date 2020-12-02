import Axios from 'axios';
// const SaveRequest = ()=> {
//     return{
//         type: 'SAVE_DATA_REQUEST'
//     }
// }

// const SaveSuccess = (data)=> {
//     return{
//         type: 'SAVE_DATA_SUCCESS',
//         payload: data
//     }
// }

// const SaveError = (error)=> {
//     return{
//         type: 'SAVE_DATA_ERROR',
//         payload: error
//     }
// }




// export const SaveDataProfile = (data) => {
//     return (dispatch) =>{
//         // dispatch(SaveRequest())
//         dispatch(SaveSuccess(data))
//         // dispatch(DeletePhoneError(message))
//     }
// }
const ProfileRequest = () => {
    return {
      type: 'SAVE_DATA_REQUEST',
    };
  };
  
  const ProfileSuccess = (data) => {
    return {
      type: 'SAVE_DATA_SUCCESS',
      payload: data,
    };
  };
  const ProfilePatch = (data) => {
    return {
      type: 'PROFILE_PATCH',
      payload: data.data[0],
    };
  };
  const ProfileError = (error) => {
    return {
      type: 'SAVE_DATA_ERROR',
      payload: error,
    };
  };
  
  
  export const GetProfile = (token) => {
      return (dispatch) =>{
          dispatch(ProfileRequest())
          return Axios({
            method: 'GET',
            url: `http://192.168.100.9:8000/api/v1/users/profile`,
            headers: {
              Authorization: token,
            },
          })
            .then((res) => {
              const data = res.data;
              console.log('ini dataa', data)
              dispatch(ProfileSuccess(data));
            })
            .catch((err) => {
              const message = err.message;
              console.log("testtttttttttttttttttttttttttt");
              dispatch(ProfileError(message));
            });
      }
  }

  export const UpdateProfile = (token) => {
    return (dispatch) =>{
        dispatch(ProfileRequest())
        return Axios({
          method: 'PATCH',
          url: `http://192.168.100.9:8000/api/v1/users/profile`,
          headers: {
            Authorization: token,
          },
        })
          .then((res) => {
            const data = res.data;
            console.log('ini dataa', data)
            dispatch(ProfileSuccess(data));
          })
          .catch((err) => {
            const message = err.message;
            console.log("testtttttttttttttttttttttttttt");
            dispatch(ProfileError(message));
          });
    }
}
