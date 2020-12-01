import axios from 'axios';

const SearchFlight = (data) =>
{
     const promise = new Promise((resolve, reject) => {
            axios.get(``)
            .then((result)=>{
                resolve(result);
            },(err) => {
                reject(err);
            });
     });
     return promise;
}
const SearchResult = (data) =>
{
     const promise = new Promise((resolve, reject) => {
            axios.get(``)
            .then((result)=>{
                resolve(result);
            },(err) => {
                reject(err);
            });
     });
     return promise;
}
const FlightDetail = (data) =>
{
     const promise = new Promise((resolve, reject) => {
            axios.get(``)
            .then((result)=>{
                resolve(result);
            },(err) => {
                reject(err);
            });
     });
     return promise;
}
export {SearchFlight,SearchResult,FlightDetail};