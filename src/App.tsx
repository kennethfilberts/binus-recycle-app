import React, {useCallback} from 'react';
import Splash from './screens/Splash';
import Login from './screens/Login/Login';
import Home from './screens/Home/Home';
import Scan from './screens/Scan';
import Redeem from './screens/Redeem';
import User from './screens/User/User';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import {
  backgroundTheme,
  greyTheme,
  darkGreyTheme,
  blackTheme,
} from './assets/colors';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/Store';
import HomeIcon from './assets/icons/HomeIcon';
import RewardIcon from './assets/icons/RewardIcon';
import ScanIcon from './assets/icons/ScanIcon';
import Summary from './screens/Summary/Summary';
import ArrowIcon from './assets/icons/ArrowIcon';
import Location from './screens/Location/Location';
import FAQ from './screens/FAQ/FAQ';

const HomeScreen = ({navigation}: any) => {
  const Tab = createBottomTabNavigator();

  const RenderHomeIcon = useCallback(({focused}: {focused: boolean}) => {
    return <HomeIcon color={focused ? blackTheme : darkGreyTheme} />;
  }, []);

  const RenderRewardIcon = useCallback(({focused}: {focused: boolean}) => {
    return <RewardIcon color={focused ? blackTheme : darkGreyTheme} />;
  }, []);

  const RenderScanIcon = useCallback(
    () => <ScanIcon navigation={navigation} />,
    [navigation],
  );

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 65,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: greyTheme,
        },
        tabBarLabelStyle: {
          display: 'none',
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: RenderHomeIcon,
          tabBarShowLabel: false,
        }}
      />

      <Tab.Screen
        name="scan"
        component={Scan}
        options={{
          tabBarIcon: RenderScanIcon,
          tabBarShowLabel: false,
        }}
      />

      <Tab.Screen
        name="redeem"
        component={Redeem}
        options={{
          tabBarIcon: RenderRewardIcon,
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  changeNavigationBarColor(backgroundTheme, true);

  const Stack = createStackNavigator();
  const RenderArrowIcon = useCallback(() => <ArrowIcon rotation={0} />, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="splash"
            screenOptions={{
              headerTitleAlign: 'center',
              headerStyle: {backgroundColor: backgroundTheme, elevation: 0},
              headerTitleStyle: {
                fontSize: 23,
                fontFamily: 'Poppins-Bold',
                marginTop: 6,
              },
              headerBackImage: RenderArrowIcon,
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
            <Stack.Screen name="User Profile" component={User} />
            <Stack.Screen name="Green Highlights" component={Summary} />
            <Stack.Screen name="Eco Hotspots" component={Location} />
            <Stack.Screen name="Curiosity Oasis" component={FAQ} />
            <Stack.Screen name="Scan" component={Scan} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
