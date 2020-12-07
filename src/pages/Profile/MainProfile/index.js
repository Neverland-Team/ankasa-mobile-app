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
import {Gap, SOCKETURI, URI} from '../../../utils';
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
import {ProfileUser} from '../../../redux/actions/Profile';
import {useDispatch, useSelector} from 'react-redux';
import Axios from 'axios';
import API from '../../../service';

export default function MainProfile({navigation}) {
  const dispatch = useDispatch();
  const {data} = useSelector((s) => s.DataProfile);
  const Auth = useSelector((s) => s.Auth);
  const [dataProfileUser, setDataProfileUser] = React.useState();

  React.useEffect(() => {
    API.Profile(Auth.data).then((res) => setDataProfileUser(res));
  }, [Auth.data, dataProfileUser]);

  // console.log(`http://192.168.100.9:8000/Images/${data?.data?.photo}`);

  // console.log(data, 'adjhsajhdg')
  const onLogout = () => {
    dispatch(AuthLogout());
  };

  const uploadImage = () => {
    imagePicker.showImagePicker({}, (response) => {
      console.log('hasil dari picker: ', response);
      if (response.didCancel || response.error) {
        // ketika image tidak di upload
        alert("oops, you don't chouse image!");
      } else {
        const formData = new FormData();
        formData.append('image', {
          uri: response.uri,
          name: response.fileName,
          type: response.type,
        });

        const header = {
          headers: {
            Authorization: `${token}`,
            'Content-Type': 'multipart/form-data',
            Accept: 'application/json',
          },
        };
        Axios.post(`${URI}/profile/upload`, formData, header)
          .then((res) => {
            // jika berhasil
            console.log('berhasil upload foto');
          })
          .catch((err) => {
            // jika gagal upload image dari API/BackEnd
            console.log('gagal upload foto');
          });
      }
    });
  };

  const inputTypeCard = React.useRef();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [value, onChangeText] = React.useState('');
  const [typeCard, settypeCard] = React.useState('');
  const [fullName, setFullName] = React.useState('');
  const [address, setAddress] = React.useState('');

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
                  uri: `https://png.pngtree.com/png-vector/20191103/ourlarge/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_1947775.jpg`,
                }}
                style={styles.iProfile}
              />
            </TouchableOpacity>
          </View>
          <Gap height={10} />
          <View style={{alignItems: 'center'}}>
            <Text style={{fontFamily: 'Poppins-Bold', fontSize: 20}}>
              {dataProfileUser?.username}
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Light',
                fontSize: 14,
                color: '#999',
              }}>
              {dataProfileUser?.address}
            </Text>
          </View>
        </View>
        <View style={styles.positionView(false)}>
          <Text style={styles.textCards}>Cards</Text>
          <Text
            style={styles.textAdd}
            onPress={() => {
              setModalVisible(true);
            }}>
            + Add
          </Text>
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
          <View style={styles.vDesCard}>
            <Text style={styles.tCard}>4441 1235 5512 5551</Text>
            <View style={styles.positionView(true)}>
              <Text style={styles.tNameCard}>X Card</Text>
              <Text style={styles.tMoneyCard}>$ 1,442.2</Text>
            </View>
          </View>
          <Gap width={20} />
          <View style={styles.vDesCard}>
            <Text style={styles.tCard}>4441 1235 5512 5551</Text>
            <View style={styles.positionView(true)}>
              <Text style={styles.tNameCard}>X Card</Text>
              <Text style={styles.tMoneyCard}>$ 1,442.2</Text>
            </View>
          </View>
          <Gap width={20} />
          <View style={styles.vDesCard}>
            <Text style={styles.tCard}>4441 1235 5512 5551</Text>
            <View style={styles.positionView(true)}>
              <Text style={styles.tNameCard}>X Card</Text>
              <Text style={styles.tMoneyCard}>$ 1,442.2</Text>
            </View>
          </View>
          <Gap width={20} />
          <View style={styles.vDesCard}>
            <Text style={styles.tCard}>4441 1235 5512 5551</Text>
            <View style={styles.positionView(true)}>
              <Text style={styles.tNameCard}>X Card</Text>
              <Text style={styles.tMoneyCard}>$ 1,442.2</Text>
            </View>
          </View>
        </ScrollView>

        <Gap height={30} />
        <View style={styles.containerTop}>
          <View style={styles.positionViewRow}>
            <StarReview width={30} height={25} style={styles.startReview} />
            <Text style={styles.tReview} onPress={() => alert('Berhasil')}>
              My Review
            </Text>
            <Btnback width={30} height={25} style={styles.bReview} />
          </View>
          <View style={styles.positionViewRow}>
            <SettingProfile width={30} height={25} style={styles.startReview} />
            <Text style={styles.tReview} onPress={() => alert('Berhasil')}>
              Settings
            </Text>
            <Btnback width={30} height={25} style={styles.bReview} />
          </View>
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

              <TouchableHighlight
                style={styles.openButton}
                onPress={() => alert('Berhasil')}>
                <Text style={styles.textStyle}>Submit</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.openButton}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Close</Text>
              </TouchableHighlight>
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
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#2395FF',
    height: 150,
    width: 150,
  },
  iProfile: {
    borderRadius: 30,
    width: 100,
    height: 100,
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
});
