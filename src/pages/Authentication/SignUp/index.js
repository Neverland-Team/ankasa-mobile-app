import React, { useState } from 'react';
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
import API from '../../../service';
import { showMessage } from 'react-native-flash-message';

export default function SignUp({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [check, setCheck] = useState(false);
  const [show, setShow] = useState(true);

  const signUp = () => {
    if (!username) {
      showMessage({
        message: "Username is required!",
        type: "danger",
      });
      return false;
    } 
    if (!email) {
      showMessage({
        message: "Email is required!",
        type: "danger",
      });
      return false;
    } 
   
    if (password.length < 6) {
      showMessage({
        message: "Password min length 6 character!",
        type: "danger",
      });
      return false;
    } 
    if (!check) {
      showMessage({
        message: "Please press the checkbox!",
        type: "danger",
      });
      return false;
    } 
    API.SignUp({username: username, email:email, password: password})
      .then((res) => {
        showMessage({
          message: "Your account have been created.Please login",
          type: "success",
        });
        setUsername('')
        setPassword('')
        setEmail('')
        setCheck(false)
      })
      .catch((err) => {
        showMessage({
          message: "Faile create account",
          type: "danger",
        });
      });
  };

  const guest = () => 
  {
    showMessage({
      message: "Feature not yet available",
      type: "warning",
    });
  }

  return (
    <>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <Gap height={32} />
        <View style={styles.flex}>
          <TouchableOpacity onPress={() => navigation.navigate('WelcomePage')}>
            <IcArrowBackBlack />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.guest} onPress={() => guest()}>
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
              placeholder="Username"
              autoCapitalize={'none'}
              returnKeyType="next"
              value={username}
              onChangeText={(text) => setUsername(text)}
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
              value={email}
              onChangeText={(text) => setEmail(text)}
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
              secureTextEntry={show}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity onPress={() => show ? setShow(false) : setShow(true)} style={styles.eyePassword}>
               <IcEyePassword />
            </TouchableOpacity>
          </View>
        </View>
        <Gap height={27} />
        <View style={styles.paddingButton}>
          <TouchableOpacity style={styles.button} onPress={() => signUp()}>
            <Text style={styles.textButton}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <Gap height={27} />
        <View style={styles.checkBox}>
          <CheckBox disabled={false} value={check}  onChange={() =>  check ? setCheck(false) : setCheck(true)}/>
          <Text style={styles.accept}>Accepted terms and conditions</Text>
        </View>
        <Gap height={44} />
        <IcDivider style={styles.divider} />
        <Gap height={15} />
        <Text style={styles.already}>Already have an account?</Text>
        <Gap height={24} />
        <View style={styles.paddingButton}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={styles.buttonSignIn}>
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
    width:'100%'
  },
  eyePassword: {
    position:'absolute',
    right:0,
    top:17    
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
