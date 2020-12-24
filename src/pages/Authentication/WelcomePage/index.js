import React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Gap} from '../../../utils';
import {IlFlight} from '../../../assets/Images/index';
import {IcDotSlider} from '../../../assets/Icons/index';

export default function WelcomePage({navigation}) {
  return (
    <>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <Gap height={35} />
        <Image style={styles.logo} source={IlFlight} />
        <Text style={styles.title}>Get Started</Text>
        <Text style={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </Text>
        <Gap height={32} />
        <IcDotSlider style={styles.dotSlider}/> 
        <Gap height={51} />
        <View style={styles.paddingButton}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.textButton} >
              Create my Account
            </Text>
          </TouchableOpacity>
        </View>
        <Gap height={16} />
        <View style={styles.paddingButton}>
          <TouchableOpacity style={styles.buttonSignIn} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.textButtonSignIn}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
        <Gap height={100} />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#FFF',
  },
  logo: {
    alignSelf: 'center',
  },
  title: {
    alignSelf: 'center',
    color: '#000000',
    fontSize: 36,
    fontFamily: 'Poppins-SemiBold',
  },
  dotSlider: {
    alignSelf: 'center',
  },
  paddingButton: {
    paddingHorizontal: 30,
  },
  button: {
    backgroundColor: '#2395FF',
    height: 57,
    borderRadius: 10,
  },
  textButton: {
    color: '#fff',
    fontSize: 18,
    marginTop: 10,
    alignSelf: 'center',
    paddingTop: 5,
    fontFamily: 'Poppins-Bold',
  },
  content: {
    paddingHorizontal: 65,
    fontSize: 14,
    textAlign: 'center',
    color: '#595959',
    fontFamily: 'Poppins-Regular',
  },
  buttonSignIn: {
    height: 57,
    borderWidth: 1,
    borderColor: '#2395FF',
    borderRadius: 10,
  },
  textButtonSignIn: {
    color: '#2395FF',
    fontSize: 18,
    marginTop: 10,
    alignSelf: 'center',
    paddingTop: 5,
    fontFamily: 'Poppins-Bold',
  },
});
