import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { showMessage } from 'react-native-flash-message';
import {ScrollView} from 'react-native-gesture-handler';
import {ArrowBackWhite, Garuda, Flight, QrFLat, IlAirAsia, IlLionAir, IlGaruda} from '../../assets';
import {Gap} from '../../utils';

export default function BookingDetail({navigation,route}) {
  const {from,to_city,level,date,airlines,status} = route.params;
 

  const flight = () => 
  {
    switch (airlines) {
      case 'Air Asia':
        return IlAirAsia
      case 'Garuda Indonesia':
         return IlGaruda
      default:
        return  IlLionAir
    }
  }

  const feature = () => 
  {
    showMessage({
      message: "Feature not yet available,development stage!",
      type: "warning",
    });
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.Container}>
      <Gap width={30} height={32} />
      <View style={styles.Main}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
           <ArrowBackWhite />
        </TouchableOpacity>
        <Text style={styles.tBooking}>Booking Pass</Text>
      </View>
      <View style={styles.backHome}>
        <ImageBackground
          source={require('../../assets/Images/ticketBack.png')}
          style={styles.imgWhite}>
          <View style={styles.Garuda}>

            <Image source={flight()} />

            <View style={styles.flight}>
              <Text style={styles.tIDN}>{from}</Text>
              <Flight style={styles.iFlight} width={30} height={25} />
              <Text style={styles.tIDN}>{to_city}</Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 27,
            }}>
            {
              status == 0 ? (
                <TouchableOpacity style={styles.buttonPayment}>    
                  <Text style={styles.textButton} onPress={() => feature()}>
                    Waiting For Payment
                  </Text>
                </TouchableOpacity>
              ):(
                <TouchableOpacity style={styles.button}>    
                <Text style={styles.textButton} onPress={() => feature()}>
                  Eticket issued
                </Text>
              </TouchableOpacity>
              )
            }
            
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
              <Text style={styles.tIndex}>{level}</Text>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.tCode}>Terminal</Text>
              <Text style={styles.tIndex}>A</Text>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.tCode}>Gate</Text>
              <Text style={styles.tIndex}>221</Text>
            </View>
          </View>
          <View style={{paddingTop: 20, paddingHorizontal: 37}}>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.tCode}>Departure</Text>
              <Text style={styles.tIndex}>{date}</Text>
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
  buttonPayment: {
    backgroundColor: '#FF7F23',
    height: 36,
    borderRadius: 10,
    paddingHorizontal:28
  },
  textButton: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    alignSelf: 'center',
    paddingTop: 5,
    textAlign:'center'
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
