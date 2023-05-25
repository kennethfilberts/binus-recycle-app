import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React, { useEffect, useState } from 'react';
import {lightGreenTheme, blackTheme} from '../../../assets/colors';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/Store';
import HomeUserIcon from '../../../assets/icons/HomeUserIcon';
import axios from 'axios';

export const Header = ({navigation}: any) => {
  const tempStudentPoints = useSelector(
    (state: RootState) => state.auth.StudentPoints,
  );
  const studentID = useSelector((state: RootState) => state.auth.StudentID);
  const StudentName = useSelector((state: RootState) => state.auth.StudentName);

  const [studentPoints, setStudentPoints] = useState(tempStudentPoints);

  useEffect(() => {
    console.log(`${process.env.BASE_URL}/api/v1/student/${studentID}`);

    const fetchEcoCoins = async () => {
      try {
        const response = await axios.get(
          `${process.env.BASE_URL}/api/v1/student/${studentID}`,
          {
            timeout: 2000,
          },
        );

        setStudentPoints(response.data.data.StudentPoints);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEcoCoins();
  }, [studentID]);

  return (
    <View style={styles.headerOuterContainer}>
      <View style={styles.headerBackground}>
        <View style={styles.headerUserInfo}>
          <View style={styles.headerUserText}>
            <Text style={styles.greetingText}>Good Morning</Text>
            <Text style={styles.nameText}>{StudentName}</Text>
          </View>
          <HomeUserIcon navigation={navigation} />
        </View>
        <View style={styles.treasureTroveBackground}>
          <View style={styles.treasureTroveOuterContainer}>
            <Text style={styles.treasureTroveHeader}>
              My Eco-Treasure Trove
            </Text>
            <View style={styles.treasureTroveInnerContainer}>
              <Image
                source={require('../../../assets/images/earth-love.png')}
                style={styles.earthImage}
              />
              <View style={styles.treasureTroveTextContainer}>
                <Text style={styles.treasureTroveCoins}>
                  {studentPoints} Eco-Coins
                </Text>
                <Text style={styles.treasureTroveText}>
                  Your recycling efforts are making a world of difference
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  headerOuterContainer: {
    height: screenHeight * 0.3,
  },
  headerBackground: {
    backgroundColor: lightGreenTheme,
    height: '85%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    flexDirection: 'column',
  },
  headerUserInfo: {
    width: '90%',
    height: '55%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerUserText: {
    justifyContent: 'center',
  },
  greetingText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: 'white',
  },
  nameText: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
  },
  treasureTroveBackground: {
    height: '70%',
    backgroundColor: 'white',
    flexDirection: 'column',
    width: '90%',
    borderRadius: 15,
    justifyContent: 'center',
    position: 'absolute',
    top: '48%',
    elevation: 5,
  },
  treasureTroveOuterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  treasureTroveInnerContainer: {
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  treasureTroveTextContainer: {
    flexDirection: 'column',
    width: '65%',
  },
  treasureTroveHeader: {
    color: blackTheme,
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    width: '80%',
  },
  earthImage: {
    height: '75%',
    width: undefined,
    aspectRatio: 1,
  },
  treasureTroveCoins: {
    color: blackTheme,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
  },
  treasureTroveText: {
    color: blackTheme,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
});
