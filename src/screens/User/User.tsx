import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  Linking,
} from 'react-native';
import React, {useState} from 'react';
import {Info} from './components/Info';
import {backgroundTheme, blackTheme} from '../../assets/colors';
import {useSelector} from 'react-redux';
import {RootState} from 'src/redux/Store';
import {clearUserData} from '../../redux/reducers/AuthReducer';
import {store} from '../../redux/Store';
import {ChangePasswordModal} from './components/ChangePasswordModal/ChangePasswordModal';

export default function User({navigation}: any) {
  const [isVisible, setIsVisible] = useState(false);
  const studentName = useSelector((state: RootState) => state.auth.StudentName);
  const studentEmail = useSelector(
    (state: RootState) => state.auth.StudentEmail,
  );
  const studentID = useSelector((state: RootState) => state.auth.StudentID);
  const studentPoints = useSelector(
    (state: RootState) => state.auth.StudentPoints,
  );

  const changePassword = () => {
    console.log('changePassword');
    setIsVisible(true);
  };

  const setNotifications = () => {
    console.log('setNotifications');
  };

  const supportCenter = () => {
    console.log('supportCenter');
    const emailAddress = 'mailto:daniel.yohanes@binus.ac.id';

    Linking.canOpenURL(emailAddress).then(valid => {
      console.log(valid);
      if (valid) {
        return Linking.openURL(emailAddress);
      } else {
        console.log("Can't handle url:" + emailAddress);
      }
    });
  };

  const logOut = () => {
    console.log('logOut');
    navigation.replace('login');
    store.dispatch(clearUserData());
  };

  return (
    <View style={styles.body}>
      <StatusBar backgroundColor={backgroundTheme} barStyle="dark-content" />
      <View>
        <TouchableOpacity style={styles.picture_profile}>
          <Image
            source={require('../../assets/images/userSprite.png')}
            style={styles.userImage}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.text_bold}>{studentName}</Text>
      <Text style={styles.text_normal}>{studentEmail}</Text>
      <Text style={styles.text_normal}>{studentID}</Text>

      <View style={styles.eco_card}>
        <Text style={styles.eco_text}>{studentPoints} Eco-Coins</Text>
      </View>

      <View style={styles.info_card}>
        <View style={styles.info_card_detail}>
          <Info
            imageIcon={'pass'}
            itemText={'Change Password'}
            action={changePassword}
          />
          <View style={styles.line} />
          <Info
            imageIcon={'help'}
            itemText={'Support Center'}
            action={supportCenter}
          />
          <View style={styles.line} />
          <Info imageIcon={'logout'} itemText={'Log Out'} action={logOut} />
        </View>
      </View>

      <ChangePasswordModal
        isVisible={isVisible}
        onHandleModalVisible={setIsVisible}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: backgroundTheme,
  },

  picture_profile: {
    backgroundColor: '#FE7A6B',
    width: 120,
    height: 120,
    borderRadius: 10,
    marginTop: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text_bold: {
    fontSize: 23,
    color: blackTheme,
    fontFamily: 'Poppins-Bold',
    marginTop: 30,
    marginBottom: 0,
  },

  text_normal: {
    fontSize: 14,
    color: blackTheme,
    fontFamily: 'Poppins-Regular',
    marginTop: -5,
  },

  eco_card: {
    backgroundColor: '#FE7A6B',
    padding: 8,
    borderRadius: 5,
    marginTop: 15,
    elevation: 5,
  },

  eco_text: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    marginBottom: -4,
  },

  info_card: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
    width: '100%',
    height: '55%',
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    elevation: 30,
  },

  info_card_detail: {
    alignItems: 'baseline',
    justifyContent: 'center',
    width: '80%',
    gap: 25,
  },

  line: {
    backgroundColor: '#BBBBBB',
    width: '100%',
    height: 1,
  },

  userImage: {
    height: '65%',
    width: '65%',
    resizeMode: 'contain',
  },
});
