import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IcFlight } from '../../assets'
import { Gap } from '../../utils'

export default function CardSearchResult() {
    return (
        <>
            <View>
                <View style={styles.router}>
                
                    <View style={styles.wrapperRouter}>
                        <View>
                            <Text style={styles.routerText}>IDN</Text>
                            <Text style={styles.hours}>12:33</Text>
                        </View>
                        <Gap width={26}/>
                        <Gap height={16}/>
                        <IcFlight/>
                        <Gap width={19}/>
                        <View>
                            <Text style={styles.routerText}>JPN</Text>
                            <Text style={styles.hours}>12:33</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.routerType}>
                            Terminal
                            </Text>
                            <Gap width={10}/>
                            <Text style={styles.schedule}>
                            A
                            </Text>
                        </View>
                        <View style={styles.wrapperSchedule}>
                            <Text style={styles.routerType}>
                            Gate
                            </Text>
                            <Gap width={10}/>
                            <Text style={styles.schedule}>
                            221
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <Gap height={18}/>
            <View style={styles.amountWrapper}>
                <Text style={styles.airline}>Garuda Indonesia</Text>
                <Text style={styles.amount}>$ 214,00</Text>
            </View>
     </>
    )
}

const styles = StyleSheet.create({
    router:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    wrapperRouter:{
        flexDirection:'row',
        alignItems:'center'
    },
    routerText:{
        color:'#000000',
        fontSize:28,
        fontFamily:'Poppins-Medium'
    },
    hours:{
        color:'#6B6B6B',
        fontSize:12,fontFamily:'Poppins-Normal',
        position:'absolute',
        top:40
    },
    routerType:{
        color:'#9F9F9F',
        fontSize:12,
        fontFamily:'Poppins-Light'
    },
    wrapperSchedule:{
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    schedule:{
        color:'#595959',
        fontSize:12,
        fontFamily:'Poppins-Bold'
    },
    amountWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderBottomColor:'#E6E6E6',
        paddingBottom:12
    },
    airline:{
        color:'#595959',
        fontFamily:'Poppins-Medium',
        fontSize:16
    },
    amount:{
        color:'#2395FF',
        fontFamily:'Poppins-SemiBold',
        fontSize:16
    }
})
