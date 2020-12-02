import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import { URI } from '../../utils';
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
        console.log('get profile dari redux: ',token)
          dispatch(ProfileRequest())
          return Axios({
            method: 'GET',
            url: `${URI}/users/profile`,
            headers: {
              Authorization: token,
            },
          })
            .then((res) => {
              const data = res.data;
              AsyncStorage.setItem('user',JSON.stringify(data.data))
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
          url: `${URI}/users/profile`,
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
