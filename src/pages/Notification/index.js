import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useSelector } from 'react-redux';
import {IcArrowBackBlack} from '../../assets';
import {CardNotification} from '../../components';
import API from '../../service';

export default function Notification({navigation}) {
  const {data} = useSelector((s) => s.Auth);
 
  const [notification, setNotification] = React.useState([]);
  React.useEffect(() => {
    API.Booking(data).then((res) => {
      setNotification(res);
    });
  }, []);

  return (
    <>
    <View style={styles.container}>

      <StatusBar
        animated={true}
        backgroundColor="#ffffff"
        barStyle="dark-content"
      />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <IcArrowBackBlack />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.clearBtn}>Clear</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Notifications</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {
          notification.map((data,index) => {
            return(
              <CardNotification
                key={index}
                unread={data.paymentStatus == 0 ? false : true}
                title={data.paymentStatus == 0 ? 'Continue Payment': 'Congratulations'}
                subtitle={data.paymentStatus == 0 ?'Payment Confirmed we will send your Eticket soon!' :'Your Payment has been validated, Have a nice Trip Dear!'}
            />
            )
          
          })
        }
      </ScrollView>


    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 28,
     backgroundColor: '#fff',
     flex:1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  clearBtn: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#2395FF',
  },
  title: {
    fontSize: 36,
    fontFamily: 'Poppins-Bold',
    backgroundColor: '#fff',
  },
});
