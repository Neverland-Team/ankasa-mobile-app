import React from 'react'
import { StyleSheet, Text, View ,Image,ScrollView} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {IlNavSearchResult,IcArrowBackWhite, IlBgFlightDetail, IcFlight,IlGaruda,IcStarYellow,IcBurger,IcWifi,IcMaleAndFamale} from '../../assets';
import { Gap } from '../../utils';
export default function FlightDetail({navigation}) {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.navigation}>
                <Image source={IlNavSearchResult} style={styles.image} />
                <Gap height={33}/>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <IcArrowBackWhite/>
                </TouchableOpacity>
            </View>
            <View style={styles.card}>
                <View style={{width:'100%',position:'relative'}}>
                    <Image source={IlBgFlightDetail} style={styles.imageCard} />
                    <View style={styles.wrapperCard}>
                        <View style={styles.wrapperRouter}>
                            <View>
                                <Text style={styles.routerText}>IDN</Text>
                                <Text style={styles.hours}>12:33</Text>
                            </View>
                            <IcFlight/>
                            <View>
                                <Text style={styles.routerText}>JPN</Text>
                                <Text style={styles.hoursRight}>12:33</Text>
                            </View>
                        </View>
                        <Gap height={30}/>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Image source={IlGaruda} />
                            <View>
                                <View style={{flexDirection:'row'}}>
                                  <IcStarYellow/>
                                  <Gap width={6}/>
                                  <IcStarYellow/>
                                  <Gap width={6}/>
                                  <IcStarYellow/>
                                  <Gap width={6}/>
                                  <IcStarYellow/>
                                </View>
                                <Text style={styles.rating}>120k review</Text>
                            </View>
                        </View>
                        <Gap height={30}/>
                        <View style={styles.code}>
                            <View>
                                <Text style={styles.title}>Code</Text>
                                <Text style={styles.codeType}>AB-221</Text>
                            </View>
                            <View>
                                <Text style={styles.title}>Class</Text>
                                <Text style={styles.codeType}>Economy</Text>
                            </View>
                            <View>
                                <Text style={styles.title}>Terminal</Text>
                                <Text style={styles.codeType}>A</Text>
                            </View>
                            <View>
                                <Text style={styles.title}>Gate</Text>
                                <Text style={styles.codeType}>221</Text>
                            </View>
                        </View>
                        <Gap height={30}/>
                        <View style={styles.wrapperStatus}>
                            <View style={styles.bagde}>
                                <View style={styles.count}>
                                    <Text style={styles.countField}>2</Text>
                                </View>
                                <Text style={styles.person}>Child</Text>
                            </View>
                            <View style={styles.bagde}>
                                <View style={styles.count}>
                                    <Text style={styles.countField}>4</Text>
                                </View>
                                <Text style={styles.person}>Adults</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            
           <View style={{transform:[{ translateY: -113 }]}}>
               <Gap height={20}/>
               <View style={{paddingHorizontal:28}}>
                     <Text style={styles.facilities}>Facilities</Text>
               </View>
              <Gap height={11}/>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Gap width={28}/>
                <View style={styles.badgeFacility1}>
                    <IcBurger/>
                    <Gap width={21}/>
                    <Text style={styles.badgeText}>Snack</Text>
                </View>
                <Gap width={12} />
                <View style={styles.badgeFacility2}>
                    <IcWifi/>
                    <Gap width={21}/>
                    <Text style={styles.badgeText}>Wifi</Text>
                </View>
                <Gap width={12} />
                <View style={styles.badgeFacility3}>
                    <IcMaleAndFamale/>
                    <Gap width={21}/>
                    <Text style={styles.badgeText}>Restroom</Text>
                </View>
            </ScrollView>
            <View style={{paddingHorizontal:28}}>
                <Gap height={53} />
                <View style={styles.buttonWrapper}>
                    <Text style={styles.buttonText}>Total you’ll pay</Text>
                    <Text style={styles.amount}>$ 145,00</Text>
                </View>
                <Gap height={31} />
                <View style={styles.button}>
                    <Text style={styles.buttonField}>BOOK FLIGHT</Text>
                </View>
            </View>
           </View> 
        
        </ScrollView>
    )
}

const styles = StyleSheet.create({
     container:{
         flex:1,
         backgroundColor:'white'
     },
    image:{
        position:'absolute'
    },
    wrapperRouter:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    routerText:{
        color:'#000000',
        fontSize:28,
        fontFamily:'Poppins-Medium'
    },
    hours:{
        color:'#6B6B6B',
        fontSize:12,fontFamily:'Poppins-Normal'
        
    },
    hoursRight:{
        color:'#6B6B6B',
        fontSize:12,fontFamily:'Poppins-Normal',
        textAlign:'right'
    },
    navigation:{height:232,
        backgroundColor:'#2395FF',
        borderBottomEndRadius:30,
        borderBottomStartRadius:30,
        paddingHorizontal:28
    },
    card:{
        transform: [{ translateY: -113 }],
        position:'relative'
    },
    imageCard:{
        width:'100%',
        alignItems:'center'
    },
    wrapperCard:{
        position:'absolute',
        paddingHorizontal:48,
        paddingTop:40,
        width:'100%'
    },
    rating:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    rating:{
        fontSize:14,
        color:'#595959',
        fontWeight:'500',
        marginTop:12
    },
    code:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomColor:'#E6E6E6',
        borderBottomWidth:1,
        paddingBottom:23
    },
    title:{color:'#A5A5A5',fontSize:12},
    codeType:{color:'#595959',fontSize:14},
    wrapperStatus:{flexDirection:'row',justifyContent:'space-between'},
    badge:{flexDirection:'row',alignItems:'center'},
    count:{width:36,height:36,backgroundColor:'rgba(35, 149, 255, 0.18)',alignItems:'center',justifyContent:'center',borderRadius:36/2,marginRight:16},
    countField:{fontFamily:'Poppins-Bold',color:'rgba(35, 149, 255, 1)'},
    person:{color:'#979797',fontSize:14},
    facilities:{
        color:'#000000',
        fontSize:14,
        fontFamily:'Poppins-SemiBold'
    },
    badgeFacility1:{
        paddingVertical:15,
        backgroundColor:'#6DDA6B',
        width:136,
        borderRadius:10,
        justifyContent:'center',
        flexDirection:'row'
    },
    badgeFacility2:{paddingVertical:15,
        backgroundColor:'#7861D7',
        width:136,
        borderRadius:10,
        justifyContent:'center',
        flexDirection:'row'
    },
    badgeFacility3:{paddingVertical:15,
        backgroundColor:'#E45D32',
        width:136,
        borderRadius:10,
        justifyContent:'center',
        flexDirection:'row'
    },
    badgeText:{
        color:'#FFFFFF',
        fontSize:14,
        fontFamily:'Poppins-SemiBold'
    },
    buttonWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    buttonText:{
        fontSize:14,
        fontFamily:'Poppins-Medium',
        color:'#6B6B6B'
    },
    amount:{
        color:'#2395FF',
        fontFamily:'Poppins-SemiBold',
        fontSize:24
    },
    button:{
        backgroundColor:'#2395FF',
        paddingVertical:15,
        borderRadius:10,
        alignItems:'center'
    },
    buttonField:{
        fontFamily:'Poppins-Bold',
        color:'#fff',
        fontSize:18
    }

})
