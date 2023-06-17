import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  Dimensions,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  lightGreenTheme,
  backgroundTheme,
  greyTheme,
  blackTheme,
  lightYellowTheme,
  pastelGreenTheme,
} from '../../assets/colors';
import {Header} from './components/Header';
import {MenuScroll} from './components/MenuScroll';
import {MissionCard} from './components/MissionCard';

const screenHeight = Dimensions.get('window').height;

interface HomeProps {
  onPointChange: () => void;
  setShouldRefresh: (inputBoolean: boolean) => void;
  shouldRefresh: boolean;
  navigation: any;
}

const Home = ({
  onPointChange,
  setShouldRefresh,
  shouldRefresh,
  navigation,
}: HomeProps) => {
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (refreshing) {
      onPointChange();
    }
  }, [refreshing, onPointChange]);

  useEffect(() => {
    if (shouldRefresh) {
      setShouldRefresh(false);
    }
  }, [setShouldRefresh, shouldRefresh]);

  const onHandleRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);

  return (
    <View style={styles.outerContainer}>
      <StatusBar backgroundColor={lightGreenTheme} barStyle="dark-content" />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onHandleRefresh} />
        }>
        <Header navigation={navigation} refreshing={refreshing} />
        <MenuScroll navigation={navigation} />
        <MissionCard navigation={navigation} refreshing={refreshing} />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: backgroundTheme,
  },
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
  missionItem: {
    height: '27%',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 9,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  infoContainer: {
    height: '75%',
    justifyContent: 'space-evenly',
  },
  completion: {
    backgroundColor: pastelGreenTheme,
    width: '70%',
    height: '30%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  completionText: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 12,
  },
  missionName: {
    fontFamily: 'Poppins-Medium',
    color: blackTheme,
    fontSize: 14,
  },
  imageAndInfoContainer: {
    height: '100%',
    width: '70%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageContainer: {
    height: '75%',
    aspectRatio: 1,
    borderRadius: 5,
    backgroundColor: lightYellowTheme,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryImage: {
    height: '75%',
    width: '75%',
    resizeMode: 'contain',
  },
});
