import axios from 'axios';
import {URI} from '../utils';

const Profile = (token) => {
  const promise = new Promise((resolve, reject) => {
    axios
      .get(`${URI}/users/profile`, {
        headers: {
          Authorization: token,
        },
      })
      .then((result) => {
        resolve(result.data.data);
      })
      .catch((err) => {});
  });
  return promise;
};
const EditProfile = (data, token) => {
  const promise = new Promise((resolve, reject) => {
    axios
      .patch(`${URI}/users/profile`, data, {
        headers: {
          Authorization: token,
        },
      })
      .then((result) => {
        resolve(result.data.data);
      })
      .catch((err) => {});
  });
  return promise;
};

const Notifications = (data) => {
  const promise = new Promise((resolve, reject) => {
    axios
      .get(``)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {});
  });
  return promise;
};

export {Profile, EditProfile, Notifications};
