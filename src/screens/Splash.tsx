import {StyleSheet, View, Image} from 'react-native';
import React, {useEffect} from 'react';

export default function Splash({navigation}: any) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('login');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.body}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFCF5',
  },

  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
});
