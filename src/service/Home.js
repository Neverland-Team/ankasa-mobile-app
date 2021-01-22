import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { URI } from '../utils';

const Home = (data) =>
{
     const promise = new Promise((resolve, reject) => {
            AsyncStorage.getItem('token').then(token =>{
                const headers = { headers: {'Authorization':token }}
                axios.get(`${URI}/users/city`,headers)
                .then((result) =>{
                    resolve(result.data);
                })
                .catch(err => {
                })
            })

     });
     return promise;
}
const HomeDetail = (query) =>
{
     const promise = new Promise((resolve, reject) => {
            AsyncStorage.getItem('token').then(token =>{
                const headers = { headers: {'Authorization':token }}
                axios.get(`${URI}/users/city/search/${query}`,headers)
                .then((result) =>{
                    resolve(result.data);
                })
                .catch(err => {
                    console.log('error dari service home: ',err)
                })
            })

     });
     return promise;
}
export {Home,HomeDetail};