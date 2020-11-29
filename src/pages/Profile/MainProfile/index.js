import React from 'react';
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
import {Gap} from '../../../utils';
import {Logout, SettingProfile, StarReview, Btnback, Btnbackred} from '../../../assets';

export default function MainProfile({navigation}) {
  const inputTypeCard = React.useRef();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [value, onChangeText] = React.useState('');
  const [typeCard, settypeCard] = React.useState('');
  return (
      <>
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:"#ffffff",}}>
      <View style={styles.containerTop}>
        <View style={styles.positionView}>
          <View style={styles.vProfile}>
            <Text style={styles.textProfile}>Profile</Text>
          </View>
          <View>
            <Text style={styles.textEdit} onPress={() => navigation.navigate('EditProfile')}>
              Edit
            </Text>
          </View>
        </View>
        <Gap height={40} />
        <View style={styles.vPhotoProfile}>
          <TouchableOpacity style={styles.vclippingImange}>
            <Image source={Profile} style={styles.iProfile} />
          </TouchableOpacity>
        </View>
        <Text style={styles.tName}>Mike Kowalski</Text>
        <Text style={styles.tNameDaerah}>Medan, Indoenesia</Text>
        <View style={styles.positionView}>
          <View style={styles.vCards}>
            <Text style={styles.textCards}>Cards</Text>
          </View>
          <View>
            <Text
              style={styles.textAdd}
              onPress={() => {
                setModalVisible(true);
              }}>
              + Add
            </Text>
          </View>
        </View>
        </View>
        <Gap height={10} />
        <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{flexDirection: "row"}}>
        <Gap width={20} />
        <View style={styles.vDesCard}>
            <Text style={styles.tCard}>4441 1235 5512 5551</Text>
                <View style={styles.positionView}>
                 <Text style={styles.tNameCard}>X Card</Text>
                 <Text style={styles.tMoneyCard}>$ 1,442.2</Text>
            </View>
        </View>
        <Gap width={20} />
        <View style={styles.vDesCard}>
            <Text style={styles.tCard}>4441 1235 5512 5551</Text>
                <View style={styles.positionView}>
                 <Text style={styles.tNameCard}>X Card</Text>
                 <Text style={styles.tMoneyCard}>$ 1,442.2</Text>
            </View>
        </View>
        <Gap width={20} />
        <View style={styles.vDesCard}>
            <Text style={styles.tCard}>4441 1235 5512 5551</Text>
                <View style={styles.positionView}>
                 <Text style={styles.tNameCard}>X Card</Text>
                 <Text style={styles.tMoneyCard}>$ 1,442.2</Text>
            </View>
        </View>
        <Gap width={20} />
        <View style={styles.vDesCard}>
            <Text style={styles.tCard}>4441 1235 5512 5551</Text>
                <View style={styles.positionView}>
                 <Text style={styles.tNameCard}>X Card</Text>
                 <Text style={styles.tMoneyCard}>$ 1,442.2</Text>
            </View>
        </View>
        <Gap width={20} />
        <View style={styles.vDesCard}>
            <Text style={styles.tCard}>4441 1235 5512 5551</Text>
                <View style={styles.positionView}>
                 <Text style={styles.tNameCard}>X Card</Text>
                 <Text style={styles.tMoneyCard}>$ 1,442.2</Text>
            </View>
        </View>
        </ScrollView>

        <Gap height={30} />
        <View style={styles.containerTop}>
        <View style={styles.positionViewRow}>
            <StarReview width={30} height={25} style={styles.startReview} />
            <Text style={styles.tReview} onPress={() => alert('Berhasil')}>My Review</Text>
            <Btnback width={30} height={25} style={styles.bReview}  />
        </View>
        <View style={styles.positionViewRow}>
            <SettingProfile width={30} height={25} style={styles.startReview} />
            <Text style={styles.tReview} onPress={() => alert('Berhasil')}>Settings</Text>
            <Btnback width={30} height={25} style={styles.bReview}  />
        </View>
        <View style={styles.positionViewRow}>
            <Logout width={30} height={25} style={styles.startReview} />
            <Text style={styles.tReviewLogout} onPress={() => alert('Berhasil')}>Logout</Text>
            <Btnbackred width={30} height={25} style={styles.bReview}  />
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
                onSubmitEditing={() => inputTypeCard.current.focus()} />

                <Text style={styles.numberCard}>Type Card</Text>
                <TextInput
                style={styles.nameCard}
                ref={inputTypeCard}
                placeholder="Add to type card"
                onChangeText={(text) => settypeCard(text)}
                value={typeCard}
                returnKeyType="send"
                onSubmitEditing={() => onSubmit()} />

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
    </>
  );
};

const styles = StyleSheet.create({
  containerTop: {
    padding: 28,
  },
  positionView: {
    flexDirection: 'row',
  },
  textProfile: {
    fontSize: 36,
    color: '#000000',
    fontFamily: "Poppins-SemiBold",
  },
  textEdit: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
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
    height: 110,
  },
  tName: {
    fontSize: 20,
    fontFamily: "Poppins-SemiBold",
    textAlign: 'center',
    color: '#000000',
    paddingTop: 15,
  },
  tNameDaerah: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    textAlign: 'center',
    color: '#6B6B6B',
  },
  textCards: {
    paddingTop: 29,
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: '#000000',
  },
  textAdd: {
    fontFamily: "Poppins-SemiBold",
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
    marginBottom:15,
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
    paddingLeft:15,
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom:15,
  },
  numberCard: {
    marginBottom:15
  },
  vDesCard: {
      backgroundColor: "#2395FF",
      borderRadius: 10,
      elevation: 5,
      width: 227,
      paddingVertical: 12,
      paddingLeft: 22,
  },
  tCard: {
      color: "#ffffff",
      fontSize: 14,
      fontFamily: "Poppins-SemiBold",
      paddingTop: 12,
  },
  tNameCard: {
      color: "#AEFAFF",
      fontSize: 14,
      paddingBottom:12,
      flex: 1,
  },
  tMoneyCard: {
    color: "#AEFAFF",
    fontSize: 14,
    paddingBottom:12,
    flex: 1.4,
  },
tReview: {
    flex: 1,
    paddingLeft:"15%",
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: '#000000',
},
tReviewLogout: {
    flex: 1,
    paddingLeft:"15%",
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: 'red',
},
positionViewRow: {
    flexDirection: 'row',
    marginBottom: 30,
  },
});

