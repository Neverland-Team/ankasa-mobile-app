import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {IcArrowBackBlack} from '../../assets';
import {CardNotification} from '../../components';

export default function Notification({navigation}) {
  //dummy notif
  const notifData = [
    {
      key: 0,
      title: 'Congratulations',
      subtitle: 'Your Payment has been validated, Have a nice Trip Dear!',
      date: '5h ago',
      unread: true,
    },
    {
      key: 0,
      title: 'Ticket Booked',
      subtitle:
        'Ticket has been booked, please complete the Payment as soon as possible and hope you have a great trip',
      date: '5h ago',
      unread: true,
    },
    {
      key: 0,
      title: 'Continue Payment',
      subtitle: 'Payment Confirmed we will send your Eticket soon!',
      date: '5h ago',
      unread: false,
    },
    {
      key: 0,
      title: 'Ticket Booked',
      subtitle:
        'Ticket has been booked, please complete the Payment as soon as possible and hope you have a great trip',
      date: '5h ago',
      unread: false,
    },
    {
      key: 0,
      title: 'Maintenance',
      subtitle:
        'We apologize that we need to maintain our services for a while, Just be patient and it will work soon!',
      date: '5h ago',
      unread: false,
    },
    {
      key: 0,
      title: 'Congratulations',
      subtitle: 'Your Payment has been validated, Have a nice Trip Dear!',
      date: '5h ago',
      unread: false,
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <CardNotification
        unread={item.unread}
        title={item.title}
        subtitle={item.subtitle}
        date={item.date}
      />
    );
  };

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#ffffff"
        barStyle="dark-content"
      />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <IcArrowBackBlack />
        </TouchableOpacity>
        <TouchableOpacity
        // onPress={() => navigation.navigate('')}
        >
          <Text style={styles.clearBtn}>Clear</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Notifications</Text>
      <FlatList
        data={notifData}
        backgroundColor="#fff"
        style={{paddingHorizontal: 20}}
        showsVerticalScrollIndicator={false}
        // ListHeaderComponent={header}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {paddingHorizontal: 20, backgroundColor: '#fff'},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  clearBtn: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#2395FF',
    marginRight: 20,
  },
  title: {
    fontSize: 36,
    fontFamily: 'Poppins-Bold',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
});
