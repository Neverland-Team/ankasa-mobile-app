import React from 'react'
import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import { IcBtnBackHome,IlHomeSlider } from '../../assets'
import { Gap, URIIMAGE } from '../../utils'

export default function CardDestination3D({country,city,photo,idCity,onPress}) {
    return (
        <TouchableOpacity style={styles.wrapperCard} onPress={() => onPress()}>
                 <View style={styles.layer1}></View>
                 <View style={styles.layer2}></View>
                 <View>
                     <View style={styles.container}>
                         <View style={styles.badge}>
                                 <Text style={styles.badgeCount}>{idCity}</Text>
                                 <Text style={styles.badgeText}> Airlines</Text>
                         </View>
                         <Gap height={137}/>
                         <View style={styles.destination}>
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
            </View>
        </TouchableOpacity>       
    )
}

const styles = StyleSheet.create({
    wrapperCard:{
        height:262,
        width:252,
        position:'relative',
        justifyContent:'center',
        marginRight:20
    },
    layer1:{
        backgroundColor:'rgba(196, 196, 196, 0.65)',
        width:136,
        height:174,
        borderRadius:20,
        position:'absolute',
        left:0
    },
    layer2:{
        backgroundColor:'rgba(115, 115, 115, 0.65)',
        width:166,
        height:210,
        borderRadius:20,
        position:'absolute',
        left:22
    },
    container:{
        backgroundColor:'rgba(0,0,0,0.2)',
        width:206,
        height:262,
        position:'absolute',
        zIndex:99,
        right:0,
        borderRadius:20,
        paddingTop:19,
        paddingRight:24,
        paddingBottom:26,
        paddingLeft:26
    },
    badge:{
        paddingVertical:5,
        width:88,
        backgroundColor:'rgba(255, 255, 255, 0.41)',
        borderRadius:33,
        flexDirection:'row',
        justifyContent:'center'
    },
    badgeCount:{
        color:'white',
        fontFamily:'Poppins-Bold',
        fontSize:12
    },
    badgeText:{
        color:'white',
        fontSize:12,
        fontFamily:'Poppins-Light'
    },
    destination:{
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
        borderRadius:20,
        left:46,
        width:206,
        height:262
    }


})
