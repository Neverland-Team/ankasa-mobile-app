import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IcNavBooking, IcNavHome,IcNavUser } from '../../assets'

export default function BottomNav() {
    return (
        <View style={{backgroundColor:'#fff',elevation:12,flexDirection:'row',justifyContent:'space-evenly',paddingVertical:14}}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <IcNavBooking />
                <Text style={{color:'#979797',marginTop:6}}>My Booking</Text>
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <IcNavHome />
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <IcNavUser />
                <Text style={{color:'#979797',marginTop:6}}>Profile</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
