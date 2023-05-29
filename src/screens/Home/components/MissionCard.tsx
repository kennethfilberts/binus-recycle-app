import React, {useEffect, useState} from 'react';
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
import {MissionItemLoading} from './MissionItemLoading';
import axios from 'axios';
import {RootState} from 'src/redux/Store';
import {useSelector} from 'react-redux';

const screenHeight = Dimensions.get('window').height;

interface Category {
  source: any;
  color: string;
}

interface Categories {
  [key: string]: Category;
}

const categories: Categories = {
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

interface MissionData {
  MissionID: string;
  ItemWeight: number;
  CategoryName: string;
}

interface ProgressData {
  MissionID: string;
  MissionProgress: number;
  IsCompleted: boolean;
}

interface MissionCardProps {
  navigation: any;
  refreshing: boolean;
}

export const MissionCard = ({navigation, refreshing}: MissionCardProps) => {
  const [firstMission, setFirstMission] = useState<MissionData | null>(null);
  const [firstProgress, setFirstProgress] = useState<ProgressData | null>(null);

  const [secondMission, setSecondMission] = useState<MissionData | null>(null);
  const [secondProgress, setSecondProgress] = useState<ProgressData | null>(
    null,
  );

  const [thirdMission, setThirdMission] = useState<MissionData | null>(null);
  const [thirdProgress, setThirdProgress] = useState<ProgressData | null>(null);

  const [isLoading, setLoading] = useState(true);

  const studentID = useSelector((state: RootState) => state.auth.StudentID);
  useEffect(() => {
    console.log(`${process.env.BASE_URL}/api/v1/daily-mission`);

    const fetchMissions = async () => {
      try {
        const response = await axios.get(
          `${process.env.BASE_URL}/api/v1/daily-mission`,
          {
            timeout: 2000,
          },
        );

        setFirstMission(response.data.data[0]);
        setSecondMission(response.data.data[1]);
        setThirdMission(response.data.data[2]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMissions();
  }, [refreshing]);

  useEffect(() => {
    console.log(
      `${process.env.BASE_URL}/api/v1/daily-mission/progress/${studentID}`,
    );
    const fetchMissionProgress = async () => {
      try {
        const res = await axios.get(
          `${process.env.BASE_URL}/api/v1/daily-mission/progress/${studentID}`,
          {
            timeout: 2000,
          },
        );

        setFirstProgress(res.data.data.firstMissionProgress);
        setSecondProgress(res.data.data.secondMissionProgress);
        setThirdProgress(res.data.data.thirdMissionProgress);
      } catch (error) {
        console.log(error);
      }
    };

    if (firstMission && secondMission && thirdMission) {
      fetchMissionProgress();
      setLoading(false);
    }
  }, [firstMission, secondMission, studentID, thirdMission]);

  return (
    <View style={styles.missionOuterContainer}>
      <View style={styles.missionCard}>
        <View style={styles.missionCardInnerContainer}>
          <View style={styles.missionCardHeaderContainer}>
            <Text style={styles.missionsHeader}>Planet-Saving Missions</Text>
            <Text style={styles.missionsSubText}>
              Saving the World, One Mission at a Time!
            </Text>
          </View>
          <View style={styles.missionsListContainer}>
            {isLoading ? (
              <>
                <MissionItemLoading />
                <MissionItemLoading />
                <MissionItemLoading />
              </>
            ) : (
              <>
                <MissionItem
                  navigation={navigation}
                  category={
                    firstMission ? categories[firstMission.CategoryName] : null
                  }
                  missionData={firstMission}
                  progressData={firstProgress}
                />
                <MissionItem
                  navigation={navigation}
                  category={
                    secondMission
                      ? categories[secondMission.CategoryName]
                      : null
                  }
                  missionData={secondMission}
                  progressData={secondProgress}
                />
                <MissionItem
                  navigation={navigation}
                  category={
                    thirdMission ? categories[thirdMission.CategoryName] : null
                  }
                  missionData={thirdMission}
                  progressData={thirdProgress}
                />
              </>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  missionOuterContainer: {
    height: screenHeight * 0.5,
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
