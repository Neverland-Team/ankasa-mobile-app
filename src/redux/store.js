import AsyncStorage from '@react-native-async-storage/async-storage'
import { applyMiddleware, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(thunk))
  let persistor = persistStore(store)
  return { store, persistor }
}