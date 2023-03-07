import {StyleSheet, Text, View, Image} from 'react-native';
import React, { useEffect } from 'react';

export default function Splash({navigation} : any) {
  useEffect(() => {
    setTimeout(() => {navigation.replace('login')}, 2000)
  }, []);

  return (
    <View style={styles.body}>
      <Image source={require('../public/logo.png')} style={styles.logo}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
});
