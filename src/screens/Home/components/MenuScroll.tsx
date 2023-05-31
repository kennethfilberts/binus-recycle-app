import {StyleSheet, View, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import {
  backgroundTheme,
  pastelGreenTheme,
  lightPinkTheme,
  darkPurpleTheme,
} from '../../../assets/colors';
import {MenuCard} from './MenuCard';

const screenHeight = Dimensions.get('window').height;

export const MenuScroll = ({navigation}: any) => {
  const imageUrl = {
    ecoHotspots: require('../../../assets/images/eco-hotspots.png'),
    greenHighlights: require('../../../assets/images/green-highlights.png'),
    curiosityOasis: require('../../../assets/images/curiosity-oasis.png'),
  };

  return (
    <View style={styles.horizontalScrollableContainer}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.menuOuterContainer}
        showsHorizontalScrollIndicator={false}>
        <MenuCard
          imageUrl={imageUrl.ecoHotspots}
          cardName={'Eco Hotspots'}
          navigation={navigation}
          color={darkPurpleTheme}
          destination={'Scan'}
        />
        <MenuCard
          imageUrl={imageUrl.greenHighlights}
          cardName={'Green\nHighlights'}
          navigation={navigation}
          color={pastelGreenTheme}
          destination={'Green Highlights'}
        />
        <MenuCard
          imageUrl={imageUrl.curiosityOasis}
          cardName={'Curiosity Oasis'}
          navigation={navigation}
          color={lightPinkTheme}
          destination={'Scan'}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: backgroundTheme,
  },
  menuOuterContainer: {
    height: screenHeight * 0.2,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '118%',
  },
  missionOuterContainer: {
    height: screenHeight * 0.5,
    backgroundColor: 'blue',
  },
  horizontalScrollableContainer: {
    width: '100%',
    alignItems: 'center',
  },
});
