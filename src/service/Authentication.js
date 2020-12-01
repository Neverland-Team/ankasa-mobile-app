import axios from 'axios';
import { ToastAndroid } from 'react-native';
import { URI } from '../utils';

// const Login = (data) =>
// {
//      const promise = new Promise((resolve, reject) => {
//             axios.post(`${URI}/auth/login`,data)
//             .then((result) =>{
                
//                 resolve(result.data);
//             })
//             .catch(err => {
                
//             })
//      });
//      return promise;
// }
const SignUp = (data) => {
  const promise = new Promise((resolve, reject) => {
    axios
      .post(`${URI}/auth/register`, data)
      .then((result) => {
        ToastAndroid.show('Registration Successfully', ToastAndroid.LONG);
        resolve(result);
      })
      .catch((err) => {
        ToastAndroid.show('Registration Failed', ToastAndroid.LONG);
        reject(err);
      });
  });
  return promise;
};
const ForgotPassword = (data) =>
{
     const promise = new Promise((resolve, reject) => {
            axios.post(``)
            .then((result)=>{
                resolve(result);
            })
            .catch(err => {
                
            })
     });
     return promise;
}

export {SignUp,ForgotPassword};