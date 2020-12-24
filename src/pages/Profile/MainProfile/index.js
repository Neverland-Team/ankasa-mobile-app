import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  Modal,
  TextInput,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Profile} from '../../../assets';
import {Gap, SOCKETURI, URI, URIIMAGE} from '../../../utils';
import {
  Logout,
  SettingProfile,
  StarReview,
  Btnback,
  Btnbackred,
} from '../../../assets';
import {BottomNav} from '../../../components';
import imagePicker from 'react-native-image-picker';
import {AuthLogout} from '../../../redux/actions/Auth';
import {GetProfile, ProfileUser} from '../../../redux/actions/Profile';
import {useDispatch, useSelector} from 'react-redux';
import Axios from 'axios';
import API from '../../../service';
import { showMessage } from 'react-native-flash-message';

export default function MainProfile({navigation}) {
  const dispatch = useDispatch();
  const {data} = useSelector((s) => s.DataProfile);
  const Auth = useSelector((s) => s.Auth);
  const [dataProfileUser, setDataProfileUser] = React.useState([]);
  const inputTypeCard = React.useRef();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [value, onChangeText] = React.useState('');
  const [typeCard, settypeCard] = React.useState('');
  const [fullName, setFullName] = React.useState('');
  const [address, setAddress] = React.useState('');


  React.useEffect(() => {
    dispatch(GetProfile(Auth.data))

    API.Profile(Auth.data).then( res => {
      setDataProfileUser(res)
    });
    
  }, [Auth.data]);

  const onLogout = () => {
    dispatch(AuthLogout());
  };

  const uploadImage = () => {
    imagePicker.showImagePicker({}, (response) => {
      if (response.didCancel || response.error) {
        showMessage({
          message: "oops, you don't chouse image!",
          type: "danger",
        });
      } else {
        const formData = new FormData();
        formData.append('photo', {
          type: response.type,
          uri: response.uri,
          name: response.fileName || response.uri.substr(response.uri.lastIndexOf("/") + 1)
        });

        const header = {
          headers: {
            Authorization: `${Auth.data}`,
            'Content-Type': 'multipart/form-data',
            Accept: 'application/json',
          },
        };
        Axios.post(`${URI}/users/profile/upload`, formData, header)
          .then((res) => {
            // jika berhasil
            dispatch(GetProfile(Auth.data))
            showMessage({
              message: "success,change image",
              type: "success",
            });
          })
          .catch((err) => {
            showMessage({
              message: "faile,change image!",
              type: "warning",
            });
          });
      }
    });
  };

  const addCard = () => {
    if (!value) {
      showMessage({
        message: "Field number card is required",
        type: "danger",
      });
      return false
    }
    if (!typeCard) {
      showMessage({
        message: "Field type card is required",
        type: "danger",
      });
      return false
    }

    showMessage({
      message: "Feature not yet available",
      type: "warning",
    });
  }

  const feature = () => {
    showMessage({
      message: "Feature not yet available",
      type: "warning",
    });
  }
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: '#ffffff'}}>
        <View style={styles.containerTop}>
          <View style={styles.positionView(true)}>
            <View style={styles.vProfile}>
              <Text style={styles.textProfile}>Profile</Text>
            </View>
            <View>
              <Text
                style={styles.textEdit}
                onPress={() => navigation.navigate('EditProfile')}>
                Edit
              </Text>
            </View>
          </View>
          <Gap height={40} />
          <View style={styles.vPhotoProfile}>
            <TouchableOpacity
              style={styles.vclippingImange}
              onPress={() => uploadImage()}>
              <Image
                source={{
                  uri: URIIMAGE+data?.data?.photo,
                }}
                style={styles.iProfile}
              />
            </TouchableOpacity>
          </View>
          {
            dataProfileUser?.iduser !== 16 && 
            <View style={{alignItems:'center',marginTop:10}}>
              <TouchableOpacity onPress={() => navigation.navigate('ChatRoom',{idRoom:`${dataProfileUser?.iduser}_16`,id:dataProfileUser?.iduser})}>
                  <View style={styles.cs}>
                    <Text style={styles.csText}>
                      Customer Service
                    </Text>
                  </View>
              </TouchableOpacity>
            </View>
          }
          
          <Gap height={10} />
          <View style={{alignItems: 'center'}}>
            <Text style={{fontFamily: 'Poppins-Bold', fontSize: 20}}>
              {data?.data?.username}
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Light',
                fontSize: 14,
                color: '#999',
              }}>
              {data?.data?.address}
            </Text>
          </View>
        </View>
        <View style={styles.positionView(false)}>
          <Text style={styles.textCards}>Cards</Text>
          <TouchableOpacity  onPress={() => setModalVisible(true) }>
            <Text style={styles.textAdd} >
              + Add
            </Text>
          </TouchableOpacity>
        </View>
        <Gap height={10} />
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{flexDirection: 'row'}}>
          <Gap width={20} />
          <View style={styles.vDesCard}>
            <Text style={styles.tCard}>4441 1235 5512 5551</Text>
            <View style={styles.positionView(true)}>
              <Text style={styles.tNameCard}>X Card</Text>
              <Text style={styles.tMoneyCard}>$ 1,442.2</Text>
            </View>
          </View>
          <Gap width={20} />
          <View style={styles.vDesCardBlack}>
            <Text style={styles.tCard}>2212 5122 5553 1235</Text>
            <View style={styles.positionView(true)}>
              <Text style={styles.tNameCard}>Z Card</Text>
              <Text style={styles.tMoneyCard}>$ 8,33</Text>
            </View>
          </View>
        </ScrollView>

        <Gap height={30} />
        <View style={styles.containerTop}>
          <TouchableOpacity style={styles.positionViewRow} onPress={feature}>
            <StarReview width={30} height={25} style={styles.startReview} />
            <Text style={styles.tReview} >
              My Review
            </Text>
            <Btnback width={30} height={25} style={styles.bReview} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.positionViewRow} onPress={feature}>
            <SettingProfile width={30} height={25} style={styles.startReview} />
            <Text style={styles.tReview} >
              Settings
            </Text>
            <Btnback width={30} height={25} style={styles.bReview} />
          </TouchableOpacity>
          <View style={styles.positionViewRowLogout}>
            <Logout width={30} height={25} style={styles.startReview} />
            <Text style={styles.tReviewLogout} onPress={onLogout}>
              Logout
            </Text>
            <Btnbackred width={30} height={25} style={styles.bReview} />
          </View>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Add Card</Text>
              <Text style={styles.numberCard}>Number Card</Text>
              <TextInput
                style={styles.nameCard}
                placeholder="Add to number card"
                onChangeText={(text) => onChangeText(text)}
                value={value}
                keyboardType="numeric"
                returnKeyType="next"
                onSubmitEditing={() => inputTypeCard.current.focus()}
              />

              <Text style={styles.numberCard}>Type Card</Text>
              <TextInput
                style={styles.nameCard}
                ref={inputTypeCard}
                placeholder="Add to type card"
                onChangeText={(text) => settypeCard(text)}
                value={typeCard}
                returnKeyType="send"
                onSubmitEditing={() => onSubmit()}
              />

              <TouchableOpacity
                style={styles.openButton}
                onPress={() => addCard()}>
                <Text style={styles.textStyle}>Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.openButton}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
      <BottomNav active="Profile" navigation={navigation} />
    </>
  );
}

const styles = StyleSheet.create({
  containerTop: {
    padding: 28,
  },
  positionView: (isCard) => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: isCard ? 0 : 20,
  }),
  image:{
    width:111,
    height:111,
    borderRadius:111/2
  },
  textProfile: {
    fontSize: 36,
    color: '#000000',
    fontFamily: 'Poppins-SemiBold',
  },
  textEdit: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#2395FF',
    paddingTop: 18,
  },
  vEdit: {
    flex: 1,
  },
  vProfile: {
    flex: 9,
  },
  vAdd: {
    flex: 1,
  },
  vCards: {
    flex: 6,
  },
  vPhotoProfile: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  vclippingImange: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 137/2,
    borderWidth: 5,
    borderColor: '#2395FF',
    height: 137,
    width: 137,
  },
  iProfile: {
    borderRadius: 111/2,
    width: 111,
    height: 111,
  },
  tName: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    color: '#000000',
    paddingTop: 15,
  },
  tNameDaerah: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    color: '#6B6B6B',
  },
  textCards: {
    paddingTop: 29,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#000000',
  },
  textAdd: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#2395FF',
    paddingTop: 29,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#2395FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom: 15,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  nameCard: {
    paddingLeft: 15,
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 15,
  },
  numberCard: {
    marginBottom: 15,
  },
  vDesCard: {
    backgroundColor: '#2395FF',
    borderRadius: 10,
    elevation: 5,
    width: 227,
    paddingVertical: 12,
    paddingLeft: 22,
  },
  vDesCardBlack: {
    backgroundColor: '#535353',
    borderRadius: 10,
    elevation: 5,
    width: 227,
    paddingVertical: 12,
    paddingLeft: 22,
  },
  tCard: {
    color: '#ffffff',
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    paddingTop: 12,
  },
  tNameCard: {
    color: '#AEFAFF',
    fontSize: 14,
    paddingBottom: 12,
    flex: 1,
  },
  tMoneyCard: {
    color: '#AEFAFF',
    fontSize: 14,
    paddingBottom: 12,
    flex: 1.4,
  },
  tReview: {
    flex: 1,
    paddingLeft: '15%',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#000000',
  },
  tReviewLogout: {
    flex: 1,
    paddingLeft: '15%',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: 'red',
  },
  positionViewRow: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  positionViewRowLogout: {
    flexDirection: 'row',
  },
  cs:{
    backgroundColor:'#2395FF',
    width:170,
    borderRadius:5,
    paddingVertical:5,
    alignItems:'center'
  },
  csText:{
    color:'#fff',
    fontFamily:'Poppins-SemiBold'
  }
  
});
