import React from 'react';
import {StyleSheet, Text, View, Image, FlatList, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  IlNavSearchResult,
  IcArrowBackWhite,
  IcSearchResultArrowWhite,
  IcFilter,
} from '../../assets';
import {CardSearchResult} from '../../components';
import {Gap} from '../../utils';
import moment from 'moment';
import API from '../../service';
import {useSelector} from 'react-redux';

export default function SearchResult({navigation, route}) {
  const {date, child, adult, classFlight, idCity} = route.params;
  const [dest, setDest] = React.useState();
  const [search, setSearch] = React.useState();
  const {data} = useSelector((s) => s.Auth);
  React.useEffect(() => {
    // params kasih => idCity
    API.SearchFlightService(idCity, data)
      .then((res) => {
        setDest(res);
      })
      .catch((err) => console.warn(err.message));
  }, []);

  React.useEffect(() => {
    const dates = moment(date).format('YYYY-MM-DD');
    API.SearchResult(dates, 12, data)
      .then((res) => setSearch(res))
      .catch((err) => console.warn(err.message));
  }, []);
  console.log(search, 'seaaarrccchhhh');

  const renderItem = ({item, index}) => {
    return (
      <>
        <CardSearchResult
          toCountry={dest?.name_country}
          airlines={item?.airlane_name}
          price={(Number(child) + Number(adult)) * Number(item?.price)}
          departure={`${item?.departure?.split(':')[0]}:${
            item?.departure?.split(':')[1]
          }`}
          arrived={`${item?.arrived?.split(':')[0]}:${
            item?.arrived?.split(':')[1]
          }`}
          code={item?.code}
          classFlight={classFlight}
          child={child}
          adult={adult}
          idflight={item?.idflight}
        />
        <Gap height={15} />
      </>
    );
  };
  return (
    <>
      <View style={{backgroundColor: '#fff'}}>
        <View style={styles.wrapper}>
          <View
            style={{
              height: 232,
              backgroundColor: '#2395FF',
              borderBottomEndRadius: 30,
              borderBottomStartRadius: 30,
              paddingHorizontal: 28,
            }}>
            <Image source={IlNavSearchResult} style={styles.image} />
            <Gap height={33} />
            <View style={styles.navigation}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <IcArrowBackWhite />
              </TouchableOpacity>
              <View style={styles.wrapperNavigation}>
                <Text style={styles.navigationText}>
                  {moment(date).format('dddd, DD MMMM YYYY')}
                </Text>
              </View>
            </View>
            <Gap height={55} />
            <View style={styles.period}>
              <Text style={styles.periodText}>From</Text>
              <Text style={styles.periodText}>To</Text>
            </View>
            <Gap height={7} />
            <View style={styles.destination}>
              <Text style={styles.destinationText}>Medan</Text>
              <IcSearchResultArrowWhite />
              <Text style={styles.destinationText}>{dest?.name_city}</Text>
            </View>
            <Gap height={7} />
            <View style={styles.city}>
              <Text style={styles.periodText}>Indonesia</Text>
              <Text style={styles.periodText}>{dest?.name_country}</Text>
            </View>
          </View>
          <View style={{paddingHorizontal: 28}}>
            <Gap height={18} />
            <View style={styles.city}>
              <View>
                <Text style={styles.type}>Passengger</Text>
                <Gap height={10} />
                <Text
                  style={
                    styles.information
                  }>{`${child} Child ${adult} Adults`}</Text>
              </View>
              <View>
                <Text style={styles.type}>Class</Text>
                <Gap height={10} />
                <Text style={styles.information}>{classFlight}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <FlatList
        data={search}
        style={styles.container}
        showsVerticalScrollIndicator={false}
        backgroundColor="#fff"
        style={{paddingHorizontal: 20}}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <View style={{paddingHorizontal: 28}}>
              <Gap height={32} />
              <View style={styles.city}>
                <Text style={styles.fligthFound}>
                  {search?.length} flight found
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.filter}>Filter</Text>
                  <Gap width={14} />
                  <IcFilter />
                </View>
              </View>
              <Gap height={34} />
            </View>
          </>
        }
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapper: {
    backgroundColor: '#F8F8F8',
    height: 337,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },
  image: {position: 'absolute'},
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapperNavigation: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.28)',
    borderRadius: 6,
  },
  navigationText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontFamily: 'Poppins-SemiBold',
  },
  period: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  periodText: {
    color: 'white',
    fontSize: 12,
  },
  destination: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  destinationText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  city: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  type: {
    color: '#414141',
    fontSize: 12,
  },
  information: {
    color: '#414141',
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
  fligthFound: {
    color: '#979797',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
  filter: {
    color: '#000000',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
});
