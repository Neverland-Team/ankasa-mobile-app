import React from 'react'
import {View,Text,Image} from 'react-native'
import { IlFlight,IcFlight,IlBookingDetail } from '../../assets'
import {Gap} from '../../utils'

export default function Home() {
    return (
        <>
            <View   style={{alignItems:'center',flex:1}}>
                <Image source={IlBookingDetail} style={{position:'absolute'}}/>
                <Gap height={40}/>
                <Text style={{fontSize:40,fontFamily:'Poppins-Bold'}}>My Booking</Text>
                <Gap height={40}/>
                <IcFlight/>
                <Gap height={40}/>
                <Image source={IlFlight} />
            
            </View >
        </>
    )
}
