import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  Dimensions,
  FlatList,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  backgroundTheme,
  blackTheme,
  lightBlueTheme,
  lightPinkTheme,
  lightPurpleTheme,
  lightYellowTheme,
} from '../../assets/colors';
import {useRewardsData} from '../../redux/hooks/rewardsHook';
import TreasureTroveCard from './components/TreasureTroveCard';
import {RewardCard} from './components/RewardCard';
import {PurchaseModal} from './components/PurchaseModal';
import {LoadingModal} from './components/LoadingModal';
import InventoryIcon from '../../assets/icons/InventoryIcon';
import {navigate} from '../../screens/RootNavigation';

interface RewardData {
  RewardID: string;
  RewardName: string;
  RewardDescription: string;
  RewardPoints: number;
}

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

interface RewardsProps {
  onPointChange: () => void;
  setShouldRefresh: (inputBoolean: boolean) => void;
  shouldRefresh: boolean;
}

const Rewards = ({
  onPointChange,
  setShouldRefresh,
  shouldRefresh,
}: RewardsProps) => {
  const [modalPurchaseVisible, setModalPurchaseVisible] = useState(false);
  const [selectedReward, setSelectedReward] = useState<RewardData | null>(null);
  const rewards = useRewardsData().rewards;
  const [refreshing, setRefreshing] = useState(false);

  const [isLoadingVisible, setIsLoadingVisible] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSelection = (reward: any) => {
    setSelectedReward(reward);
    setModalPurchaseVisible(true);
  };

  useEffect(() => {
    if ((isSuccess && !isLoadingVisible) || refreshing) {
      onPointChange();
      setIsSuccess(false);
    }
  }, [isSuccess, isLoadingVisible, onPointChange, refreshing]);

  useEffect(() => {
    if (shouldRefresh) {
      console.log('called');
      setShouldRefresh(false);
    }
  }, [setShouldRefresh, shouldRefresh]);

  const onHandleRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);

  return (
    <View style={styles.body}>
      {modalPurchaseVisible || isLoadingVisible ? (
        <StatusBar backgroundColor={blackTheme} barStyle="dark-content" />
      ) : (
        <StatusBar backgroundColor={backgroundTheme} barStyle="dark-content" />
      )}
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Redeem Rewards</Text>
        </View>

        <ScrollView
          style={styles.treasureTroveContainerScrollViewStyle}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onHandleRefresh}
            />
          }>
          <View style={styles.treasureTroveContainer}>
            <TreasureTroveCard refreshing={refreshing} isSuccess={isSuccess} />
          </View>
        </ScrollView>

        <View style={styles.rewardCardContainer}>
          <View style={styles.rewardHeaderContainer}>
            <Text style={styles.headerText}>Rewards</Text>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                navigate('Inventory');
              }}>
              <InventoryIcon />
            </TouchableOpacity>
          </View>
          <FlatList
            style={styles.rewardListContainer}
            data={rewards}
            renderItem={({item}) => {
              return (
                <RewardCard
                  RewardData={item}
                  RewardImageData={RewardImageData[item.RewardID]}
                  OnHandleSelection={handleSelection}
                />
              );
            }}
            keyExtractor={item => item.RewardID}
          />
        </View>
      </View>

      <PurchaseModal
        isPurchaseModalVisible={modalPurchaseVisible}
        onHandleVisibleModalPurchase={setModalPurchaseVisible}
        setIsLoadingVisible={setIsLoadingVisible}
        setIsSuccess={setIsSuccess}
        setIsError={setIsError}
        RewardData={selectedReward}
        RewardImageData={
          selectedReward && RewardImageData[selectedReward.RewardID]
        }
      />
      <LoadingModal
        isVisible={isLoadingVisible}
        isSuccess={isSuccess}
        isError={isError}
        setIsLoadingVisible={setIsLoadingVisible}
        setIsError={setIsError}
      />
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;

console.log(screenWidth);
const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: backgroundTheme,
    width: screenWidth,
    height: '100%',
  },
  headerContainer: {
    alignItems: 'center',
    width: screenWidth,
    marginVertical: '3%',
  },
  headerText: {
    color: blackTheme,
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
  treasureTroveContainer: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: '2.7%',
  },
  rewardCardContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: '5%',
    width: '90%',
    height: '65%',
    paddingBottom: '10%',
  },
  rewardListContainer: {
    height: '100%',
    width: '100%',
  },
  treasureTroveContainerScrollViewStyle: {
    height: '27%',
  },
  rewardHeaderContainer: {
    width: '100%',
    diplay: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Rewards;
