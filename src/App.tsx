import React from 'react';
import {StyleSheet, View} from 'react-native';
import Splash from '../components/splash';
import Login from '../components/login';

function App(): JSX.Element {
  return (
    <View style={styles.body}>
      {/* <Splash /> */}
      {/* <Login /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: 'black',
    fontSize: 24,
  },
});

export default App;
