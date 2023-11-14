import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {lightGreenTheme} from '../../../assets/colors';
import {RootState} from '../../../redux/Store';
import {BASE_URL} from '@env';
import axios from 'axios';
import {store} from '../../../redux/Store';
import {setUserPoints} from '../../../redux/reducers/AuthReducer';

interface TreasureTroveCardProps {
  refreshing: boolean;
  isSuccess: boolean;
}

const TreasureTroveCard = ({refreshing, isSuccess}: TreasureTroveCardProps) => {
  const tempStudentPoints = useSelector(
    (state: RootState) => state.auth.StudentPoints,
  );
  const studentID = useSelector((state: RootState) => state.auth.StudentID);
  const [studentPoints, setStudentPoints] = useState(tempStudentPoints);

  useEffect(() => {
    console.log(`${BASE_URL}/api/v1/student/${studentID}`);
    const fetchEcoCoins = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/v1/student/${studentID}`,
          
          {
            timeout: 2000,
          },
        );

        setStudentPoints(response.data.data.StudentPoints);
        store.dispatch(setUserPoints(response.data.data.StudentPoints));
      } catch (error) {
        console.log(error);
      }
    };

    fetchEcoCoins();
  }, [studentID, refreshing, isSuccess]);

  return (
    <View style={style.rewardCardBackground}>
      <View style={style.rewardCardTopContainer}>
        <View style={style.treasureTrove}>
          <Text style={style.treasureTroveText}>My Eco-Treasure Trove</Text>
          <Text style={style.treasureTroveCoins}>
            {studentPoints} Eco-Coins
          </Text>
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
      <View style={style.rewardCardBottomContainer}>
        <View style={style.treasureTroveDescriptionContainer}>
          <Text style={style.treasureTroveDescription}>
            Well done! Redeem your rewards now and enjoy the eco-friendly perks!
          </Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  rewardCardBackground: {
    flexDirection: 'column',
    backgroundColor: lightGreenTheme,
    width: '90%',
    paddingVertical: '5%',
    borderRadius: 15,
    alignItems: 'center',
  },
  rewardCardTopContainer: {
    flexDirection: 'row',
    height: 70,
    width: '85%',
    justifyContent: 'space-between',
  },
  treasureTrove: {
    top: '2.7%',
    justifyContent: 'center',
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
  rewardCardBottomContainer: {
    width: '85%',
    alignSelf: 'center',
    marginTop: '2.7%',
  },
  treasureTroveDescriptionContainer: {
    alignItems: 'center',
    width: '100%',
  },
  treasureTroveDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: 'white',
  },
});

export default TreasureTroveCard;
