import React from 'react';
import {View, Image, StyleSheet, Text, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';
import {
  hotPinkTheme,
  lightGreenTheme,
  lightPinkTheme,
  redTheme,
} from '../../../assets/colors';
import {RootState} from 'src/redux/Store';

const RewardCard = () => {
  const studentPoint = useSelector(
    (state: RootState) => state.auth.StudentPoints,
  );
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const style = StyleSheet.create({
    rewardCardBackground: {
      flexDirection: 'column',
      backgroundColor: lightGreenTheme,
      width: '89%',
      paddingVertical: '5%',
      borderRadius: 15,
    },
    rewardCardTopContainer: {
      flexDirection: 'row',
      height: 70,
      justifyContent: 'space-evenly',
    },
    treasureTrove: {
      // width: '65%',
      // height: '100%',
      top: '2.7%',
      justifyContent: 'center',
      // backgroundColor: 'red',
    },
    treasureTroveText: {
      fontFamily: 'Poppins-Bold',
      color: 'white',
    },
    treasureTroveCoins: {
      fontFamily: 'Poppins-SemiBold',
      color: 'white',
      fontSize: 24,
    },
    cardImage: {
      // backgroundColor:'black',
      alignItems: 'center',
      height: '100%',
    },
    imageBackground: {
      backgroundColor: 'white',
      padding: '10%',
      aspectRatio: 1,
      borderRadius: 10,
      height: '100%',
    },
    image: {
      height: '100%',
      width: undefined,
      aspectRatio: 1,
    },
    rewardCardBottonContainer: {
      // height: '70%',
      width: '89%',
      alignSelf: 'center',
      marginTop: '2.7%'
      
    },
    treasureTroveDescriptionContainer: {
      alignItems: 'center',
    },
    treasureTroveDescription:{
      fontFamily: 'Poppins-Regular',
      fontSize: 12,
      color: 'white',
    },
  });

  return (
    <View style={style.rewardCardBackground}>
      <View style={style.rewardCardTopContainer}>
        <View style={style.treasureTrove}>
          <Text style={style.treasureTroveText}>My Eco-Treasure Trove</Text>
          <Text style={style.treasureTroveCoins}>{studentPoint} Eco Coins</Text>
        </View>
        <View style={style.cardImage}>
          <View style={style.imageBackground}>
            <Image
              source={require('../../../assets/images/earth-love.png')}
              style={style.image}
            />
          </View>
        </View>
      </View>
      <View style={style.rewardCardBottonContainer}>
        <View style={style.treasureTroveDescriptionContainer}>
          <Text style={style.treasureTroveDescription}>Well done! Redeem your rewards now and enjoy the eco-friendly perks!</Text>
        </View> 
      </View>
    </View>
  );
};

export default RewardCard;
