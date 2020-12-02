import axios from 'axios';
import { URI } from '../utils';

const Booking = () =>
{
     const promise = new Promise((resolve, reject) => {
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZHVzZXIiOjIwLCJlbWFpbCI6ImF5dXB1dHJpMTIzNzhAZW1haS5jb20iLCJ1c2VybmFtZSI6ImF5dSIsInJvbGUiOjYsImlhdCI6MTYwNjgxOTk1NH0.ykC6g-rHsXJ-htduZohS8bwjapvQHDXBkzOL5vYHszQ';
            const headers = { headers: {'Authorization':token }}
            axios.get(`${URI}/users/booking`,headers)
            .then((result)=>{
                // console.log('hasil dari booking: ',result.data.data)
                resolve(result.data.data);
            })
            .catch(err => {
                
            })
     });
     return promise;
}
export {Booking};