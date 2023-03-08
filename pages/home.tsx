import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Home({navigation} : any) {
  let name = 'Binusian';
  let point = 12;

  return (
    <View style={styles.body}>
      {/* Header */}
      <View style={styles.box}>
        <View style={styles.text_box}>
          <Text style={styles.morning}>Good Morning, {name}</Text>
          <Text style={styles.point}>Points: {point}</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.user} onPress={() => {navigation.navigate('Account')}}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FFFCF5',
  },

  box: {
    backgroundColor: '#61876E',
    height: '16%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },

  text_box:{
    gap: 6,
  },

  morning: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },

  point: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },

  user: {
    backgroundColor: '#E9E9DB',
    borderRadius: 50,
    height: 60,
    width: 60,
  },
});
