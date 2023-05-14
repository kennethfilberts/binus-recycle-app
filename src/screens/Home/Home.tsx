import {StyleSheet, View, StatusBar} from 'react-native';
import React from 'react';
import {
  lightGreenTheme,
  backgroundTheme,
  blackTheme,
} from '../../assets/colors';
import {Header} from './components/Header';

export default function Home({navigation}: any) {

  return (
    <View style={styles.outerContainer}>
      <StatusBar backgroundColor={lightGreenTheme} barStyle="dark-content" />
      <Header></Header>
      <View style={styles.menuOuterContainer}></View>
      <View style={styles.missionOuterContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: backgroundTheme,
  },
  headerOuterContainer: {
    flex: 35,
    backgroundColor: 'red',
  },
  menuOuterContainer: {
    flex: 25,
    backgroundColor: 'green',
  },
  missionOuterContainer: {
    flex: 40,
    backgroundColor: 'blue',
  },
  headerBackground: {
    backgroundColor: lightGreenTheme,
    height: '95%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    flexDirection: 'column',
  },
  headerUserInfo: {
    width: '90%',
    height: '40%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerUserText: {
    justifyContent: 'center',
  },
  greetingText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: 'white',
  },
  nameText: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
  },
  treasureTroveBackground: {
    height: '65%',
    backgroundColor: 'white',
    flexDirection: 'column',
    width: '90%',
    borderRadius: 15,
    justifyContent: 'center',
    position: 'absolute',
    top: '40%',
  },
  treasureTroveOuterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  treasureTroveInnerContainer: {
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  treasureTroveTextContainer: {
    flexDirection: 'column',
    width: '65%',
  },
  treasureTroveHeader: {
    color: blackTheme,
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    width: '80%',
  },
  earthImage: {
    height: '75%',
    width: undefined,
    aspectRatio: 1,
  },
  treasureTroveCoins: {
    color: blackTheme,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
  },
  treasureTroveText: {
    color: blackTheme,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
});
