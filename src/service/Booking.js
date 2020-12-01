import axios from 'axios';

const Booking = (data) =>
{
     const promise = new Promise((resolve, reject) => {
            axios.get(``)
            .then((result)=>{
                resolve(result);
            })
            .catch(err => {
                
            })
     });
     return promise;
}
export {Booking};