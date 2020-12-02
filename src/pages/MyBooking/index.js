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

export default function MyBooking({navigation}) {
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    API.Booking().then((res) => {
      setBooking(res);
    });
    console.log('hasil dari booking: ', booking);
  }, []);

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
            <View key={index} style={styles.BookingLogoo}>
              <ImageBackground
                source={require('../../assets/Images/ticketBackground.png')}
                style={styles.image}>
                <Text style={styles.dateBooking}>Monday, {res.createdAt}</Text>
                <View style={styles.flight}>
                  <Text style={styles.tIDN}>{res.from_country}</Text>
                  <Flight style={styles.iFlight} width={60} height={25} />
                  <Text style={styles.tIDNN}>{res.to_country}</Text>
                </View>
                <Text style={styles.tMaskapai}>{res.name_airlines}</Text>
                <Text style={styles.tBorder} />
                <View style={styles.MyLogo}>
                  <Text style={styles.tStatus}>Status</Text>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Waiting for payment</Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
          );
        })}

        {/* <View style={styles.BookingLogoo}>
        <ImageBackground
          source={require('../../assets/Images/ticketBackground.png')}
          style={styles.image}>
          <Text style={styles.dateBooking}>Monday, 20 July 2020 - 12.33</Text>
          <View style={styles.flight}>
            <Text style={styles.tIDN}>{booking.from_country}</Text>
            <Flight style={styles.iFlight} width={60} height={25} />
            <Text style={styles.tIDNN}>JPN</Text>
          </View>
          <Text style={styles.tMaskapai}>Garuda Indonesia, AB-221</Text>
          <Text style={styles.tBorder} />
          <View style={styles.MyLogo}>
            <Text style={styles.tStatus}>Status</Text>
            <TouchableOpacity style={styles.button}>
              <Text
                style={styles.textButton}
                onPress={() => alert('WelcomePage')}>
                Waiting for payment
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View> */}

        {/* <View style={styles.BookingLogoo}> */}
        {/* <ImageBackground
          source={require('../../assets/Images/ticketBackground.png')}
          style={styles.image}>
          <Text style={styles.dateBooking}>Monday, 20 July 2020 - 12.33</Text>
          <View style={styles.flight}>
            <Text style={styles.tIDN}>IDN</Text>
            <Flight style={styles.iFlight} width={60} height={25} />
            <Text style={styles.tIDNN}>JPN</Text>
          </View>
          <Text style={styles.tMaskapai}>Garuda Indonesia, AB-221</Text>
          <Text style={styles.tBorder} />
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
              onPress={() => navigation.navigate('Noification')}
            />
          </View>
        </ImageBackground> */}
        {/* </View> */}
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
  button: {
    backgroundColor: '#FF7F23',
    height: 36,
    width: 184,
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
