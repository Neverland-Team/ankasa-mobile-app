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
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore....',
      date: '5h ago',
      unread: true,
    },
    {
      key: 0,
      title: 'Ticket Booked',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore....',
      date: '5h ago',
      unread: true,
    },
    {
      key: 0,
      title: 'Continue Payment',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
      date: '5h ago',
      unread: false,
    },
    {
      key: 0,
      title: 'Ticket Booked',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
      date: '5h ago',
      unread: false,
    },
    {
      key: 0,
      title: 'Maintenance',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
      date: '5h ago',
      unread: false,
    },
    {
      key: 0,
      title: 'Congratulations',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
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
    marginTop: 20,
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
