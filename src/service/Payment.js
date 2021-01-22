import axios from 'axios';
import {URI} from '../utils';

const SearchFlightService = (data, token) => {
  const promise = new Promise((resolve, reject) => {
    axios
      .get(`${URI}/users/city/${data}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((result) => {
        resolve(result.data.data[0]);
      })
      .catch((err) => {
      });
  });
  return promise;
};
const SearchResult = (date, idtocity, token) => {
  const promise = new Promise((resolve, reject) => {
    axios
      .get(
        `${URI}/users/flight/search?datedeparture=${date}&tocity=${idtocity}`,
        {
          headers: {
            Authorization: token,
          },
        },
      )
      .then((result) => {
        resolve(result.data.data);
      })
      .catch((err) => {});
  });
  return promise;
};
const GetProfileOnFlight = (token) => {
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
const FlightDetail = (data, token) => {
  const promise = new Promise((resolve, reject) => {
    axios
      .post(`${URI}/users/booking`, data, {
        headers: {
          Authorization: token,
        },
      })
      .then((result) => {
        resolve(result.data);
      })
      .catch((err) => {});
  });
  return promise;
};

const Midtrans = (data,token) =>
{
     const promise = new Promise((resolve, reject) => {
                const headers = { headers: {'Authorization': `${token}`}}  
                axios.patch(`${URI}/topup/midtrans`,data,headers)
                .then(res =>{
                        resolve(res.data.token)
                })
                .catch(err => {
                    reject(err.message)
                })
     });
     return promise;
}


export {SearchFlightService, SearchResult, FlightDetail, GetProfileOnFlight,Midtrans};
