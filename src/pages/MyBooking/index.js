import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Mail, Bell, Flight} from '../../assets';
import {Gap} from '../../utils';
import {BottomNav} from '../../components';
import API from '../../service';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { showMessage } from 'react-native-flash-message';

export default function MyBooking({navigation}) {
  const [booking, setBooking] = useState([]);
  const {data} = useSelector((s) => s.Auth);
  useEffect(() => {
    API.Booking(data).then((res) => {
      setBooking(res);
    });
  }, []);

  const bookingDetail = (from,to_city,airlines,level,date,status) =>
  {
    navigation.navigate('BookingDetail',{from:from,to_city:to_city,airlines:airlines,level:level,date:date,status:status})
  }
  const feature = () => 
  {
    showMessage({
      message: "Feature not yet available,development stage!",
      type: "warning",
    });
  }


  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: '#ffffff'}}>
        <Gap height={28} />
        <View style={styles.BookingLogo}>
          <Text style={styles.tBooking}>My Booking</Text>
          <View style={styles.MyLogo}>
            <Mail
              style={styles.iMail}
              width={35}
              height={30}
              onPress={() => navigation.navigate('Chat')}
            />
            <Bell
              style={styles.iBell}
              width={35}
              height={30}
              onPress={() => navigation.navigate('Notification')}
            />
          </View>
        </View>

        {booking.map((res, index) => {
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.6}
              onPress={() => bookingDetail(res.user_city,res.to_city,res.name_airlines,res.title,moment(res.createdAt).format('dddd, DD MMMM YYYY - hh:mm'),res.paymentStatus)}>
              <View key={index} style={styles.BookingLogoo}>

                <ImageBackground
                  source={require('../../assets/Images/ticketBackground.png')}
                  style={styles.image}>
                  <Text style={styles.dateBooking}>
                    {moment(res.createdAt).format('dddd, DD MMMM YYYY - hh:mm')}
                  </Text>
                  <View style={styles.flight}>
                    <Text style={styles.tIDN}>{res.user_city}</Text>
                    <Flight style={styles.iFlight} width={60} height={25} />
                    <Text style={styles.tIDNN}>{res.to_city}</Text>
                  </View>
                  <Text style={styles.tMaskapai}>{res.name_airlines}</Text>
                  <Text style={styles.tBorder} />
                  <View style={styles.MyLogo}>
                    <Text style={styles.tStatus}>Status</Text>
                    {
                      res.paymentStatus == 0 ? (
                        <TouchableOpacity style={styles.buttonWarning} onPress={() => feature()}>
                          <Text style={styles.textButton}>Waiting for payment</Text>
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity style={styles.buttonSuccess} onPress={() => feature()}>
                          <Text style={styles.textButton}>Eticket issued</Text>
                        </TouchableOpacity>
                      )
                    }
                    
                  </View>
                </ImageBackground>

              </View>
            </TouchableOpacity>
          );
        })}
        
      </ScrollView>
      <BottomNav navigation={navigation} active="MyBooking" />
    </>
  );
}

const styles = StyleSheet.create({
  BookingLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 28,
  },
  BookingLogoo: {
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  MyLogo: {
    flexDirection: 'row',
  },
  tBooking: {
    fontSize: 36,
    fontFamily: 'Poppins-SemiBold',
    color: '#000000',
    flex: 1,
  },
  iMail: {
    marginTop: 15,
    marginRight: 20,
  },
  iBell: {
    marginTop: 15,
  },
  image: {
    width: '100%',
    marginTop: 31,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  dateBooking: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    paddingLeft: 21,
    paddingTop: 18,
    color: '#000000',
  },
  flight: {
    flexDirection: 'row',
    marginBottom: 7,
  },
  tIDN: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    paddingLeft: 21,
    paddingTop: 18,
    color: '#000000',
  },
  tIDNN: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    paddingTop: 18,
    color: '#000000',
  },
  iFlight: {
    marginTop: 25,
    paddingHorizontal: 20,
  },
  tMaskapai: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#979797',
    paddingLeft: 21,
  },
  tBorder: {
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
  },
  tStatus: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: '#7A7A7A',
    paddingLeft: 21,
    paddingTop: 20,
    flex: 1,
  },
  buttonSuccess: {
    backgroundColor: '#4FCF4D',
    height: 36,
    paddingHorizontal:18,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 50,
    marginRight: 20,
  },
  buttonWarning: {
    backgroundColor: '#FF7F23',
    height: 36,
    paddingHorizontal:18,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 50,
    marginRight: 20,
  },
  textButton: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    paddingTop: 7,
    textAlign: 'center',
  },
  buttonIssued: {
    backgroundColor: '#4FCF4D',
    height: 36,
    width: 184,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 50,
    marginRight: 20,
  },
});
