import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Int32} from 'react-native/Libraries/Types/CodegenTypes';
import RecycleIcon from './images/recycle';
import {bluePurpleTheme} from '../../../assets/colors';

interface Param {
  spent: Int32;
  gathered: Int32;
}

export const EcoCoins = ({spent, gathered}: Param) => {
  return (
    <View style={styles.box_container}>
      <View style={styles.text_box_container}>
        <View>
          <Text style={styles.text_value}>{spent}</Text>
          <Text style={styles.text_info}>Eco-Coins Spent</Text>
        </View>

        <View>
          <Text style={styles.text_value}>{gathered}</Text>
          <Text style={styles.text_info}>Eco-Coins Gathered</Text>
        </View>
      </View>

      <RecycleIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  box_container: {
    flexDirection: 'row',
    backgroundColor: bluePurpleTheme,
    borderRadius: 15,
    padding: 20,
  },

  text_box_container: {
    justifyContent: 'space-between',
  },

  text_value: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    marginBottom: -10,
  },

  text_info: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
});
