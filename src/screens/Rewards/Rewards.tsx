import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import {backgroundTheme, blackTheme} from '../../assets/colors';
import {useRewardsData} from '../../redux/hooks/rewardsHook';
// import {useSelector} from 'react-redux';
// import {RootState} from 'src/redux/Store';
import TreasureTroveCard from './components/TreasureTroveCard';
import RewardCard from './components/TreasureTroveCard';

const Rewards = () => {
  const rewards = useRewardsData().rewards;
  // const studentPoint = useSelector(
  //   (state: RootState) => state.auth.StudentPoints,
  // );
  console.log(rewards[0].RewardName);

  // for (const reward of rewards) {
  //   console.log(reward);
  // }

  //PAKE FLATLIST
  //nanti rewards dimasukin ke dalem argument flatlist
  //referensi bisa liat station app (history)

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  console.log(screenWidth);
  const styles = StyleSheet.create({
    body: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: backgroundTheme,
      width: screenWidth,
      height: screenHeight,
    },
    headerContainer: {
      alignItems: 'center',
      width: screenWidth,
      marginVertical: '3%',
    },
    headerText: {
      color: blackTheme,
      fontSize: 20,
      fontFamily: 'Poppins-Bold',
    },
    treasureTroveContainer: {
      width: '100%',
      // backgroundColor: 'blue',
      alignSelf: 'center',
      alignItems: 'center',
      marginTop: '2.7%',
    },
    rewardCardContainer: {
      backgroundColor: 'pink',
      justifyContent: 'center',
      alignSelf: 'center',
      marginVertical: '5%',
      width: '89%',
      // height: 'auto',
    },
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar backgroundColor={backgroundTheme} barStyle="dark-content" />
      {/* <View style={styles.outerContainer}> */}

      <View style={styles.body}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Redeem Rewards</Text>
        </View>

        <View style={styles.treasureTroveContainer}>
          <TreasureTroveCard />
        </View>

        <View style={styles.rewardCardContainer}>
          <Text style={styles.headerText}>Rewards</Text>
          {/* <FlatList
          style={styles.recycleHistoryContainer}
          contentContainerStyle={styles.recycleHistoryContainerAlignment}
          data={rewards}
        renderItem={({item}) => {
          return <RewardCard RewardInfo={item} />;
        }} */}
        </View>
      </View>
      {/* </View> */}
    </ScrollView>
  );
};

export default Rewards;
