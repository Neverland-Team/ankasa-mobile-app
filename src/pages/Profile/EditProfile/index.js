import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Gap} from '../../../utils';
import {NavSearchResult} from '../../../assets';
import {ScrollView} from 'react-native-gesture-handler';
import {ArrowBackBlack} from '../../../assets';

export default function EditProfile({navigation}) {
  const inputEmail = React.useRef('');
  const inputUsername = React.useRef('');
  const inputCity = React.useRef('');
  const inputAddress = React.useRef('');
  const inputPostCode = React.useRef('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [city, setCity] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [postcode, setPostCode] = React.useState('');
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:"#ffffff",}}>
      <View style={styles.containerTop}>
        <Gap height={40} />
        <View style={styles.vLogo}>
          <ArrowBackBlack onPress={() => navigation.navigate('MainProfile')} />
          <Image source={NavSearchResult} style={styles.iLogo} />
          <Text style={styles.tLogo}>Ankasa</Text>
        </View>
        <Gap height={40} />
        <Text style={styles.tProfile}>Contact</Text>
        <Gap height={40} />
        <Text style={styles.tEmail}>Email</Text>
        <TextInput
          style={styles.nameCard}
          placeholder="Add to email..."
          onChangeText={(text) => setEmail(text)}
          value={email}
          returnKeyType="next"
          onSubmitEditing={() => inputEmail.current.focus()}
        />
        <Gap height={40} />
        <Text style={styles.tEmail}>Phone Number</Text>
        <TextInput
          style={styles.nameCard}
          ref={inputEmail}
          placeholder="Add to phone number..."
          onChangeText={(text) => setPhone(text)}
          value={phone}
          keyboardType="numeric"
          returnKeyType="next"
          onSubmitEditing={() => inputUsername.current.focus()}
        />
        <Gap height={40} />
        <Text style={styles.tProfile}>Biodata</Text>
        <Gap height={40} />
        <Text style={styles.tEmail}>Username</Text>
        <TextInput
          style={styles.nameCard}
          ref={inputUsername}
          placeholder="Add to username..."
          onChangeText={(text) => setUsername(text)}
          value={username}
          returnKeyType="next"
          onSubmitEditing={() => inputCity.current.focus()}
        />
        <Gap height={40} />
        <Text style={styles.tEmail}>City</Text>
        <TextInput
          style={styles.nameCard}
          ref={inputCity}
          placeholder="Add to city..."
          onChangeText={(text) => setCity(text)}
          value={city}
          returnKeyType="next"
          onSubmitEditing={() => inputAddress.current.focus()}
        />
        <Gap height={40} />
        <Text style={styles.tEmail}>Address</Text>
        <TextInput
          style={styles.nameCard}
          ref={inputAddress}
          placeholder="Add to address..."
          onChangeText={(text) => setAddress(text)}
          value={address}
          returnKeyType="next"
          onSubmitEditing={() => inputPostCode.current.focus()}
        />
        <Gap height={40} />
        <Text style={styles.tEmail}>Post Code</Text>
        <TextInput
          style={styles.nameCard}
          ref={inputPostCode}
          placeholder="Add to post code..."
          onChangeText={(text) => setPostCode(text)}
          value={postcode}
          returnKeyType="send"
          onSubmitEditing={() => alert('berhasil')}
        />
        <Gap height={20} />
        <View style={{marginBottom: 30, alignItems: 'flex-end'}}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton} onPress={() => alert('Berhasil')}>
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2395FF',
    height: 57,
    borderRadius: 10,
    width:150,
  },
  textButton: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 10,
    alignSelf: 'center',
    paddingTop: 5,
  },
  containerTop: {
    paddingHorizontal: 28,
  },
  vLogo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tLogo: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    color: '#414141',
  },
  tProfile: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#000000',
  },
  iLogo: {
    width: 55,
    height: 40,
  },
  tEmail: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#9B96AB',
  },
  nameCard: {
    height: 50,
    borderBottomColor: 'rgba(210, 194, 255, 0.68)',
    borderBottomWidth: 2,
    marginBottom: 15,
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Poppins-Regular',
  },
});
