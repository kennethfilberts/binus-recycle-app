import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface StatsProp {
    value: any,
    information: string
}

export default function Stats({value, information} : StatsProp) {
  return (
    <View style={styles.stats_box}>
      <Text style={styles.value_text}>{value}</Text>
      <Text style={styles.information_text}>{information}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  stats_box: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  value_text:{
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
    fontSize: 23,
    marginBottom: -5
  },

  information_text:{
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
    fontSize: 12
  }
});
