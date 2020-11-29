import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ArrowBackWhite, Garuda, Flight, QrFLat} from '../../assets';
import {Gap} from '../../utils';

export default function BookingDetail({navigation}) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.Container}>
      <Gap width={30} height={32} />
      <View style={styles.Main}>
        <ArrowBackWhite />
        <Text style={styles.tBooking}>Booking Pass</Text>
      </View>
      <View style={styles.backHome}>
        <ImageBackground
          source={require('../../assets/Images/ticketBack.png')}
          style={styles.imgWhite}>
          <View style={styles.Garuda}>
            <Garuda />
            <View style={styles.flight}>
              <Text style={styles.tIDN}>IDN</Text>
              <Flight style={styles.iFlight} width={30} height={25} />
              <Text style={styles.tIDN}>JPN</Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 27,
            }}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton} onPress={() => alert('Berhasil')}>
                Eticket issued
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#E6E6E6',
              marginHorizontal: 4,
              paddingTop: 20,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 20,
              justifyContent: 'space-between',
              paddingHorizontal: 37,
            }}>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.tCode}>Code</Text>
              <Text style={styles.tIndex}>AB-221</Text>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.tCode}>Class</Text>
              <Text style={styles.tIndex}>AB-221</Text>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.tCode}>Terminal</Text>
              <Text style={styles.tIndex}>AB-221</Text>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.tCode}>Gate</Text>
              <Text style={styles.tIndex}>AB-221</Text>
            </View>
          </View>
          <View style={{paddingTop: 20, paddingHorizontal: 37}}>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.tCode}>Departure</Text>
              <Text style={styles.tIndex}>Monday, 20 July 20 - 12.33</Text>
            </View>
            <View
              style={{
                paddingTop: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={QrFLat} />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: 70,
              }}>
              <Text>1234 5678 90AS 6543 21CV</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#2395FF',
  },
  Main: {
    flexDirection: 'row',
    paddingLeft: 30,
  },
  tBooking: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#ffffff',
    flex: 1,
    paddingLeft: 37,
    marginBottom: 35,
  },
  backHome: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  imgWhite: {
    width: '100%',
    marginBottom: 20,
  },
  Garuda: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  flight: {
    flexDirection: 'row',
    marginBottom: 7,
    paddingTop: 30,
  },
  tIDN: {
    fontSize: 26,
    fontFamily: 'Poppins-SemiBold',
    paddingTop: 18,
    color: '#000000',
  },
  iFlight: {
    marginTop: 25,
    marginHorizontal: 40,
  },
  button: {
    backgroundColor: '#4FCF4D',
    height: 36,
    borderRadius: 10,
    width: 154,
  },
  textButton: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    alignSelf: 'center',
    paddingTop: 5,
  },
  tCode: {
    color: '#A5A5A5',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  tIndex: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#595959',
  },
});
