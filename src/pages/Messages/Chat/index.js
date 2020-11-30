import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {
  IcArrowBackBlack,
  IcDivider,
  IlChat,
  IcRead,
  IcUnread,
} from '../../../assets';
import {CardChat, Search} from '../../../components';
import {Gap} from '../../../utils';

export default function Chat({navigation}) {
  const [unread, setUnread] = React.useState(false);
  //dummy notif
  const receivers = [
    {
      key: 0,
      fullname: 'Soham Henry',
      lastChat: 'Me: Bro, just fuck off',
      date: '8:30',
      unread: false,
    },
    {
      key: 1,
      fullname: 'Theresa Webb',
      lastChat: 'Why did you do that?',
      date: '15:20',
      unread: true,
    },
    {
      key: 2,
      fullname: 'Milky Choco',
      lastChat: 'Me: Yes, of course come, ... ',
      date: '7:20',
      unread: false,
    },
    {
      key: 3,
      fullname: 'Calvin Flores',
      lastChat: 'Hi, bro! Come to my house!',
      date: '15:13',
      unread: true,
    },
    {
      key: 4,
      fullname: 'Brother',
      lastChat: 'Ok, Good Bye!',
      date: 'yesterday',
      unread: false,
    },
  ];

  //   const avatar = ;

  const renderItem = ({item, index}) => {
    return (
      <>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.card(item.unread)}
          onPress={() => Alert.alert('masok')}>
          <Image source={IlChat} />
          <View style={[styles.titleWrapper, {flex: 0.9}]}>
            <Text style={styles.titleNotif(item.unread)}>{item.fullname}</Text>
            <Text style={styles.subtitleNotif(item.unread)}>
              {item.lastChat}
            </Text>
          </View>
          <View style={[styles.trailing, {flex: 0.25}]}>
            <Text style={styles.dateNotif}>{item.date}</Text>
            {item.unread ? <IcUnread /> : <IcRead />}
          </View>
        </TouchableOpacity>
        <IcDivider />
      </>
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
          <Text style={styles.clearBtn}>Filter</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Chat</Text>
      <View
        style={{
          backgroundColor: '#fff',
          paddingHorizontal: 20,
          paddingVertical: 15,
        }}>
        <Search text="Type your messages..." />
      </View>
      <FlatList
        data={receivers}
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
  card: (unread) => ({
    flexDirection: 'row',
    // paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 9,
    borderRadius: 12,
  }),
  titleWrapper: {
    justifyContent: 'space-around',
    marginLeft: 10,
    // backgroundColor: '#aaa',
  },
  trailing: {
    // alignSelf: 'flex-end',
    justifyContent: 'space-around',
  },
  titleNotif: (unread) => ({
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#000',
  }),
  subtitleNotif: (unread) => ({
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: unread ? '#2395FF' : '#6B6B6B',
  }),
  dateNotif: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
  },
});
