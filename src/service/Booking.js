import axios from 'axios';

const Booking = (data) =>
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
export {Booking};