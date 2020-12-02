import axios from 'axios';
import { URI } from '../utils';

const Home = (data) =>
{
     const promise = new Promise((resolve, reject) => {
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZHVzZXIiOjIwLCJlbWFpbCI6ImF5dXB1dHJpMTIzNzhAZW1haS5jb20iLCJ1c2VybmFtZSI6ImF5dSIsInJvbGUiOjYsImlhdCI6MTYwNjgxOTk1NH0.ykC6g-rHsXJ-htduZohS8bwjapvQHDXBkzOL5vYHszQ';
            // AsyncStorage.getItem('token').then(token =>{
                const headers = { headers: {'Authorization':token }}
                axios.get(`${URI}/users/city`,headers)
                .then((result) =>{
                    resolve(result.data);
                })
                .catch(err => {
                    console.log('error dari service home: ',err)
                })
            // })

     });
     return promise;
}
export {Home};