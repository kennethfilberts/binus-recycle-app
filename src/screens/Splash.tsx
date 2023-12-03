import {StyleSheet, View, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/Store';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import {greyTheme, backgroundTheme} from '../assets/colors';

export default function Splash({navigation}: any) {
  const token = useSelector((state: RootState) => state.auth.Token);

  useEffect(() => {
    setTimeout(() => {
      if (token) {
        changeNavigationBarColor(greyTheme, true);
        navigation.replace('home-screen');
      } else {
        navigation.replace('login');
      }
    }, 1000);
  }, [navigation, token]);

  return (
    <View style={styles.body}>
      <StatusBar backgroundColor={backgroundTheme} barStyle="dark-content" />
      {/* <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      /> */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/bloombox-logo.png')}
          style={styles.logoNew}
          resizeMode="contain"
        />
      </View>
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
  logoContainer: {
    height: '10%',
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoNew: {
    width: '100%',
  },
});
