import React,{useState} from 'react'
import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,TextInput} from 'react-native'
import { showMessage } from 'react-native-flash-message'
import { IcArrowBackWhite } from '../../assets'
import { Gap } from '../../utils'

export default function ContactPerson({navigation,route}) {
    const [fullName,setFullName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [nationallity,setNationallity] = useState('')

    const form = () =>
    {
        if (!fullName) {
            showMessage({
              message: "Field  Full Name is required",
              type: "danger",
            });
            return false
        }
        if (!email) {
            showMessage({
              message: "Field Email is required",
              type: "danger",
            });
            return false
        }
        if (!phone) {
            showMessage({
              message: "Field Phone is required",
              type: "danger",
            });
            return false
        }
        if (!nationallity) {
            showMessage({
              message: "Field Nationallity is required",
              type: "danger",
            });
            return false
        }

        navigation.navigate('FlightDetail',route.params)
    }

    return (
        <>
        <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.navbar}>
                <Gap height={30}/>
                <View style={styles.navigation}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <IcArrowBackWhite />
                    </TouchableOpacity>
                    <Text style={styles.navText}>Contact Person</Text>
                </View>
            </View>
            <Gap height={40}/>
            <View style={styles.wrapper}>
                <TextInput placeholder="Full Name" style={styles.input} onChangeText={(e) => setFullName(e)} />
                <Gap height={30}/>
                <TextInput placeholder="Enter Your Email" style={styles.input}  keyboardType="email-address" onChangeText={(e) => setEmail(e)}/>
                <Gap height={30}/>
                <TextInput placeholder="Enter Phone Number" style={styles.input} keyboardType="phone-pad" onChangeText={(e) => setPhone(e)} />
                <Gap height={30}/>
                <TextInput placeholder="Nationallity" style={styles.input}  onChangeText={(e) => setNationallity(e)}/>
                <Gap height={30}/>
            </View>
        </ScrollView>
        <TouchableOpacity style={{padding:20}} onPress={() => form()}>
          <View style={styles.button}>
            <Text style={styles.textButton}>Continue</Text>
          </View>   
        </TouchableOpacity>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1
    },
    wrapper:{
        paddingHorizontal:20
    },
    navbar:{
        height:120,
        backgroundColor:'#2395FF',
        padding:20,
        borderBottomEndRadius:30,
        borderBottomStartRadius:30
    },
    navigation:{
        flexDirection:'row',
        alignItems:'center',
    },
    navText:{
        color:'white',
        fontSize:20,
        fontFamily:'Poppins-SemiBold',
        marginLeft:20,
        marginTop:2
    },
    input:{
        borderBottomWidth:1.5,
        borderBottomColor:'rgba(210, 194, 255, 0.68)',
        fontSize:16,
        fontFamily:'Poppins-Regular',
    },
    button:{
        backgroundColor:'#2395FF',
        paddingVertical:15,
        alignItems:'center',
        borderRadius:10,
        elevation:2,

    },
    textButton:{
        fontSize:18,
        fontFamily:'Poppins-Bold',
        color:'white'
    }
  
})
