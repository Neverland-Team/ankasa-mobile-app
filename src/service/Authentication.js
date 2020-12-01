import axios from 'axios';
import { URI } from '../utils';

const Login = (data) =>
{
     const promise = new Promise((resolve, reject) => {
            axios.post(`${URI}/auth/login`,data)
            .then((result) =>{
                
                resolve(result.data);
            })
            .catch(err => {
                
            })
     });
     return promise;
}
const SignUp = (data) =>
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

export {Login,SignUp,ForgotPassword};