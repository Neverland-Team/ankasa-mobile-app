import React from 'react'
import { StyleSheet, Text, View ,Image,ScrollView} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {IlNavSearchResult,IcArrowBackWhite,IcSearchResultArrowWhite,IcFilter} from '../../assets';
import { CardSearchResult } from '../../components';
import { Gap } from '../../utils';
export default function SearchResult({navigation}) {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.wrapper}>

                    <View style={{height:232,backgroundColor:'#2395FF',borderBottomEndRadius:30,borderBottomStartRadius:30,paddingHorizontal:28}}>
                        <Image source={IlNavSearchResult} style={styles.image} />
                        <Gap height={33}/>
                        <View style={styles.navigation}>
                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                  <IcArrowBackWhite/>
                                </TouchableOpacity>
                                <View style={styles.wrapperNavigation}>
                                    <Text style={styles.navigationText}>Monday, 20 July ‘20</Text>
                                </View>
                        </View>
                        <Gap height={55}/>
                        <View style={styles.period}>
                            <Text style={styles.periodText}>From</Text>
                            <Text style={styles.periodText}>To</Text>
                        </View>
                        <Gap height={7}/>
                        <View style={styles.destination}>
                            <Text style={styles.destinationText}>Medan</Text>
                            <IcSearchResultArrowWhite/>
                            <Text style={styles.destinationText}>Tokyo</Text>
                        </View>
                        <Gap height={7}/>
                        <View style={styles.city}>
                            <Text style={styles.periodText}>Indonesia</Text>
                            <Text style={styles.periodText}>Japan</Text>
                        </View>
                    </View>
                    <View style={{paddingHorizontal:28}}>
                        <Gap height={18}/>
                        <View style={styles.city}>
                              <View>
                                <Text style={styles.type}>Passengger</Text>
                                <Gap height={10}/>
                                <Text style={styles.information}>2 Child 4 Adults</Text>
                              </View>
                              <View>
                                <Text style={styles.type}>Class</Text>
                                <Gap height={10}/>
                                <Text style={styles.information}>Economy</Text>
                              </View>
                        </View>

                    </View>
                </View>
                <View style={{paddingHorizontal:28}}>
                        <Gap height={32}/>
                        <View style={styles.city}>
                            <Text style={styles.fligthFound}>6 flight found</Text>
                            <View style={{flexDirection:'row'}}>
                                 <Text style={styles.filter}>Filter</Text>
                                 <Gap width={14}/>
                                 <IcFilter/>
                            </View>
                        </View>
                        <Gap height={34}/>
                        <CardSearchResult/>
                        <Gap height={23}/>
                        <CardSearchResult/>
                        <Gap height={23}/>
                        <CardSearchResult/>
                </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
     container:{
         flex:1,
         backgroundColor:'white'
     },
     wrapper:{
         backgroundColor:'#F8F8F8',
         height:337,
         borderBottomEndRadius:30,
         borderBottomStartRadius:30
    },
    image:{position:'absolute'},
    navigation:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    wrapperNavigation:{
        paddingHorizontal:15,
        paddingVertical:10,
        backgroundColor:'rgba(255, 255, 255, 0.28)',
        borderRadius:6
    },
    navigationText:{
        fontSize:12,
        color:'#FFFFFF',
        fontFamily:'Poppins-SemiBold'
    },
    period:{
        justifyContent:'space-between',
        flexDirection:'row'
    },
    periodText:{
        color:'white',
        fontSize:12
    },
    destination:{
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
    },
    destinationText:{
        color:'white',
        fontSize:20,
        fontFamily:'Poppins-SemiBold'
    },
    city:{
        justifyContent:'space-between',
        flexDirection:'row'
    },
    type:{
        color:'#414141',
        fontSize:12
    },
    information:{
        color:'#414141',
        fontSize:16,
        fontFamily:'Poppins-SemiBold'
    },
    fligthFound:{
        color:'#979797',
        fontSize:14,
        fontFamily:'Poppins-Medium'
    },
    filter:{
        color:'#000000',
        fontSize:14,
        fontFamily:'Poppins-Medium'
    },
 

})
