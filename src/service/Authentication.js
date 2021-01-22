import axios from 'axios';
import { ToastAndroid } from 'react-native';
import { URI } from '../utils';

const SignUp = (data) => {
  const promise = new Promise((resolve, reject) => {
    axios
      .post(`${URI}/auth/register`, data)
      .then((result) => {
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