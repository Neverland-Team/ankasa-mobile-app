import React from 'react'
import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import { IcBtnBackHome,IlHomeSlider } from '../../assets'
import { Gap, URIIMAGE } from '../../utils'

export default function CardDestination({country,city,photo,idCity,onPress}) {
    return (
        <>
        <TouchableOpacity onPress={() => onPress()}>
            <View style={styles.container}>
                <View style={styles.wrapper}>
                        <Text style={styles.count}>{idCity}</Text>
                        <Text style={styles.airlines}> Airlines</Text>
                </View>
                <Gap height={137}/>
                <View style={styles.wrapperDestination}>
                    <View>
                        <Text style={styles.city}>{'Medan - '+city},</Text>
                        <Text style={styles.country}>{country}</Text>
                    </View>
                    <View style={styles.back}>
                        <IcBtnBackHome />
                    </View>
                </View>
            </View>
            <Image style={styles.image} source={{uri:URIIMAGE+photo}} />
        </TouchableOpacity>
        <Gap width={20}/>
     </>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'rgba(0,0,0,0.2)',
        width:206,
        height:262,
        position:'absolute',
        zIndex:99,
        borderRadius:20,
        paddingTop:19,paddingRight:24,
        paddingBottom:26,
        paddingLeft:26,
    },
    wrapper:{
        paddingVertical:5,
        width:88,
        backgroundColor:'rgba(255, 255, 255, 0.41)',
        borderRadius:33,flexDirection:'row',
        justifyContent:'center'
        
    },
    count:{
        color:'white',
        fontFamily:'Poppins-Bold',
        fontSize:12
    },
    airlines:{
        color:'white',
        fontSize:12,
        fontFamily:'Poppins-Light'
    },
    wrapperDestination:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    city:{
        color:'white',
        fontSize:14,
        fontFamily:'Poppins-SemiBold'
    },
    country:{
        color:'white',
        fontSize:24,
        fontFamily:'Poppins-SemiBold'
    },
    back:{
        backgroundColor:'rgba(255, 255, 255, 0.17)',
        width:29,
        height:29,
        borderRadius:29/2,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:206,
        height:262,
        borderRadius:20
    }

})
