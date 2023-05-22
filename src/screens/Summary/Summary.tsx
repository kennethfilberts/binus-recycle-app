import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import {backgroundTheme, blackTheme} from '../../assets/colors';
import EarthImage from './components/images/earth';
import Stats from './components/Stats';
import {WasteTypeCard} from './components/WasteTypeCard';
import {EcoCoins} from './components/EcoCoins';
import {Favorite} from './components/Favorite';
import {
  disabledPinkTheme,
  yellowGreenTheme,
  lightPurpleTheme,
} from '../../assets/colors';

export default function Summary() {
  return (
    <ScrollView>
      <View style={styles.body}>
        <ImageBackground
          source={require('../../assets/images/summary/headerbackground.png')}
          style={styles.header_image}>
          <View style={styles.header}>
            <Text style={styles.header_text}>
              A heartfelt thank you to our eco-champions!
            </Text>
            <Text style={styles.header_subtext}>
              Your dedication to sustainability is truly inspiring, and
              together, we are making a significant difference.
            </Text>
          </View>
        </ImageBackground>

        <View style={styles.eco_journey}>
          <View style={styles.eco_journey_header}>
            <Text style={styles.subheader_text}>My Eco Journey</Text>
            <EarthImage style={styles.subheader_image} />
          </View>

          <View style={styles.sustain_stats_container}>
            <Text style={styles.sustain_stats_title}>Sustainability Stats</Text>

            <View style={styles.stats_container}>
              <Stats value={'10 Kg'} information={'Items Recycled'} />
              <Stats value={'56'} information={'Items Gathered'} />
              <Stats value={'12'} information={'Missions Done'} />
            </View>
          </View>

          <ScrollView horizontal>
            <View style={styles.type_container}>
              <WasteTypeCard
                type="Plastic"
                value={1}
                color={disabledPinkTheme}
              />
              <WasteTypeCard type="Metal" value={2} color={yellowGreenTheme} />
              <WasteTypeCard type="Glass" value={1} color={lightPurpleTheme} />
            </View>
          </ScrollView>

          <View style={styles.last_row}>
            <EcoCoins spent={100} gathered={1500} />
            <Favorite type={'Plastic'} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: backgroundTheme,
    justifyContent: 'center',
    alignItems: 'center',
  },

  header_image: {
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 200,
    marginTop: 10,
  },

  header: {
    justifyContent: 'center',
    gap: 10,
  },

  header_text: {
    fontFamily: 'Poppins-Bold',
    color: blackTheme,
    fontSize: 20,
    width: 200,
  },

  header_subtext: {
    fontFamily: 'Poppins-Regular',
    color: '#FFFFFF',
    fontSize: 12,
    width: 315,
  },

  eco_journey: {
    width: '92%',
    justifyContent: 'center',
    alignItems: 'baseline',
  },

  eco_journey_header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: -30,
  },

  subheader_text: {
    color: blackTheme,
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
  },

  subheader_image: {
    marginRight: '8%',
  },

  sustain_stats_container: {
    backgroundColor: '#16C79A',
    width: '100%',
    borderRadius: 15,
    height: 120,
    zIndex: -1,
  },

  sustain_stats_title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    margin: 10,
  },

  stats_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },

  type_container: {
    marginTop: 20,
    gap: 15,
    flexDirection: 'row',
    marginBottom: 20,
  },

  last_row: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20
  },
});
