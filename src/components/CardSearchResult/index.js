import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcFlight} from '../../assets';
import {Gap} from '../../utils';
import {useNavigation} from '@react-navigation/native';

export default function CardSearchResult({
  toCountry,
  airlines,
  price,
  departure,
  arrived,
  code,
  classFlight,
  child,
  adult,
  idflight,
}) {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate('FlightDetail', {
            tocountry: toCountry,
            departure: departure,
            arrived: arrived,
            airline: airlines,
            code: code,
            classFlight: classFlight,
            child: child,
            adult: adult,
            price: price,
            idflight: idflight,
          });
        }}>
        <View>
          <View style={styles.router}>
            <View style={styles.wrapperRouter}>
              <View>
                <Text style={styles.routerText}>IDN</Text>
                <Text style={styles.hours}>
                  {departure ? departure : '00.00'}
                </Text>
              </View>
              <Gap width={26} />
              <Gap height={16} />
              <IcFlight />
              <Gap width={19} />
              <View>
                <Text style={styles.routerText}>
                  {toCountry === 'Indonesia'
                    ? 'IDN'
                    : toCountry === 'Japan'
                    ? 'JPN'
                    : 'ENG'}
                </Text>
                <Text style={styles.hours}>{arrived ? arrived : '00.10'}</Text>
              </View>
            </View>
            <View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.routerType}>Terminal</Text>
                <Gap width={10} />
                <Text style={styles.schedule}>A</Text>
              </View>
              <View style={styles.wrapperSchedule}>
                <Text style={styles.routerType}>Gate</Text>
                <Gap width={10} />
                <Text style={styles.schedule}>221</Text>
              </View>
            </View>
          </View>
        </View>
        <Gap height={18} />
        <View style={styles.amountWrapper}>
          <Text style={styles.airline}>{airlines}</Text>
          <Text style={styles.amount}>$ {price}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  router: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapperRouter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  routerText: {
    color: '#000000',
    fontSize: 28,
    fontFamily: 'Poppins-Medium',
  },
  hours: {
    color: '#6B6B6B',
    fontSize: 12,
    fontFamily: 'Poppins-Normal',
    position: 'absolute',
    top: 40,
  },
  routerType: {
    color: '#9F9F9F',
    fontSize: 12,
    fontFamily: 'Poppins-Light',
  },
  wrapperSchedule: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  schedule: {
    color: '#595959',
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
  },
  amountWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6E6',
    paddingBottom: 12,
  },
  airline: {
    color: '#595959',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  amount: {
    color: '#2395FF',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
});
