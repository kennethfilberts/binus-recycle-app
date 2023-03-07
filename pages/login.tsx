import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Login({navigation} : any) {
  return (
    <View style={styles.body}>
      <Image source={require('../public/logo.png')} style={styles.logo} />
      <View style={styles.bottom}>
        <Text style={styles.text}>
          Sign in with your work or school account
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('home-screen');
          }}>
          <Image source={require('../public/microsoft.png')} />
          <Text style={styles.text_button}>Login with microsoft account</Text>
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
    backgroundColor: '#FFFCF5',
  },

  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },

  bottom: {
    gap: 10,
    width: '75%',
    alignItems: 'center',
  },

  text: {
    color: 'black',
  },

  text_button: {
    color: '#676767',
  },

  button: {
    gap: 10,
    height: 40,
    width: '100%',
    backgroundColor: '#ECEBC9',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
