import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Button,
  ScrollView,
} from 'react-native';
import {
  IcArrowBackWhite,
  IlNavSearchFlight,
  IcFullScreen,
  IcSearchFlightArrowBlue,
  IcOneWay,
  IcRoundTrip,
  IcArrowRightBlue,
  IcSearchArrowWhite,
} from '../../assets';
import {Gap} from '../../utils';
import Modal from 'react-native-modal';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {WheelPicker} from 'react-native-wheel-picker-android';
import RadioForm from 'react-native-simple-radio-button';
import moment from 'moment';
import API from '../../service';
import {useSelector} from 'react-redux';

export default function SearchFlight({navigation, route}) {
  const {idCity} = route.params;
  const [active, setActive] = React.useState(true);
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [isModalVisibleAdult, setModalVisibleAdult] = React.useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(0);
  const [selectedItemAdult, setSelectedItemAdult] = React.useState(0);
  const [dates, setDates] = React.useState(new Date());
  const [child, setChild] = React.useState('');
  const [adult, setAdult] = React.useState('');
  const [dest, setDest] = React.useState();
  // const {idCity} = route.params;
  const {data} = useSelector((s) => s.Auth);
  // const idCity = 12;

  const radioItems = [
    {label: 'Economy', value: 0},
    {label: 'Business', value: 1},
    {label: 'First Class', value: 2},
  ];
  const [classType, setClassType] = React.useState(radioItems[0].label);

  const wheelPickerDataChild = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ];
  const wheelPickerDataAdult = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ];

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleModalAdult = () => {
    setModalVisibleAdult(!isModalVisibleAdult);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    // console.warn('A date has been picked: ', date);
    setDates(date);
    hideDatePicker();
  };
  const onItemSelected = (selectedItem) => {
    setSelectedItem(selectedItem);
    setChild(wheelPickerDataChild[selectedItem]);
  };
  const onItemSelectedAdult = (selectedItemAdult) => {
    setSelectedItemAdult(selectedItemAdult);
    setAdult(wheelPickerDataAdult[selectedItemAdult]);
  };

  const onClassTypeChanged = (value) => {
    setClassType(radioItems[value].label);
    // console.log(value);
    // console.log(child);
    // console.log(adult);
  };

  React.useEffect(() => {
    // params kasih => idCity
    API.SearchFlightService(idCity, data)
      .then((res) => {
        setDest(res);
      })
      .catch((err) => console.warn(err.message));
  }, []);
  return (
    <>
      <StatusBar
        animated={true}
        translucent
        backgroundColor="transparent"
        // barStyle="light-content"
      />
      <View style={{backgroundColor: '#ffffff', flex: 1}}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <IcArrowBackWhite />
              </TouchableOpacity>
              <TouchableOpacity
              // onPress={() => navigation.navigate('')}
              >
                <IcFullScreen />
              </TouchableOpacity>
            </View>
            <Gap height={55} />
            <Text style={styles.title}>Destinations</Text>
            <View style={styles.cardDestination}>
              <View>
                <Text style={styles.lightText}>From</Text>
                <Text style={styles.city}>Medan</Text>
                <Text style={styles.lightText}>Indonesia</Text>
              </View>
              <View>
                <IcSearchFlightArrowBlue />
              </View>
              <View>
                <Text style={styles.lightText}>To</Text>
                <Text style={styles.city}>{dest?.name_city}</Text>
                <Text style={styles.lightText}>{dest?.name_country}</Text>
              </View>
            </View>
            <Gap height={40} />
            <View style={styles.toggleWrapper}>
              <TouchableOpacity
                style={styles.toggle(active)}
                onPress={() => Alert.alert('hasdj')}>
                <IcOneWay />
                <Text style={styles.btnTitle(active)}>One way</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.toggle(!active)}
                onPress={() => setActive(!active)}>
                <IcRoundTrip />
                <Text style={styles.btnTitle(!active)}>Round trip</Text>
              </TouchableOpacity>
            </View>
            <Gap height={40} />
            <Text style={[styles.btnTitle(false), {marginHorizontal: 10}]}>
              Departure
            </Text>
            <Gap height={11} />
            {/* dsad */}
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>
          <Image style={styles.image} source={IlNavSearchFlight} />
          <Gap height={170} />
          <TouchableOpacity
            style={styles.datePicker}
            activeOpacity={0.7}
            onPress={() => showDatePicker()}>
            <Text style={[styles.btnTitle(false), {color: '#000'}]}>
              {moment(dates).format('dddd, DD MMMM YYYY')}
            </Text>
            <IcArrowRightBlue />
          </TouchableOpacity>
          <Gap height={10} />
          <Text style={[styles.btnTitle(false), {marginHorizontal: 20}]}>
            How many person?
          </Text>
          <Gap height={10} />
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.persons}
              activeOpacity={0.7}
              onPress={() => toggleModal()}>
              <Text style={[styles.btnTitle(false), {color: '#000'}]}>
                {`${child} Child`}
              </Text>
              <IcArrowRightBlue />
            </TouchableOpacity>
            <Modal
              style={styles.modal}
              isVisible={isModalVisible}
              // coverScreen={false}
              customBackdrop={
                <View
                  style={{flex: 1, backgroundColor: '#000', opacity: 0.7}}
                />
              }>
              <View style={{flex: 1}}>
                <WheelPicker
                  selectedItem={selectedItem}
                  data={wheelPickerDataChild}
                  onItemSelected={onItemSelected}
                />

                <Button title="Apply" onPress={toggleModal} />
              </View>
            </Modal>
            <TouchableOpacity
              style={styles.persons}
              activeOpacity={0.7}
              onPress={() => toggleModalAdult()}>
              <Text style={[styles.btnTitle(false), {color: '#000'}]}>
                {`${adult} Adult`}
              </Text>
              <IcArrowRightBlue />
            </TouchableOpacity>
            <Modal
              style={styles.modal}
              isVisible={isModalVisibleAdult}
              // coverScreen={false}
              customBackdrop={
                <View
                  style={{flex: 1, backgroundColor: '#000', opacity: 0.7}}
                />
              }>
              <View style={{flex: 1}}>
                <WheelPicker
                  selectedItem={selectedItemAdult}
                  data={wheelPickerDataAdult}
                  onItemSelected={onItemSelectedAdult}
                />

                <Button title="Apply" onPress={toggleModalAdult} />
              </View>
            </Modal>
          </View>
          <Gap height={10} />
          <Text style={[styles.btnTitle(false), {marginHorizontal: 20}]}>
            Which class do you want?
          </Text>
          <Gap height={10} />
          <RadioForm
            style={{justifyContent: 'space-between', marginHorizontal: 15}}
            radio_props={radioItems}
            initial={0}
            formHorizontal={true}
            labelHorizontal={true}
            buttonColor={'#2196f3'}
            animation={true}
            onPress={(value) => onClassTypeChanged(value)}
          />
          <Gap height={30} />
        </ScrollView>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() =>
            navigation.navigate('SearchResult', {
              date: dates,
              idCity: idCity,
              child: child,
              adult: adult,
              classFlight: classType,
            })
          }>
          <Text style={styles.textButton}>SEARCH FLIGHT</Text>
          <IcSearchArrowWhite />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: Dimensions.get('window').width,
    height: 262,
    position: 'absolute',
    zIndex: 99,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  image: {
    width: Dimensions.get('window').width,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 25,
    fontFamily: 'Poppins-Bold',
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: '#FFF',
  },
  paddingButton: {
    paddingHorizontal: 20,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: '#2395FF',
    height: 57,
    borderRadius: 10,
    elevation: 8,
    shadowColor: '#2395FF',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  textButton: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
  cardDestination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
    width: Dimensions.get('window').width - 40,
    height: 97,
    borderRadius: 20,
    marginHorizontal: 10,
    marginTop: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  lightText: {
    fontFamily: 'Poppins-Light',
    fontSize: 12,
  },
  city: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
  },
  toggleWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 40,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  toggle: (active) => ({
    padding: 15,
    alignItems: 'center',
    backgroundColor: active ? '#2395FF' : '#F0F0F0',
    flex: 0.5,
    height: 44,
    borderRadius: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  }),
  btnTitle: (active) => ({
    color: active ? '#ffffff' : '#595959',
    fontFamily: 'Poppins-SemiBold',
  }),
  datePicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 15,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 15,
  },
  persons: {
    flexDirection: 'row',
    flex: 0.5,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 15,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 15,
  },
  modal: {
    height: 200,
    width: Dimensions.get('window').width - 40,
    backgroundColor: '#fff',
    borderRadius: 15,
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: Dimensions.get('window').height / 3,
    paddingVertical: 30,
  },
});
