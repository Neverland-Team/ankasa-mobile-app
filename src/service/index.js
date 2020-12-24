import {Login, SignUp, ForgotPassword} from './Authentication';
import {Home,HomeDetail} from './Home';
import {Profile, EditProfile, Notifications} from './Profile';
import {Booking} from './Booking';
import {
  SearchFlightService,
  SearchResult,
  FlightDetail,
  GetProfileOnFlight,
  Midtrans
} from './Payment';

const API = {
  Login,
  SignUp,
  ForgotPassword,
  Home,
  HomeDetail,
  Profile,
  EditProfile,
  Notifications,
  Booking,
  SearchFlightService,
  SearchResult,
  FlightDetail,
  GetProfileOnFlight,
  Midtrans
};

export default API;
