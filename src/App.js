import React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import SplashScreen from 'react-native-splash-screen';
import FlashMessage from "react-native-flash-message";
const App = () => {
   useEffect(() => {
       SplashScreen.hide();
   }, []);
  const { store, persistor } = configureStore();
  return (
    <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> 
        <NavigationContainer>
            <Router/>
        </NavigationContainer>
      </PersistGate>
    </Provider>
    <FlashMessage position="top" />
    </>
  );
};


export default App;


