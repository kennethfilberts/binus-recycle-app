import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface QuestProp {
  quest: {
    imageUrl: any;
    recycleTitle: string;
    recycleAmount: number;
    navigation: any;
  };
}

export const QuestCard = ({quest}: QuestProp) => {
  return (
    <TouchableOpacity
      style={styles.questCard}
      activeOpacity={1}
      onPress={() => {
        quest.navigation.navigate('Scan');
      }}>
      <Image source={quest.imageUrl} style={styles.cardImage} />
      <View style={styles.recycleContainer}>
        <Text style={styles.recycleTitle}>{quest.recycleTitle}</Text>
        <Text style={styles.recycleGoal}>
          0 / {quest.recycleAmount} Recycled
        </Text>
      </View>

      <Image
        style={styles.nextIcon}
        source={require('../../../assets/images/next-icon.png')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  questCard: {
    height: 75,
    backgroundColor: '#FFFEF3',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    display: 'flex',
    shadowColor: '#75797d',
    shadowOpacity: 0.2,
    elevation: 10,
  },

  cardImage: {
    marginLeft: 15,
    height: 40,
    resizeMode: 'contain',
    transform: [{rotate: '45deg'}],
  },

  recycleTitle: {
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
  },

  recycleGoal: {
    color: 'black',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
  },

  nextIcon: {
    marginRight: 15,
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },

  recycleContainer: {
    marginLeft: 15,
    width: '70%',
  },
});
