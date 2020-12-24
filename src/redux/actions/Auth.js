import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import {URI} from '../../utils';

const AuthLoginRequest = () => {
  return {
    type: 'LOGIN_REQUEST',
  };
};

const AuthLoginSuccess = (data) => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: data,
  };
};
const AuthLoginError = (error) => {
  return {
    type: 'LOGIN_ERROR',
    payload: error,
  };
};

export const Logout = () => {
  return {
    type: 'LOGOUT',
  };
};

export const AuthLogin = (fields) => {
  return (dispatch) => {
    dispatch(AuthLoginRequest());
    return Axios({
      method: 'POST',
      data: fields,
      url: `${URI}/auth/login`,
    })
      .then((res) => {
        const data = res.data.accessToken;
        console.log('dari redux: ',data)
        AsyncStorage.setItem('token',data)
        dispatch(AuthLoginSuccess(data));
      })
      .catch((err) => {
        const message = err.message;
        dispatch(AuthLoginError(message));
      });
  };
};

export const AuthLogout = () => {
  return (dispatch) => {
    dispatch(Logout());
  };
};

const RegisterSuccess = (data) => {
  return {
    type: 'REGISTER_SUCCESS',
    payload: data,
  };
};

export const Register = (data) => {
  return (dispatch) => {
    dispatch(RegisterSuccess(data));
  };
};
