import {View, StyleSheet, FlatList, StatusBar} from 'react-native';
import React from 'react';
import {
  backgroundTheme,
  blackTheme,
  lightBlueTheme,
  lightPinkTheme,
  lightPurpleTheme,
  lightYellowTheme,
} from '../../assets/colors';
import {usePurchaseHistoryData} from '../../redux/hooks/purchaseHistoryHook';
import {InventoryItem} from './components/InventoryItem';
interface RewardImage {
  source: any;
  color: string;
}

interface IRewardImageData {
  [key: string]: RewardImage;
}

const RewardImageData: IRewardImageData = {
  RW001: {
    source: require('../../assets/images/RW001.png'),
    color: lightYellowTheme,
  },
  RW002: {
    source: require('../../assets/images/RW002.png'),
    color: lightPurpleTheme,
  },
  RW003: {
    source: require('../../assets/images/RW003.png'),
    color: lightBlueTheme,
  },
  RW004: {
    source: require('../../assets/images/RW004.png'),
    color: lightPinkTheme,
  },
};

export default function Inventory() {
  return (
    <View style={styles.outerContainer}>
      <StatusBar backgroundColor={backgroundTheme} barStyle="dark-content" />
      <FlatList
        style={styles.recycleHistoryContainer}
        contentContainerStyle={styles.recycleHistoryContainerAlignment}
        data={usePurchaseHistoryData().purchaseHistory}
        renderItem={({item}) => {
          return (
            <InventoryItem
              PurchaseHistoryData={item}
              RewardImageData={RewardImageData[item.RewardID]}
            />
          );
        }}
        keyExtractor={item => item.TransactionID}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: backgroundTheme,
  },
  recycleHistoryContainer: {
    height: '100%',
    width: '100%',
    marginBottom: 20,
    marginTop: 20,
  },
  recycleHistoryContainerAlignment: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    marginTop: '5%',
    width: '90%',
    color: blackTheme,
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
});
