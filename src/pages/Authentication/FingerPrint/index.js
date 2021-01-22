import React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Gap} from '../../../utils';
import {IcArrowBackBlack} from '../../../assets/Icons/index';
import {IlFinger} from '../../../assets/Images/index';
import TouchID from 'react-native-touch-id';
import * as Keychain from 'react-native-keychain';
import {useDispatch} from 'react-redux';
import {AuthLogin} from '../../../redux/actions/Auth';

export default function FingerPrint({navigation}) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const dispatch = useDispatch();
  const onSuccess = async () => {
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
      setUsername(credentials.username);
      setPassword(credentials.password);
      
      // dispatch login here with email and password above
      let data = {username, password};
      return dispatch(AuthLogin(data));
    } else {
     
    }
  };
  const handleProcess = () => {
    const optionalConfigObject = {
      title: 'Login with FingerPrint', // Android
      imageColor: '#2395FF', // Android
      imageErrorColor: '#ff0000', // Android
      sensorDescription: 'Touch sensor', // Android
      sensorErrorDescription: 'Failed', // Android
      cancelText: 'Cancel', // Android
    };
    TouchID.authenticate('', optionalConfigObject)
      .then((success) => {
        Alert.alert('Authenticated Successfully');
        // console.warn(success, '<= success tu');
        onSuccess();
      })
      .catch((error) => {
        Alert.alert('Authentication Failed');
        // console.warn(error.message, '<= error tu');
      });
  };
  return (
    <>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
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
          Authenticate using app’s Touch ID instead of entering your password
        </Text>
        <Gap height={48} />
        <Image style={styles.logo} source={IlFinger} />
        <Gap height={48} />
        <View style={styles.paddingButton}>
          <TouchableOpacity
            style={styles.buttonProceced}
            onPress={() => handleProcess()}>
            <Text style={styles.textButtonProceced}>PROCECED</Text>
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
    fontSize: 16,
    color: '#2395FF',
    fontFamily: 'Poppins-SemiBold',
  },
  title: {
    alignSelf: 'center',
    color: '#000000',
    fontSize: 36,
    fontFamily: 'Poppins-SemiBold',
  },
  content: {
    paddingHorizontal: 77,
    fontSize: 14,
    textAlign: 'center',
    color: '#595959',
    fontFamily: 'Poppins-Regular',
  },
  paddingButton: {
    paddingHorizontal: 30,
  },
  buttonProceced: {
    height: 57,
    borderWidth: 1,
    borderColor: '#2395FF',
    borderRadius: 10,
  },
  textButtonProceced: {
    color: '#2395FF',
    fontSize: 18,
    marginTop: 10,
    alignSelf: 'center',
    paddingTop: 5,
    fontFamily: 'Poppins-Bold',
  },
});
