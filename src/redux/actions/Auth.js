const AuthLoginSuccess = (data) => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: data,
  };
};

export const AuthLogin = (data) => {
//   console.log('dari redux: ', data);
  return (dispatch) => {
    dispatch(AuthLoginSuccess(data));
  };
};

export const AuthLogout = () => {
  return {
    type: 'LOGOUT',
  };
};
