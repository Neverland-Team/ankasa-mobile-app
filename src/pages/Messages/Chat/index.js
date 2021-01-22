import React,{useEffect, useState} from 'react';
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
import {Gap,SOCKETURI} from '../../../utils';
import { io } from 'socket.io-client'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Chat({navigation}) {
  const [unread, setUnread] = React.useState(false);
  const [receivers, setReceivers] = React.useState([]);
  const [id,setId] = useState(0)
  const socket = io(SOCKETURI);

  useEffect(() => {
    // if(socket == null) return;
    AsyncStorage.getItem('user').then(res => {
      const profile = JSON.parse(res)
      setId(profile.iduser)
      socket.emit('initial-chat',profile.iduser);
      socket.on('get-messages',(chat) => {
            setReceivers(chat)
      });
    })
    return () => {
      socket.off('get-messages')
    }
  },[])


  const renderItem = ({item, index}) => {
    return (
      <>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.card(item.unread)}
          onPress={() => navigation.navigate('ChatRoom',{idRoom:item.id_room,id:id})}>
          <Image source={IlChat} />
          <View style={[styles.titleWrapper, {flex: 0.9}]}>
            <Text style={styles.titleNotif(item.unread)}>{item.fullName}</Text>
            <Text style={styles.subtitleNotif(item.unread)}>
              {item.last_chat}
            </Text>
          </View>
          <View style={[styles.trailing, {flex: 0.25}]}>
            <Text style={styles.dateNotif}>{item.date}</Text>
            {item.unread ? <IcUnread /> : <IcRead />}
          </View>
        </TouchableOpacity>
        {/* <IcDivider /> */}
        <View style={{borderBottomWidth:1,borderBottomColor:'#E6E6E6'}}>
        </View>
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
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
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
    paddingHorizontal: 0,
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
