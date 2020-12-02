import React from 'react'
import { StyleSheet, View ,TextInput} from 'react-native'
import { IcSearch } from '../../assets'

export default function Search({text,onChangeText}) {
    return (
        <View>
            <TextInput placeholder={text} style={styles.input}  onChangeText={(keyword) => onChangeText(keyword) }/>
            <View style={styles.wrapper}>
                <IcSearch/>
            </View>
         </View>
    )
}

const styles = StyleSheet.create({
    input:{
        paddingHorizontal:55,
        paddingVertical:16,
        backgroundColor:'#F5F5F5',
        borderRadius:10,
        fontSize:14,
        color:'#6B6B6B',
        fontFamily:'Poppins-Regular'
    },
    wrapper:{
        position:'absolute',
        top:18,
        left:20
    }

})
