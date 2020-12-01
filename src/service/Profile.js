import axios from 'axios';

const Profile = (data) =>
{
     const promise = new Promise((resolve, reject) => {
            axios.get(``)
            .then((result) =>{
                resolve(result);
            },(err) => {
                reject(err);
            });
     });
     return promise;
}

const Notifications = (data) =>
{
     const promise = new Promise((resolve, reject) => {
            axios.get(``)
            .then((result) =>{
                resolve(result);
            },(err) => {
                reject(err);
            });
     });
     return promise;
}



export {Profile,Notifications};