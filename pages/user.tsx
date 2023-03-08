import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

export default function User({route}: any) {
  const {name, point, plastic, glass, metal} = route.params;

  return (
    <View style={styles.body}>
      <View style={styles.card_background}>
        <TouchableOpacity style={styles.profile} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.point}>{point} Points</Text>
      </View>

      <TouchableOpacity style={styles.touchable}>
        <View style={styles.touchable_sign}>
          <Image source={require('../public/edit.png')} style={styles.icon} />
          <Text style={styles.touchable_text}>Change Profile</Text>
        </View>

        <Image
          source={require('../public/next-icon.png')}
          style={styles.icon}
        />
      </TouchableOpacity>

      <View style={styles.summary}>
        <Text style={styles.summary_text}>Summary</Text>

        <View style={styles.box_summary}>
          <View style={styles.box_item}>
            <Image source={require('../public/plastic.png')} />
            <Text style={styles.ammount_text}>{plastic} kg</Text>
            <Text style={styles.item_text}>Plastic</Text>
          </View>

          <View style={styles.box_item}>
            <Image source={require('../public/glass.png')} />
            <Text style={styles.ammount_text}>{glass} kg</Text>
            <Text style={styles.item_text}>Glass</Text>
          </View>

          <View style={styles.box_item}>
            <Image source={require('../public/metal.png')} />
            <Text style={styles.ammount_text}>{metal} kg</Text>
            <Text style={styles.item_text}>Metal</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.touchable}>
        <View style={styles.touchable_sign}>
          <Image source={require('../public/logout.png')} style={styles.icon} />
          <Text style={styles.touchable_text}>Sign Out</Text>
        </View>

        <Image
          source={require('../public/next-icon.png')}
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

  box_item: {
    height: 150,
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D6DFCC',
    borderRadius: 10,
  },

  ammount_text: {
    color: 'black',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },

  item_text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
