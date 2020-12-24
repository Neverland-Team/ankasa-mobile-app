import React, { useState,useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Gap, SOCKETURI} from '../../../utils';
import {IcArrowBackWhite, IcSendChat} from '../../../assets/Icons/index';
import { io } from 'socket.io-client'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showMessage } from 'react-native-flash-message';
export default function ChatRoom({navigation,route}) {
 const  {idRoom,id} = route.params;
 const [chat,setChat] = useState([])
 const [messages,setMessages] = useState('')
 const socket = io(SOCKETURI);
 useEffect(() => {
  // if(socket == null) return;
  socket.emit('initial-chat-room',idRoom);
  socket.on('get-chat',(chat) => {
        setChat(chat)
  });
  return () => {
    socket.off('get-chat')
  }
},[])
 const sendChat = () =>
 {
    if (!messages) {
        showMessage({
          message: "Message is required",
          type: "danger",
        });
        return false
    }
    AsyncStorage.getItem('user').then(res => {
      const profile = JSON.parse(res)
      socket.emit('send-chat',{id:profile.iduser,message:messages,data_id:idRoom,name:profile.username});
      socket.emit('initial-chat-room',idRoom);
      socket.emit('initial-chat',id);
    })
    setMessages('')
 }
  return (
    <>
      <View style={styles.bar}>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <IcArrowBackWhite />
        </TouchableOpacity>
        <Gap width={30} />
        <Text style={styles.textBar}>Costumer Services</Text>
      </View>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <Gap height={40} />

        {
          chat.map((res,index) => {

            if (res.id_user == id) {
                return(
                  <View key={index} style={styles.row}>
                    <View style={styles.bubbleChat}>
                      <Text style={styles.textChat}>
                        {res.chat}
                      </Text>
                    </View>
                  </View>
                )
            }else{
              return(
                    <View key={index} style={styles.row}>
                      <View style={styles.bubbleChatUser}>
                        <Text style={styles.textChat}>{res.chat}</Text>
                      </View>
                    </View> 
              )
            }
           
          })
        }

      </ScrollView>

      <View style={styles.chat}>
        <View style={styles.chatBox}>
          <TextInput
            style={styles.textInput}
            placeholder="Write here ..."
            returnKeyType="send"
            value={messages}
            onChangeText={(text) => setMessages(text)}
          />
        </View>
        <Gap width={10} />
        <TouchableOpacity style={styles.sendButton} onPress={() => sendChat()} >
          <IcSendChat />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#FFF',
  },
  date: {
    alignSelf: 'center',
    color: '#7D8797',
    fontSize: 14,
  },
  dateCs: {
    color: '#7D8797',
    fontSize: 11,
    alignSelf: 'flex-start',
  },
  dateUser: {
    color: '#7D8797',
    fontSize: 11,
    alignSelf: 'flex-end',
  },
  bar: {
    paddingHorizontal: 30,
    paddingVertical: 25,
    flexDirection: 'row',
    height: 80,
    backgroundColor: '#2395FF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textBar: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
  },
  row: {
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  bubbleChat: {
    backgroundColor: '#EDFCFD',
    padding: 13,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    alignSelf: 'flex-start',
  },
  bubbleChatUser: {
    backgroundColor: '#0BCAD4',
    padding: 13,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    alignSelf: 'flex-end',
  },
  textChat: {
    color: '#000000',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  chat: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: '#FFF',
    flexDirection: 'row',
  },
  chatBox: {
    flex: 1,
    paddingHorizontal: 5,
    borderRadius: 10,
    backgroundColor: '#EDEEF0',
  },
  textInput: {
    fontSize: 16,
    fontWeight: '600',
    color: '#112340',
  },
  sendButton: {
    backgroundColor: '#2395FF',
    borderRadius: 10,
    width: 50,
    paddingTop: 5,
    paddingLeft: 5,
    alignItems: 'center',
  },
});
