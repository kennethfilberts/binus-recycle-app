import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {SummaryCard} from './components/HomeCard';
import {QuestBox} from './components/QuestBox';

export default function Home({navigation}: any) {
  let name = 'Binusian';
  const [point, setPoint] = useState(100);
  const [plastic, setPlastic] = useState(2);
  const [glass, setGlass] = useState(3);
  const [metal, setMetal] = useState(0.5);

  const imageUrl = {
    location: require('../../assets/images/location-icon.png'),
    summary: require('../../assets/images/summary-icon.png'),
    faq: require('../../assets/images/faq-icon.png'),
  };

  return (
    <View style={styles.body}>
      {/* Header */}
      <View style={styles.headerBox}>
        <View style={styles.text_box}>
          <Text style={styles.morning}>Good Morning, {name}</Text>
          <Text style={styles.point}>Points: {point}</Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.user}
            onPress={() => {
              navigation.navigate('User Profile', {
                name: name,
                point: point,
                glass: glass,
                metal: metal,
                plastic: plastic,
              });
            }}
          />
        </View>
      </View>

      <View style={styles.quoteBox}>
        <Text style={styles.quoteText}>
          One Small Change Can Change The World
        </Text>
      </View>

      <View style={styles.homeCardContainer}>
        <SummaryCard
          imageUrl={imageUrl.location}
          cardName={'Location'}
          navigation={navigation}
          destination={'Scan'}
        />
        <SummaryCard
          imageUrl={imageUrl.summary}
          cardName={'Summary'}
          navigation={navigation}
          destination={'Green Highlights'}
        />
        <SummaryCard
          imageUrl={imageUrl.faq}
          cardName={'FAQ'}
          navigation={navigation}
          destination={'Scan'}
        />
      </View>

      <QuestBox navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFCF5',
  },

  headerBox: {
    backgroundColor: '#61876E',
    height: '16%',
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },

  text_box: {
    gap: 6,
  },

  morning: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
  },

  point: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },

  user: {
    backgroundColor: '#E9E9DB',
    borderRadius: 50,
    height: 60,
    width: 60,
  },

  quoteBox: {
    backgroundColor: '#859671',
    width: '87%',
    height: '6%',
    borderRadius: 10,
    justifyContent: 'center',
    shadowColor: '#75797d',
    shadowOpacity: 0.2,
    elevation: 10,
  },

  quoteText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
  },

  homeCardContainer: {
    width: '87%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
