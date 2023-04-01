import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

interface SummaryProp {
  imageUrl: any;
  itemAmount: number;
  itemName: string;
}

export const SummaryCard = ({imageUrl, itemAmount, itemName}: SummaryProp) => {
  return (
    <View style={styles.box_item}>
      <Image source={imageUrl} />
      <Text style={styles.amount_text}>{itemAmount} kg</Text>
      <Text style={styles.item_text}>{itemName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box_item: {
    height: 150,
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D6DFCC',
    borderRadius: 10,
  },

  amount_text: {
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
    marginTop: 10,
    fontSize: 16,
  },

  item_text: {
    fontFamily: 'Poppins-Medium',
    color: 'black',
    fontSize: 14,
  },
});
