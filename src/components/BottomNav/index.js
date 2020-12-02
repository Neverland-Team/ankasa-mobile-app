import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import { IcNavBooking, IcNavHome,IcNavUser ,IcNavBookingActive ,IcNavUserActive} from '../../assets'

export default function BottomNav({navigation,active}) {
    return (
        <View style={{backgroundColor:'#fff',elevation:12,flexDirection:'row',justifyContent:'space-evenly',paddingVertical:14}}>
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={() => navigation.navigate('MyBooking')}>
                { active == 'MyBooking' ? <IcNavBookingActive />  : <IcNavBooking /> }
                <Text style={{color:active == 'MyBooking' ? '#2395FF': '#979797',marginTop:6}}>My Booking</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={{justifyContent:'center',alignItems:'center'}} onPress={() => navigation.navigate('Home')}>
                <IcNavHome />
            </TouchableOpacity>
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={() => navigation.navigate('MainProfile')}>
                {active == 'Profile' ? <IcNavUserActive /> : <IcNavUser />}
                <Text style={{color:active == 'Profile'? '#2395FF': '#979797',marginTop:6}}>Profile</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})
