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
import {IcArrowBackBlack} from '../../../assets/Icons/index';
import {IlFinger} from '../../../assets/Images/index';

export default function FingerPrint({navigation}) {
  return (
    <>
      <ScrollView style={styles.scroll} showVerticalScrollIndicator={false}>
        <Gap height={32} />
        <View style={styles.flex}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <IcArrowBackBlack />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.regular}
              onPress={() => navigation.navigate('Login')}>
              Regular Login
            </Text>
          </TouchableOpacity>
        </View>
        <Gap height={94} />
        <Text style={styles.title}>Touch ID</Text>
        <Gap height={19} />
        <Text style={styles.content}>
          Authenticate using app’s Touch ID instead of tentering your password
        </Text>
        <Gap height={48} />
        <Image style={styles.logo} source={IlFinger} />
        <Gap height={48} />
        <View style={styles.paddingButton}>
          <TouchableOpacity style={styles.buttonSignIn}>
            <Text
              style={styles.textButtonSignIn}
              // onPress={() => navigation.navigate('')}
            >
              PROCECED
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
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  regular: {
    fontWeight: '600',
    fontSize: 16,
    color: '#2395FF',
  },
  title: {
    alignSelf: 'center',
    color: '#000000',
    fontSize: 36,
    fontWeight: '600',
  },
  content: {
    paddingHorizontal: 77,
    fontWeight: '400',
    fontSize: 14,
    textAlign: 'center',
    color: '#595959',
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
    fontWeight: '700',
    marginTop: 10,
    alignSelf: 'center',
    paddingTop: 5,
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
    fontWeight: '700',
    marginTop: 10,
    alignSelf: 'center',
    paddingTop: 5,
  },
});
