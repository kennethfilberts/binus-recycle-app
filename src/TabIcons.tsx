import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

export const HomeIconFocused = () => (
  <Image
    source={require('./assets/home-icon-focused.png')}
    style={styles.icon}
  />
);

export const HomeIcon = () => (
  <Image source={require('./assets/home-icon.png')} style={styles.icon} />
);

export const RedeemIconFocused = () => (
  <Image
    source={require('./assets/redeem-icon-focused.png')}
    style={styles.icon}
  />
);

export const RedeemIcon = () => (
  <Image source={require('./assets/redeem-icon.png')} style={styles.icon} />
);

export const BackIcon = () => (
  <Image source={require('./assets/back-icon.png')} style={styles.back} />
);

export const ScanIcon = ({navigation}: any) => (
  <TouchableOpacity
    onPress={() => {
      navigation.navigate('Scan');
    }}>
    <Image source={require('./assets/scan-icon.png')} style={styles.scan} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },

  scan: {
    width: 70,
    height: 70,
    marginBottom: 30,
  },

  back: {
    marginLeft: 30,
  },
});
