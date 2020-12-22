import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';
import {
  Login,
  SignUp,
  ForgotPassword,
  FingerPrint,
  WelcomePage,
  Home,
  Notification,
  Chat,
  ChatRoom,
  AddCard,
  EditProfile,
  MainProfile,
  MyBooking,
  BookingDetail,
  SearchFlight,
  SearchResult,
  FlightDetail,
} from '../pages';
import {GetProfile} from '../redux/actions/Profile';
const Stack = createStackNavigator();

export default function Router({navigation}) {
  const {isLogin, data} = useSelector((state) => state.Auth);

  return (
    <Stack.Navigator initialRouteName={'WelcomePage'}>
      {isLogin && data ? (
        <>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Notification"
            component={Notification}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Chat"
            component={Chat}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ChatRoom"
            component={ChatRoom}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AddCard"
            component={AddCard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MainProfile"
            component={MainProfile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SearchFlight"
            component={SearchFlight}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SearchResult"
            component={SearchResult}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="FlightDetail"
            component={FlightDetail}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MyBooking"
            component={MyBooking}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="BookingDetail"
            component={BookingDetail}
            options={{headerShown: false}}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="FingerPrint"
            component={FingerPrint}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="WelcomePage"
            component={WelcomePage}
            options={{headerShown: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
