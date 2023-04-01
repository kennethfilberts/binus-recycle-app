import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {QuestCard} from './QuestCard';

export const QuestBox = ({navigation}: any) => {
  const quests = {
    questOne: {
      imageUrl: require('../../../assets/images/plastic.png'),
      recycleTitle: 'Recycle 10 Plastic Bottles',
      recycleAmount: 10,
      navigation: navigation,
    },
    questTwo: {
      imageUrl: require('../../../assets/images/metal.png'),
      recycleTitle: 'Recycle 2 Cans',
      recycleAmount: 2,
      navigation: navigation,
    },
    questThree: {
      imageUrl: require('../../../assets/images/glass.png'),
      recycleTitle: 'Recycle 1 Glass',
      recycleAmount: 1,
      navigation: navigation,
    },
  };
  return (
    <View style={styles.questBox}>
      <View style={styles.questHeader}>
        <Text style={styles.questHeaderTitle}>Daily Quest</Text>
        <Text style={styles.questHeaderSubText}>
          Complete daily quest to earn more points
        </Text>
      </View>

      <View style={styles.questContainer}>
        <QuestCard quest={quests.questOne} />
        <QuestCard quest={quests.questTwo} />
        <QuestCard quest={quests.questThree} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  questBox: {
    width: '87%',
    height: '45%',
    backgroundColor: '#859671',
    borderRadius: 10,
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    shadowColor: '#75797d',
    shadowOpacity: 0.2,
    elevation: 10,
  },

  questHeader: {
    width: '92%',
    height: '10%',
    alignContent: 'center',
    justifyContent: 'center',
  },

  questHeaderTitle: {
    fontFamily: 'Poppins-SemiBold',
    color: '#FFFFFF',
    fontSize: 18,
  },

  questHeaderSubText: {
    fontFamily: 'Poppins-Regular',
    color: '#FFFFFF',
    fontSize: 12,
  },

  questContainer: {
    width: '92%',
    height: '74%',
    justifyContent: 'space-between',
  },
});
