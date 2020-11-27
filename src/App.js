import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
const App = () => {
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
    </>
  );
};


export default App;


