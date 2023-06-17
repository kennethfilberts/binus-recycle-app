import React from 'react';
import {View, StyleSheet} from 'react-native';
import {darkGreyTheme} from '../../../assets/colors';

export const StationCardLoading = () => {
  return (
    <View style={styles.LocationContainer}>
      <View style={styles.LocationImage} />
      <View style={styles.colContainer}>
        <View style={styles.locationHeader} />
        <View style={styles.locationSubText} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  locationHeader: {
    backgroundColor: darkGreyTheme,
    height: '30%',
    width: '70%',
    borderRadius: 10,
  },
  locationSubText: {
    backgroundColor: darkGreyTheme,
    height: '30%',
    width: '90%',
    borderRadius: 10,
  },
  LocationContainer: {
    width: '89%',
    height: '15%',
    backgroundColor: '#FFFFFF',
    borderRadius: 9,
    top: '10%',
    marginBottom: '4%',
    padding: '4%',
    elevation: 2,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  LocationImage: {
    width: '25%',
    height: '92%',
    borderRadius: 3,
    backgroundColor: darkGreyTheme,
  },
  colContainer: {
    justifyContent: 'space-evenly',
    width: '70%',
    height: '89%',
    marginLeft: '4%',
  },
});
