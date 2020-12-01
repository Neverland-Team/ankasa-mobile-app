import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {AuthLogin} from '../redux/actions/Auth';
import {URI} from '../utils';

const Login = (data) => {
const dispacth = useDispatch();
  const promise = new Promise((resolve, reject) => {
    axios
      .post(`${URI}/auth/login`, data)
      .then((result) => {
        AsyncStorage.setItem('token', result.data.accessToken);
        dispacth(AuthLogin(result.data.accessToken));

        //    console.log(result.data.accessToken)
        resolve(result.data.accessToken);
      })
      .catch((err) => {});
  });
  return promise;
};
const SignUp = (data) => {
  const promise = new Promise((resolve, reject) => {
    axios
      .post(``)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {});
  });
  return promise;
};
const ForgotPassword = (data) => {
  const promise = new Promise((resolve, reject) => {
    axios
      .post(``)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {});
  });
  return promise;
};

export {Login, SignUp, ForgotPassword};
