import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Login() {
  return (
    <View style={styles.body}>
      <Image source={require('../public/logo.png')} style={styles.logo} />
      <View style={styles.bottom}>
        <Text>Sign in with your work or school account</Text>
        <TouchableOpacity style={styles.button}>
          <Image source={require('../public/microsoft.png')} />
          <Text>Login with microsoft account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },

  bottom: {
    gap: 10,
  },

  button: {
    gap: 10,
    height: 40,
    backgroundColor: '#BBB98E',
    opacity: 0.7,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
