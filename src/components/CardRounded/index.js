import React from 'react'
import { StyleSheet, Text, View ,Image } from 'react-native'

export default function CardRounded() {
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <Image source={{uri:'https://i.stack.imgur.com/N4TSy.jpg'}} style={styles.image} />
            </View>
            <Text style={styles.text}>PARIS</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        justifyContent:'center',
        alignItems:'center'
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
