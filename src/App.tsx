import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Splash from '../pages/splash';
import Login from '../pages/login';
import Home from '../pages/home';
import Scan from '../pages/scan';
import Redeem from '../pages/redeem';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function HomeScreen() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            if (focused) {
              return (
                <Image
                  source={require('../public/home-icon-focused.png')}
                  style={styles.icon}
                />
              );
            } else {
              return (
                <Image
                  source={require('../public/home-icon.png')}
                  style={styles.icon}
                />
              );
            }
          },
          tabBarShowLabel: false,
        }}
      />

      <Tab.Screen
        name="scan"
        component={Scan}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('../public/scan-icon.png')}
                style={styles.scan}
              />
            );
          },
          tabBarShowLabel: false,
        }}
      />

      <Tab.Screen
        name="redeem"
        component={Redeem}
        options={{
          tabBarIcon: ({focused}) => {
            if (focused) {
              return (
                <Image
                  source={require('../public/redeem-icon-focused.png')}
                  style={styles.icon}
                />
              );
            } else {
              return (
                <Image
                  source={require('../public/redeem-icon.png')}
                  style={styles.icon}
                />
              );
            }
          },
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
}

function App(): JSX.Element {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="home-screen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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
});

export default App;
