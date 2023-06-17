import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Info} from './components/Info';
import {backgroundTheme, blackTheme} from '../../assets/colors';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/Store';

export default function User() {
  const studentName = useSelector((state: RootState) => state.auth.StudentName)
  const studentEmail = useSelector((state: RootState) => state.auth.StudentEmail)
  const studentID = useSelector((state: RootState) => state.auth.StudentID)
  const studentPoints = useSelector((state: RootState) => state.auth.StudentPoints);

  return (
    <View style={styles.body}>
      <StatusBar backgroundColor={backgroundTheme} barStyle="dark-content" />
      <View>
        <TouchableOpacity style={styles.picture_profile}>
          {/* <Image source={}/> */}
        </TouchableOpacity>
      </View>

      <Text style={styles.text_bold}>{studentName}</Text>
      <Text style={styles.text_normal}>{studentEmail}</Text>
      <Text style={styles.text_normal}>{studentID}</Text>

      <View style={styles.eco_card}>
        <Text style={styles.eco_text}>{studentPoints} Eco-Coins</Text>
      </View>

      <View style={styles.info_card}>
        <View style={styles.info_card_detail}>
          <Info imageIcon={'pass'} itemText={'Change Password'}></Info>
          <View style={styles.line} />
          <Info imageIcon={'notif'} itemText={'Set Notification'}></Info>
          <View style={styles.line} />
          <Info imageIcon={'help'} itemText={'Support Center'}></Info>
          <View style={styles.line} />
          <Info imageIcon={'logout'} itemText={'Log Out'}></Info>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: backgroundTheme,
  },

  picture_profile: {
    backgroundColor: '#FE7A6B',
    width: 120,
    height: 120,
    borderRadius: 10,
    marginTop: '10%',
  },

  text_bold: {
    fontSize: 23,
    color: blackTheme,
    fontFamily: 'Poppins-Bold',
    marginTop: 30,
    marginBottom: 0,
  },

  text_normal: {
    fontSize: 14,
    color: blackTheme,
    fontFamily: 'Poppins-Regular',
    marginTop: -5,
  },

  eco_card: {
    backgroundColor: '#FE7A6B',
    padding: 8,
    borderRadius: 5,
    marginTop: 15,
    elevation: 5,
  },

  eco_text: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    marginBottom: -4,
  },

  info_card: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
    width: '100%',
    height: '55%',
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    elevation: 30,
  },

  info_card_detail: {
    alignItems: 'baseline',
    justifyContent: 'center',
    width: '80%',
    gap: 15,
  },

  line: {
    backgroundColor: '#BBBBBB',
    width: '100%',
    height: 1,
  },
});
