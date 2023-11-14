import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {
  blackTheme,
  hotPinkTheme,
  shadowColorTheme,
} from '../../../assets/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface PurchaseHistoryData {
  TransactionID: string;
  StudentID: string;
  RewardID: string;
  PurchaseAmount: number;
  PurchaseDate: Date;
  RewardName: string;
  RewardDescription: string;
  RewardPoints: number;
}

interface RewardImageData {
  source: any;
  color: string;
}

interface PurchaseHistoryDataProps {
  PurchaseHistoryData: PurchaseHistoryData;
  RewardImageData: RewardImageData;
}

const screenWidth = Dimensions.get('window').width;

export const InventoryItem = ({
  PurchaseHistoryData,
  RewardImageData,
}: PurchaseHistoryDataProps) => {
  const options = {
    hour12: true,
    timeZone: 'UTC',
  };
  const purchaseDateTime = new Date(
    PurchaseHistoryData.PurchaseDate,
  ).toLocaleString(undefined, options);

  return (
    <TouchableOpacity style={styles.inventoryCard} activeOpacity={1}>
      <View style={styles.imageAndInfoContainer}>
        <View
          style={[
            styles.imageContainer,
            {backgroundColor: RewardImageData.color},
          ]}>
          <Image source={RewardImageData.source} style={styles.categoryImage} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.rewardName}>
            {PurchaseHistoryData.RewardName}
          </Text>
          <Text style={styles.dateText}>{purchaseDateTime}</Text>
          <View style={styles.info}>
            <Text style={styles.infoText}>
              {`${PurchaseHistoryData.PurchaseAmount} Purchased (${PurchaseHistoryData.RewardPoints} Each)`}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  inventoryCard: {
    height: 100,
    width: screenWidth * 0.9,
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
  dateText: {
    color: blackTheme,
    fontSize: 12,
    marginBottom: 5,
  },
  infoContainer: {
    height: '75%',
    justifyContent: 'space-evenly',
    marginLeft: '5%',
    width: '120%',
  },
  info: {
    width: '70%',
    height: '40%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: hotPinkTheme,
  },
  infoText: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 12,
  },
  rewardName: {
    fontFamily: 'Poppins-SemiBold',
    color: blackTheme,
    fontSize: 14,
    marginBottom: -10,
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
