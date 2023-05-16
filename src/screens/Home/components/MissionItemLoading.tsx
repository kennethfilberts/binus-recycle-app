import React from 'react';
import {View, StyleSheet} from 'react-native';
import ArrowIcon from '../../../assets/icons/ArrowIcon';
import {darkGreyTheme} from '../../../assets/colors';

export const MissionItemLoading = () => {
  return (
    <View style={styles.missionItem}>
      <View style={styles.imageAndInfoContainer}>
        <View style={styles.imageContainer} />
        <View style={styles.infoContainer}>
          <View style={styles.missionName} />
          <View style={styles.completion} />
        </View>
      </View>

      <ArrowIcon rotation={180} style={{marginLeft: 15}} />
    </View>
  );
};

const styles = StyleSheet.create({
  missionItem: {
    height: '27%',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 9,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  infoContainer: {
    height: '75%',
    width: '65%',
    justifyContent: 'space-evenly',
  },
  completion: {
    backgroundColor: darkGreyTheme,
    width: '70%',
    height: '30%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  missionName: {
    backgroundColor: darkGreyTheme,
    width: '100%',
    height: '30%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageAndInfoContainer: {
    height: '100%',
    width: '70%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageContainer: {
    height: '75%',
    aspectRatio: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: darkGreyTheme,
  },
});
