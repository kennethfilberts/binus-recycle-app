import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface CardProp {
  imageUrl: any;
  cardName: string;
  navigation: any;
  destination: string;
}

export const SummaryCard = ({imageUrl, cardName, navigation, destination}: CardProp) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        navigation.navigate(destination);
      }}>
      <View style={styles.homeCard}>
        <Image source={imageUrl} style={styles.cardImage} />
        <Text style={styles.cardText}>{cardName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  homeCard: {
    backgroundColor: '#FFFEF3',
    borderColor: '#4E6C58',
    width: 110,
    height: 90,
    borderRadius: 10,
    borderWidth: 2.5,
    justifyContent: 'center',
  },
  cardImage: {
    width: '100%',
    height: 45,
    resizeMode: 'contain',
  },
  cardText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
});
