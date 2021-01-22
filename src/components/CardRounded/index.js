import React from 'react'
import { StyleSheet, Text, View ,Image,TouchableOpacity } from 'react-native'
import { URIIMAGE } from '../../utils'

export default function CardRounded({country,onPress,photo}) {
    return (
        <TouchableOpacity style={styles.wrapper} onPress={() => onPress()}>
            <View style={styles.container}>
                <Image source={{uri:URIIMAGE+photo}} style={styles.image} />
            </View>
            <Text style={styles.text}>{country}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        justifyContent:'center',
        alignItems:'center',
        marginRight:20
    },
    container:{
        justifyContent:'center',
        alignItems:'center',
        width:63,
        height:63,
        borderRadius:63/2,
        borderWidth:3,
        borderColor:'rgba(0, 183, 223, 1)'
    },
    image:{
        width:51,
        height:51,
        borderRadius:51/2
    },
    text:{
        color:'#000000',
        fontSize:14,
        marginTop:6,
        fontFamily:'Poppins-Regular'
    }
})
