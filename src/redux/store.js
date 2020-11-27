import AsyncStorage from '@react-native-async-storage/async-storage'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
  timeout:null,
  debug:false
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk, logger))
  let persistor = persistStore(store)
  return { store, persistor }
}