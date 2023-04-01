import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

export const HomeIconFocused = () => (
  <Image
    source={require('./assets/images/home-icon-focused.png')}
    style={styles.icon}
  />
);

export const HomeIcon = () => (
  <Image
    source={require('./assets/images/home-icon.png')}
    style={styles.icon}
  />
);

export const RedeemIconFocused = () => (
  <Image
    source={require('./assets/images/redeem-icon-focused.png')}
    style={styles.icon}
  />
);

export const RedeemIcon = () => (
  <Image
    source={require('./assets/images/redeem-icon.png')}
    style={styles.icon}
  />
);

export const BackIcon = () => (
  <Image
    source={require('./assets/images/back-icon.png')}
    style={styles.back}
  />
);

export const ScanIcon = ({navigation}: any) => (
  <View style={styles.scanButton}>
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        navigation.navigate('Scan');
      }}>
      <View style={styles.circleOuter}>
        <View style={styles.circleInner}>
          <Image
            source={require('./assets/images/scan-icon.png')}
            style={styles.scanIcon}
          />
        </View>
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },

  scanIcon: {
    width: 25,
    height: 25,
  },

  back: {
    marginLeft: 30,
  },

  circleOuter: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#859671',
    alignItems: 'center',
    justifyContent: 'center',
  },

  circleInner: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#FFFEF3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  scanButton: {
    marginBottom: 40,
  },
});
