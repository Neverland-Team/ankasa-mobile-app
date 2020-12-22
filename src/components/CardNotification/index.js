import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default CardNotification = ({title, subtitle, date, unread}) => {
  return (
    <>
      <View style={styles.card(unread)}>
        <View>
          <Text style={styles.titleNotif(unread)}>{title}</Text>
        </View>
        <View>
          <Text style={styles.subtitleNotif}>{subtitle}</Text>
        </View>
        <View>
          <Text style={styles.dateNotif}>{date}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  card: (unread) => ({
    backgroundColor: unread ? '#F6FBFF' : '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 9,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: unread ? '#2395FF' : '#D7D7D7',
  }),
  titleNotif: (unread) => ({
    fontSize: 17,
    fontFamily: 'Poppins-Bold',
    color: unread ? '#2395FF' : '#000',
  }),
  subtitleNotif: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
  },
  dateNotif: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
  },
});
