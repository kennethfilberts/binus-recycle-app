import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  backgroundTheme,
  blackTheme,
  hotPinkTheme,
  notchGreyTheme,
  greyTheme,
  disabledHotPinkTheme,
} from '../../../assets/colors';
import ArrowIcon from '../../../assets/icons/ArrowIcon';
import {RootState} from '../../../redux/Store';
import {useSelector} from 'react-redux';
import {BASE_URL} from '@env';
import axios from 'axios';

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

interface PurchaseModalProps {
  isPurchaseModalVisible: boolean;
  onHandleVisibleModalPurchase: (inputBoolean: boolean) => void;
  setIsLoadingVisible: (inputBoolean: boolean) => void;
  setIsSuccess: (inputBoolean: boolean) => void;
  setIsError: (inputBoolean: boolean) => void;
  RewardData: RewardData | null;
  RewardImageData: RewardImageData | null;
}

export const PurchaseModal = ({
  isPurchaseModalVisible,
  onHandleVisibleModalPurchase,
  setIsLoadingVisible,
  setIsSuccess,
  setIsError,
  RewardData,
  RewardImageData,
}: PurchaseModalProps) => {
  const [amount, setAmount] = useState(0);
  const [isValid, setIsValid] = useState(false);
  const tempStudentPoints = useSelector(
    (state: RootState) => state.auth.StudentPoints,
  );
  const studentID = useSelector((state: RootState) => state.auth.StudentID);
  const [studentPoints, setStudentPoints] = useState(tempStudentPoints);

  const handleModalClose = () => {
    onHandleVisibleModalPurchase(false);
    setAmount(0);
  };

  const isSuperUser = useSelector((state: RootState) => state.auth.IsSuperUser);
  const superUserBaseUrl = useSelector(
    (state: RootState) => state.baseUrl.BaseUrl,
  );

  const baseUrl = isSuperUser ? superUserBaseUrl : BASE_URL;

  useEffect(() => {
    console.log(`${baseUrl}/api/v1/student/${studentID}`);
    const fetchEcoCoins = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/v1/student/${studentID}`,
          {
            timeout: 2000,
          },
        );

        setStudentPoints(response.data.data.StudentPoints);
      } catch (error) {
        console.log(error);
      }
    };

    if (isPurchaseModalVisible) {
      fetchEcoCoins();
    }
  }, [baseUrl, isPurchaseModalVisible, studentID]);

  const checkAmount = (currAmount: number) => {
    setIsValid(currAmount * (RewardData?.RewardPoints ?? 0) <= studentPoints);
  };

  const addAmount = () => {
    setAmount(amount + 1);
    checkAmount(amount + 1);
  };

  const subtractAmount = () => {
    if (amount > 0) {
      setAmount(amount - 1);
      checkAmount(amount - 1);

      if (amount - 1 === 0) {
        setIsValid(false);
      }
    }
  };

  const purchaseReward = () => {
    handleModalClose();
    setIsLoadingVisible(true);
    console.log(studentID, RewardData?.RewardID, amount);
    axios
      .post(
        `${baseUrl}/api/v1/purchase`,
        {
          studentID,
          rewardID: RewardData?.RewardID,
          purchaseAmount: amount,
        },
        {
          timeout: 2000,
        },
      )
      .then(() => {
        setTimeout(() => {
          setIsSuccess(true);
        }, 1000);
      })
      .catch(() => {
        setTimeout(() => {
          setIsError(true);
        }, 1000);
      });
  };

  return (
    <Modal visible={isPurchaseModalVisible} transparent={true}>
      <TouchableOpacity
        style={styles.backgroundDim}
        activeOpacity={1}
        onPress={handleModalClose}>
        <TouchableWithoutFeedback>
          <View style={styles.modalContainer}>
            <View style={styles.topNotch} />

            <View style={styles.innerModalContainer}>
              <View style={styles.purchaseModalHeader}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={handleModalClose}
                  style={styles.arrow}>
                  <ArrowIcon />
                </TouchableOpacity>
                <Text style={styles.modalText}>Confirm Redeem</Text>
              </View>

              <View style={styles.rewardInfoContainer}>
                <View style={styles.imageAndInfoContainer}>
                  <View
                    style={[
                      styles.imageContainer,
                      {backgroundColor: RewardImageData?.color},
                    ]}>
                    <Image
                      source={RewardImageData?.source}
                      style={styles.categoryImage}
                    />
                  </View>
                  <View style={styles.infoContainer}>
                    <Text style={styles.rewardName}>
                      {RewardData?.RewardName}
                    </Text>
                    <View style={styles.price}>
                      <Text style={styles.priceText}>
                        {RewardData?.RewardPoints} Eco-Coins
                      </Text>
                    </View>
                  </View>
                </View>
                <View>
                  <Text style={styles.descText}>
                    {RewardData?.RewardDescription}
                  </Text>
                </View>
              </View>
              <View style={styles.purchaseContainer}>
                <View style={styles.amountContainer}>
                  <TouchableOpacity
                    style={styles.amountButton}
                    onPress={subtractAmount}>
                    <Text style={styles.amountActionText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.amountCountText}>{amount}</Text>
                  <TouchableOpacity
                    style={styles.amountButton}
                    onPress={addAmount}>
                    <Text style={styles.amountActionText}>+</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={[
                    styles.redeemButton,
                    !isValid && styles.disabledButton,
                  ]}
                  disabled={!isValid}
                  onPress={purchaseReward}>
                  <Text style={styles.redeemButtonText}>
                    {isValid
                      ? `Redeem ${
                          amount * (RewardData?.RewardPoints ?? 0)
                        } Eco-Coins`
                      : 'You Need More Eco-Coins!'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backgroundDim: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  innerModalContainer: {
    width: '100%',
    height: '93.5%',
    //backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  modalContainer: {
    backgroundColor: backgroundTheme,
    width: '100%',
    height: '50%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
  },
  topNotch: {
    marginTop: '5%',
    backgroundColor: notchGreyTheme,
    width: '18%',
    height: '1.5%',
    borderRadius: 5,
  },
  modalText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: blackTheme,
    width: '75%',
  },
  descText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: blackTheme,
    width: '100%',
    textAlign: 'justify',
  },
  arrow: {
    width: '25%',
  },
  purchaseModalHeader: {
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '90%',
    height: '10%',
  },
  rewardInfoContainer: {
    width: '90%',
    height: '55%',
    justifyContent: 'space-evenly',
    //backgroundColor: 'red',
  },
  imageAndInfoContainer: {
    height: '40%',
    width: '70%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageContainer: {
    height: '100%',
    aspectRatio: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryImage: {
    height: '70%',
    width: '70%',
    resizeMode: 'contain',
  },
  infoContainer: {
    height: '100%',
    justifyContent: 'space-evenly',
    marginLeft: '5%',
    width: '97%',
  },
  price: {
    width: '50%',
    height: '30%',
    borderRadius: 4,
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
    fontSize: 20,
    lineHeight: 25,
  },
  redeemButton: {
    backgroundColor: hotPinkTheme,
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    height: 50,
    borderRadius: 8,
  },
  disabledButton: {
    backgroundColor: disabledHotPinkTheme,
  },
  redeemButtonText: {
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
    fontSize: 12,
  },
  purchaseContainer: {
    height: '20%',
    width: '90%',
    //backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  amountContainer: {
    flexDirection: 'row',
    width: '40%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  amountButton: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: greyTheme,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 0.5,
  },
  amountActionText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    color: blackTheme,
    fontSize: 16,
    lineHeight: 38,
  },
  amountCountText: {
    fontFamily: 'Poppins-SemiBold',
    color: blackTheme,
    fontSize: 20,
    lineHeight: 38,
  },
});
