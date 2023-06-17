import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface CardProp {
  imageUrl: any;
  cardName: string;
  navigation: any;
  color: string;
  destination: string;
}

export const MenuCard = ({
  imageUrl,
  cardName,
  navigation,
  color,
  destination,
}: CardProp) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        navigation.navigate(destination); //Change this
      }}>
      <View style={[styles.homeCard, {backgroundColor: color}]}>
        <View style={styles.homeCardInner}>
          <Image
            source={imageUrl}
            style={[styles.cardImage, {backgroundColor: color}]}
          />
          <Text style={styles.cardText}>{cardName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  homeCard: {
    width: 128,
    height: 128,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeCardInner: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: '50%',
    height: 55,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
  },
  cardText: {
    textAlign: 'left',
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
    fontSize: screenWidth * 0.05,
    width: '100%',
    lineHeight: 24,
  },  
});
