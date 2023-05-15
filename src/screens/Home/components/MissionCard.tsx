import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {
  greyTheme,
  blackTheme,
  lightYellowTheme,
  yellowGreenTheme,
  lightPurpleTheme,
  redTheme,
  lightGreenTheme,
} from '../../../assets/colors';
import {MissionItem} from './MissionItem';
import axios from 'axios';

const screenHeight = Dimensions.get('window').height;

export const MissionCard = ({navigation}: any) => {
  const categories = {
    Plastic: {
      source: require('../../../assets/images/plastic.png'),
      color: lightYellowTheme,
    },
    Metal: {
      source: require('../../../assets/images/metal.png'),
      color: yellowGreenTheme,
    },
    Glass: {
      source: require('../../../assets/images/glass.png'),
      color: lightPurpleTheme,
    },
    Paper: {
      source: require('../../../assets/images/paper.png'),
      color: redTheme,
    },
    Cardboard: {
      source: require('../../../assets/images/cardboard.png'),
      color: lightGreenTheme,
    },
  };

  const [firstMission, setFirstMission] = useState<any>(null);
  const [secondMission, setSecondMission] = useState<any>(null);
  const [thirdMission, setThirdMission] = useState<any>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.BASE_URL}/api/v1/daily-quest`, {
        timeout: 2000,
      })
      .then(res => {
        setFirstMission(res.data.data[0]);
        setSecondMission(res.data.data[1]);
        setThirdMission(res.data.data[2]);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <View style={styles.missionOuterContainer}>
      <View style={styles.missionCard}>
        <View style={styles.missionCardInnerContainer}>
          <View style={styles.missionCardHeaderContainer}>
            <Text style={styles.missionsHeader}>Planet-Saving Missions</Text>
            <Text style={styles.missionsSubText}>
              Saving the World, One Quest at a Time!
            </Text>
          </View>
          <View style={styles.missionsListContainer}>
            <MissionItem
              navigation={navigation}
              category={categories.Metal}
              missionData={firstMission}
            />
            <MissionItem
              navigation={navigation}
              category={categories.Metal}
              missionData={firstMission}
            />
            <MissionItem
              navigation={navigation}
              category={categories.Metal}
              missionData={firstMission}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  missionOuterContainer: {
    height: screenHeight * 0.5,
    //backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  missionCard: {
    backgroundColor: greyTheme,
    width: '90%',
    height: '100%',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  missionCardInnerContainer: {
    width: '90%',
    height: '90%',
  },
  missionCardHeaderContainer: {
    height: '15%',
    justifyContent: 'center',
  },
  missionsListContainer: {
    height: '85%',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  missionsHeader: {
    fontFamily: 'Poppins-Bold',
    color: blackTheme,
    fontSize: 20,
  },
  missionsSubText: {
    fontFamily: 'Poppins-Regular',
    color: blackTheme,
    fontSize: 12,
  },
});
