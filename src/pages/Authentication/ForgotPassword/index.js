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
import {IcArrowBackBlack} from '../../../assets/Icons/index';

export default function ForgotPassword({navigation}) {
  return (
    <>
      <ScrollView style={styles.scroll} showVerticalScrollIndicator={false}>
        <Gap height={32} />
        <View style={styles.backbutton}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <IcArrowBackBlack />
          </TouchableOpacity>
        </View>
        <Gap height={72} />
        <Text style={styles.title}>Forgot Password</Text>
        <Gap height={43} />
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
        <Gap height={27} />
        <View style={styles.paddingButton}>
          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.textButton}
              //   onPress={() => navigation.navigate('Login')}
            >
              Send
            </Text>
          </TouchableOpacity>
        </View>
        <Gap height={18} />
        <Text style={styles.forgot}>You’ll get message soon on your email</Text>
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
});
