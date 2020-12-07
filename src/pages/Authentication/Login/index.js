import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {Gap} from '../../../utils';
import {
  IcArrowBackBlack,
  IcEyePassword,
  IcGoogle,
  IcFacebook,
  IcFinger,
  IcDivider,
} from '../../../assets/Icons/index';
import API from '../../../service';
import {AuthLogin} from '../../../redux/actions/Auth';
import {useDispatch, useSelector} from 'react-redux';
import * as Keychain from 'react-native-keychain';

export default function Login({navigation}) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();
  const Auth = useSelector((s) => s.Auth);
  const onSubmit = async () => {
    if (username.length < 1 || password.length < 1) {
      return ToastAndroid.show('Enter your username/password', 2000);
    }
    try {
      // Retrieve the credentials
      const credentials = await Keychain.getGenericPassword();
      if (credentials) {
        console.log(
          'Credentials successfully loaded for user ' + credentials.username,
        );
        if (
          credentials.username === username &&
          credentials.password === password
        ) {
          console.log('sama semuaaa');
          console.log(credentials.username);
          console.log(credentials.password);
          let data = {username, password};
          return dispatch(AuthLogin(data));
        }
        if (
          credentials.username !== username ||
          credentials.password !== password
        ) {
          await Keychain.resetGenericPassword();
          console.log('ga samaa semua');
          console.log(credentials.username);
          console.log(credentials.password);
          await Keychain.setGenericPassword(username, password);
          let data = {username, password};
          return dispatch(AuthLogin(data));
        }
      } else {
        console.log(`Belum ada keychain`);
        await Keychain.setGenericPassword(username, password);
        let data = {username, password};
        return dispatch(AuthLogin(data));
      }
    } catch (error) {
      console.log("Keychain couldn't be accessed!", error);
    }
  };

  return (
    <>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <Gap height={32} />
        <View style={styles.backbutton}>
          <TouchableOpacity onPress={() => navigation.navigate('WelcomePage')}>
            <IcArrowBackBlack />
          </TouchableOpacity>
        </View>
        <Gap height={72} />
        <Text style={styles.title}>Login</Text>
        <Gap height={43} />
        <View style={styles.email}>
          <View style={styles.textBox}>
            <TextInput
              style={styles.textInput}
              placeholder="Username"
              autoCapitalize={'none'}
              returnKeyType="next"
              value={username}
              onChangeText={(text) => setUsername(text)}
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
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <IcEyePassword style={styles.eyePassword} />
          </View>
        </View>
        <Gap height={27} />
        <View style={styles.paddingButton}>
          <TouchableOpacity style={styles.button} onPress={onSubmit}>
            <Text style={styles.textButton}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <Gap height={18} />
        <Text style={styles.forgot}>Did you forgot your password?</Text>
        <Gap height={7} />
        <TouchableOpacity>
          <Text
            style={styles.resetClick}
            onPress={() => navigation.navigate('ForgotPassword')}>
            Tap here for reset
          </Text>
        </TouchableOpacity>
        <Gap height={40} />
        <IcDivider style={styles.divider} />
        <Gap height={15} />
        <Text style={styles.signWith}>or sign in with</Text>
        <Gap height={16} />
        <View style={styles.sign}>
          <TouchableOpacity style={styles.buttonLink}>
            <IcGoogle style={styles.logo} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonLink}>
            <IcFacebook style={styles.logo} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonLink}
            onPress={() => navigation.navigate('FingerPrint')}>
            <IcFinger style={styles.logo} />
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
  backbutton: {
    paddingHorizontal: 30,
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
  forgot: {
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
    color: '#595959',
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
  signWith: {
    fontWeight: '400',
    fontSize: 14,
    textAlign: 'center',
    color: '#595959',
  },
  sign: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    justifyContent: 'space-between',
  },
  buttonLink: {
    height: 52,
    borderColor: '#2395FF',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 35,
  },
});
