import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import { IcNavBooking, IcNavHome,IcNavUser } from '../../assets'

export default function BottomNav({navigation}) {
    return (
        <View style={{backgroundColor:'#fff',elevation:12,flexDirection:'row',justifyContent:'space-evenly',paddingVertical:14}}>
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={() => navigation.navigate('MyBooking')}>
                <IcNavBooking />
                <Text style={{color:'#979797',marginTop:6}}>My Booking</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={{justifyContent:'center',alignItems:'center'}} onPress={() => navigation.navigate('Home')}>
                <IcNavHome />
            </TouchableOpacity>
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={() => navigation.navigate('MainProfile')}>
                <IcNavUser />
                <Text style={{color:'#979797',marginTop:6}}>Profile</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})
