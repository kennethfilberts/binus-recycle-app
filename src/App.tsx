import React, {useCallback} from 'react';
import Splash from './screens/Splash';
import Login from './screens/Login';
import Home from './screens/Home';
import Scan from './screens/Scan';
import Redeem from './screens/Redeem';
import User from './screens/User/User';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeIcon,
  HomeIconFocused,
  RedeemIcon,
  RedeemIconFocused,
  ScanIcon,
  BackIcon,
} from './TabIcons';

function HomeScreen({navigation}: any) {
  const Tab = createBottomTabNavigator();

  const homeIconComponent = useCallback(({focused}: {focused: boolean}) => {
    return focused ? <HomeIconFocused /> : <HomeIcon />;
  }, []);

  const redeemIconComponent = useCallback(({focused}: {focused: boolean}) => {
    return focused ? <RedeemIconFocused /> : <RedeemIcon />;
  }, []);

  const scanIconComponent = useCallback(
    () => <ScanIcon navigation={navigation} />,
    [navigation],
  );

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: homeIconComponent,
          tabBarShowLabel: false,
        }}
      />

      <Tab.Screen
        name="scan"
        component={Scan}
        options={{
          tabBarIcon: scanIconComponent,
          tabBarShowLabel: false,
        }}
      />

      <Tab.Screen
        name="redeem"
        component={Redeem}
        options={{
          tabBarIcon: redeemIconComponent,
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
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#FFFCF5'},
          headerTitleStyle: {
            fontSize: 23,
            fontWeight: 'bold',
          },
          headerBackImage: BackIcon,
        }}>
        <Stack.Screen
          name="splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="home-screen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Account" component={User} />
        <Stack.Screen name="Scan" component={Scan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
