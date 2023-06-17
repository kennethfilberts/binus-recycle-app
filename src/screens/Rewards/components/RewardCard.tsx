import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {
  blackTheme,
  hotPinkTheme,
  shadowColorTheme,
} from '../../../assets/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface RewardData {
  RewardID: string;
  RewardName: string;
  RewardDescription: string;
  RewardPoints: number;
}

interface RewardImageData {
  source: any;
  color: string;
}

interface RewardDataProps {
  RewardData: RewardData;
  RewardImageData: RewardImageData;
  OnHandleSelection: (rewardData: RewardData) => void;
}

const screenWidth = Dimensions.get('window').width;

export const RewardCard = ({
  RewardData,
  RewardImageData,
  OnHandleSelection,
}: RewardDataProps) => {
  return (
    <TouchableOpacity
      style={styles.rewardCard}
      activeOpacity={1}
      onPress={() => {
        OnHandleSelection(RewardData);
      }}>
      <View style={styles.imageAndInfoContainer}>
        <View
          style={[
            styles.imageContainer,
            {backgroundColor: RewardImageData.color},
          ]}>
          <Image source={RewardImageData.source} style={styles.categoryImage} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.rewardName}>{RewardData.RewardName}</Text>
          <View style={styles.price}>
            <Text style={styles.priceText}>
              {RewardData.RewardPoints} Eco-Coins
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rewardCard: {
    height: 95,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 9,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 15,
    shadowOpacity: 0.2,
    elevation: 3,
    shadowColor: shadowColorTheme,
  },
  infoContainer: {
    height: '75%',
    justifyContent: 'space-evenly',
    marginLeft: '5%',
    width: '120%',
  },
  price: {
    width: screenWidth * 0.35,
    height: '40%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: hotPinkTheme,
  },
  priceText: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 12,
  },
  rewardName: {
    fontFamily: 'Poppins-SemiBold',
    color: blackTheme,
    fontSize: 14,
  },
  imageAndInfoContainer: {
    height: '100%',
    width: '70%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: '4%',
  },
  imageContainer: {
    height: '75%',
    aspectRatio: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryImage: {
    height: '70%',
    width: '70%',
    resizeMode: 'contain',
  },
  arrow: {
    marginLeft: 15,
  },
});
