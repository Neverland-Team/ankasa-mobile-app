import axios from 'axios';
import { URI } from '../utils';

const Booking = (token) =>
{
    
     const promise = new Promise((resolve, reject) => {
            const headers = { headers: {'Authorization':token }}
            axios.get(`${URI}/users/booking`,headers)
            .then((result)=>{
                resolve(result.data.data);
            })
            .catch(err => {
                
            })
     });
     return promise;
}
export {Booking};