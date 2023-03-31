import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {SummaryCard} from './components/SummaryCard';

export default function User({route}: any) {
  const {name, point, plastic, glass, metal} = route.params;

  const itemUrl = {
    plastic: require('../../assets/plastic.png'),
    glass: require('../../assets/glass.png'),
    metal: require('../../assets/metal.png'),
  };

  return (
    <View style={styles.body}>
      <View style={styles.card_background}>
        <TouchableOpacity style={styles.profile} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.point}>{point} Points</Text>
      </View>

      <TouchableOpacity style={styles.touchable}>
        <View style={styles.touchable_sign}>
          <Image
            source={require('../../assets/edit.png')}
            style={styles.icon}
          />
          <Text style={styles.touchable_text}>Change Profile</Text>
        </View>

        <Image
          source={require('../../assets/next-icon.png')}
          style={styles.icon}
        />
      </TouchableOpacity>

      <View style={styles.summary}>
        <Text style={styles.summary_text}>Summary</Text>
        <View style={styles.box_summary}>
          <SummaryCard
            imageUrl={itemUrl.plastic}
            itemAmount={plastic}
            itemName="Plastic"
          />
          <SummaryCard
            imageUrl={itemUrl.glass}
            itemAmount={glass}
            itemName="Glass"
          />
          <SummaryCard
            imageUrl={itemUrl.metal}
            itemAmount={metal}
            itemName="Metal"
          />
        </View>
      </View>

      <TouchableOpacity style={styles.touchable}>
        <View style={styles.touchable_sign}>
          <Image
            source={require('../../assets/logout.png')}
            style={styles.icon}
          />
          <Text style={styles.touchable_text}>Sign Out</Text>
        </View>

        <Image
          source={require('../../assets/next-icon.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFCF5',
  },

  card_background: {
    backgroundColor: '#D6DFCC',
    borderRadius: 20,
    width: '80%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  profile: {
    height: 80,
    width: 80,
    backgroundColor: '#9AB5A3',
    borderRadius: 50,
  },

  name: {
    color: 'black',
    fontSize: 16,
    marginTop: 5,
  },

  point: {
    color: 'black',
    fontSize: 18,
    marginTop: 20,
  },

  touchable: {
    width: 300,
    flexDirection: 'row',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  touchable_sign: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    width: 30,
    height: 30,
  },

  touchable_text: {
    fontSize: 20,
    color: 'black',
    marginLeft: 20,
  },

  summary: {
    marginTop: 35,
  },

  summary_text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  box_summary: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 19,
  },
});
