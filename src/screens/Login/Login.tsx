import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import {
  backgroundTheme,
  redTheme,
  greyTheme,
  lightGreenTheme,
  blackTheme,
} from './../../assets/colors';
import EmailIcon from './../../assets/icons/EmailIcon';
import LockIcon from './../../assets/icons/LockIcon';
import TextFieldArea from './components/TextFieldArea';
import axios, {AxiosResponse} from 'axios';
import {setUserData} from '../../redux/reducers/AuthReducer';
import {RootState, store} from '../../redux/Store';
import {useSelector} from 'react-redux';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import {BASE_URL} from '@env';

const Login = ({navigation}: any) => {
  //store.dispatch(clearUserData()); //this is just here for ease of debugging, delete this later in production
  const token = useSelector((state: RootState) => state.auth.Token);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [warningText, setWarningText] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [isKeyboardActive, setIsKeyboardActive] = useState(false);

  useEffect(() => {
    if (token) {
      changeNavigationBarColor(greyTheme, true);
      navigation.replace('home-screen');
    }
  }, [token, navigation]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardActive(true);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardActive(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleEmailTextChange = (emailInput: string) => {
    setEmail(emailInput);
  };

  const handlePasswordTextChange = (passwordInput: string) => {
    setPassword(passwordInput);
  };

  const checkEmptyField = () => {
    if (email === '' || password === '') {
      setWarningText('Field must not be empty');
      setError(true);
      return true;
    }
  };

  const checkEmail = () => {
    if (!email.endsWith('@binus.ac.id')) {
      setWarningText('Email must end with @binus.ac.id');
      setError(true);
      return true;
    }
  };

  const handleSetUserData = (res: AxiosResponse<any, any>) => {
    store.dispatch(setUserData(res.data.data));

    setError(false);
    setLoading(false);
  };

  const handleResponseError = (err: any) => {
    if (err.code !== 'ECONNABORTED') {
      setWarningText(err.response.data.error);
    } else {
      setWarningText('Server error, please try again later');
    }
    setError(true);
    setLoading(false);
  };
  const isSuperUser = useSelector((state: RootState) => state.auth.IsSuperUser);
  const superUserBaseUrl = useSelector(
    (state: RootState) => state.baseUrl.BaseUrl,
  );

  const baseUrl = isSuperUser ? superUserBaseUrl : BASE_URL;

  const handleLogin = () => {
    if (checkEmptyField() || checkEmail()) {
      return;
    }
    setLoading(true);
    axios
      .post(
        `${baseUrl}/api/v1/student/login`,
        {
          studentEmail: email,
          studentPassword: password,
        },
        {
          timeout: 2000,
        },
      )
      .then(res => {
        handleSetUserData(res);
      })
      .catch(err => {
        handleResponseError(err);
      });
  };

  return (
    <View style={styles.outerContainer}>
      <StatusBar backgroundColor={backgroundTheme} barStyle="dark-content" />
      {/* <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      /> */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/bloombox-logo.png')}
          style={styles.logoNew}
          resizeMode="contain"
        />
      </View>

      <View
        style={[
          styles.loginContainer,
          isKeyboardActive && styles.keyboardOnFocus,
        ]}>
        <View style={styles.headerContainer}>
          <Text style={styles.textHeader}>WELCOME</Text>
          <Text style={styles.subTextHeader}>Sign in to continue</Text>
        </View>
        {isError && <Text style={styles.warningText}>{warningText}</Text>}
        <TextFieldArea
          fieldHeader={'Email'}
          placeholderText={'User@binus.ac.id'}
          FieldIcon={EmailIcon}
          isPassword={false}
          onHandleInput={handleEmailTextChange}
        />
        <TextFieldArea
          fieldHeader={'Password'}
          placeholderText={'Password'}
          FieldIcon={LockIcon}
          isPassword={true}
          onHandleInput={handlePasswordTextChange}
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
          disabled={isLoading}>
          {isLoading ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text style={styles.loginButtonText}>Login</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: backgroundTheme,
  },
  logo: {
    height: '20%',
    width: undefined,
    aspectRatio: 1,
    borderRadius: 1000,
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
  keyboardOnFocus: {
    height: '65%',
    marginTop: 0,
  },
  headerContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '20%',
  },
  loginContainer: {
    marginTop: 20,
    width: '95%',
    height: '45%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  textHeader: {
    fontFamily: 'Poppins-Bold',
    color: blackTheme,
    fontSize: 30,
  },
  subTextHeader: {
    fontFamily: 'Poppins-Bold',
    color: blackTheme,
    fontSize: 15,
  },
  loginButton: {
    backgroundColor: lightGreenTheme,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 45,
    borderRadius: 8,
    marginTop: 10,
  },
  loginButtonText: {
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
    fontSize: 14,
  },
  warningText: {
    fontFamily: 'Poppins-SemiBold',
    color: redTheme,
    fontSize: 12,
  },
});

export default Login;
