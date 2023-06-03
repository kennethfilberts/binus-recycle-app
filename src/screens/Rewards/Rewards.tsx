import {StyleSheet, View, StatusBar, Text} from 'react-native';
import React from 'react';
import {backgroundTheme} from '../../assets/colors';
import {useRewardsData} from '../../redux/hooks/rewardsHook';

const Rewards = () => {
  const rewards = useRewardsData().rewards;

  console.log(rewards);

  for (const reward of rewards) {
    console.log(reward);
  }

  //PAKE FLATLIST
  //nanti rewards dimasukin ke dalem argument flatlist
  //referensi bisa liat station app (history)

  return (
    <View style={styles.outerContainer}>
      <StatusBar backgroundColor={backgroundTheme} barStyle="dark-content" />
      <Text>TEST</Text>
    </View>
  );
};

export default Rewards;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: backgroundTheme,
  },
});
