import { combineReducers } from 'redux'
import Auth from './Auth'
import {DataProfile} from './Profile'


const reducers = combineReducers({
    Auth,
    DataProfile
})

export default reducers