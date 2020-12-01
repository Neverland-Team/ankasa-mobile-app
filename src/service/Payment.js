import axios from 'axios';
import {URI} from '../utils';

const SearchFlightService = (data) => {
  const promise = new Promise((resolve, reject) => {
    axios
      .get(`${URI}/users/city/${data}`, {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZHVzZXIiOjIyLCJlbWFpbCI6Im11aGtod2FmYUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6Im11aGtod2FmYSIsInJvbGUiOjcsImlhdCI6MTYwNjgyNjYyNn0.sOm8ZorhVEn3ykML-tIqE8-OfwZl1drJhU7tN5OXbTA',
        },
      })
      .then((result) => {
        resolve(result.data.data[0]);
        // console.log(result.data.data[0]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
  return promise;
};
const SearchResult = (date, idtocity) => {
  const promise = new Promise((resolve, reject) => {
    axios
      .get(
        `${URI}/users/flight/search?datedeparture=${date}&tocity=${idtocity}`,
        {
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZHVzZXIiOjIyLCJlbWFpbCI6Im11aGtod2FmYUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6Im11aGtod2FmYSIsInJvbGUiOjcsImlhdCI6MTYwNjgyNjYyNn0.sOm8ZorhVEn3ykML-tIqE8-OfwZl1drJhU7tN5OXbTA',
          },
        },
      )
      .then((result) => {
        console.log(result.data.data);
        resolve(result.data.data);
      })
      .catch((err) => {});
  });
  return promise;
};
const FlightDetail = (data) => {
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
export {SearchFlightService, SearchResult, FlightDetail};
