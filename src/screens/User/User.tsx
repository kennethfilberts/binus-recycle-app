import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {SummaryCard} from './components/SummaryCard';

export default function User({route}: any) {
  const {name, point, plastic, glass, metal} = route.params;

  const itemUrl = {
    plastic: require('../../assets/images/plastic.png'),
    glass: require('../../assets/images/glass.png'),
    metal: require('../../assets/images/metal.png'),
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
            source={require('../../assets/images/edit.png')}
            style={styles.icon}
          />
          <Text style={styles.touchable_text}>Change Profile</Text>
        </View>

        <Image
          source={require('../../assets/images/next-icon.png')}
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
            source={require('../../assets/images/logout.png')}
            style={styles.icon}
          />
          <Text style={styles.touchable_text}>Sign Out</Text>
        </View>

        <Image
          source={require('../../assets/images/next-icon.png')}
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
    fontFamily: 'Poppins-SemiBold',
  },

  point: {
    color: 'black',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
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
    width: 28,
    height: 28,
  },

  touchable_text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: 'black',
    marginLeft: 20,
  },

  summary: {
    marginTop: 35,
  },

  summary_text: {
    fontFamily: 'Poppins-Medium',
    color: 'black',
    fontSize: 20,
    marginBottom: 10,
  },

  box_summary: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 19,
  },
});
