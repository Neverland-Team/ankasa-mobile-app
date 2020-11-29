import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Gap} from '../../../utils';
import {
  IcArrowBackBlack,
  IcEyePassword,
  IcDivider,
} from '../../../assets/Icons/index';
import CheckBox from '@react-native-community/checkbox';

export default function SignUp({navigation}) {
  return (
    <>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <Gap height={32} />
        <View style={styles.flex}>
          <TouchableOpacity onPress={() => navigation.navigate('WelcomePage')}>
            <IcArrowBackBlack />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.guest}
              // onPress={() => navigation.navigate('')}
            >
              Continous as Guest
            </Text>
          </TouchableOpacity>
        </View>
        <Gap height={72} />
        <Text style={styles.title}>Register</Text>
        <Gap height={43} />
        <View style={styles.email}>
          <View style={styles.textBox}>
            <TextInput
              style={styles.textInput}
              placeholder="Full Name"
              autoCapitalize={'none'}
              returnKeyType="next"
              // value={username}
              // onChangeText={(text) => setEmail(text)}
            />
          </View>
        </View>
        <Gap height={36} />
        <View style={styles.email}>
          <View style={styles.textBox}>
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              autoCapitalize={'none'}
              returnKeyType="next"
              // value={username}
              // onChangeText={(text) => setEmail(text)}
            />
          </View>
        </View>
        <Gap height={36} />
        <View style={styles.password}>
          <View style={styles.textBoxPassword}>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              autoCapitalize={'none'}
              returnKeyType="send"
              secureTextEntry={true}
              // value={password}
              // onChangeText={(text) => setPassword(text)}
            />
            <IcEyePassword style={styles.eyePassword} />
          </View>
        </View>
        <Gap height={27} />
        <View style={styles.paddingButton}>
          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.textButton}
              // onPress={() => navigation.navigate('WelcomePage')}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <Gap height={27} />
        <View style={styles.checkBox}>
          <CheckBox disabled={false} />
          <Text style={styles.accept}>Accepted terms and conditions</Text>
        </View>
        <Gap height={44} />
        <IcDivider style={styles.divider} />
        <Gap height={15} />
        <Text style={styles.already}>Already have an account?</Text>
        <Gap height={24} />
        <View style={styles.paddingButton}>
          <TouchableOpacity
            style={styles.buttonSignIn}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.textButtonSignIn}>Sign In</Text>
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
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  guest: {
    fontSize: 16,
    color: '#2395FF',
    fontFamily: 'Poppins-SemiBold',
  },
  title: {
    color: '#000000',
    fontSize: 36,
    paddingHorizontal: 30,
    fontFamily: 'Poppins-SemiBold',
  },
  email: {
    paddingHorizontal: 30,
  },
  textBox: {
    borderBottomWidth: 1,
    borderColor: 'rgba(210, 194, 255, 0.68)',
    paddingHorizontal: 5,
  },
  password: {
    paddingHorizontal: 30,
  },
  textBoxPassword: {
    borderBottomWidth: 1,
    borderColor: 'rgba(210, 194, 255, 0.68)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  textInput: {
    fontSize: 16,
    fontWeight: '600',
    color: '#9B96AB',
  },
  eyePassword: {
    marginVertical: 10,
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
  checkBox: {
    paddingHorizontal: 30,
    flexDirection: 'row',
  },
  accept: {
    fontWeight: '400',
    fontSize: 16,
    color: '#595959',
    paddingLeft: 10,
    paddingTop: 5,
  },
  resetClick: {
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
    color: '#2395FF',
  },
  divider: {
    alignSelf: 'center',
  },
  already: {
    fontWeight: '400',
    fontSize: 14,
    textAlign: 'center',
    color: '#595959',
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