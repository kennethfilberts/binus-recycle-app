import React from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Text,
  Dimensions,
  ActivityIndicator,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {blackTheme, whiteTheme} from '../../../assets/colors';
import SuccessIcon from '../../../assets/icons/SuccessIcon';
import ErrorIcon from '../../../assets/icons/ErrorIcon';

interface CustomModalProps {
  isVisible: boolean;
  isError: boolean;
  isSuccess: boolean;
  setIsLoadingVisible: (inputBoolean: boolean) => void;
  setIsError: (inputBoolean: boolean) => void;
}

export const LoadingModal = ({
  isVisible,
  isError,
  isSuccess,
  setIsLoadingVisible,
  setIsError,
}: CustomModalProps) => {
  const handleModalClose = () => {
    if (isError || isSuccess) {
      setIsLoadingVisible(false);
      setIsError(false);
    }
  };
  return (
    <Modal visible={isVisible} transparent={true}>
      <TouchableOpacity
        style={styles.backgroundDim}
        activeOpacity={1}
        onPress={handleModalClose}>
        <TouchableWithoutFeedback>
          <View style={styles.modalContainer}>
            <View style={styles.innerModalContainer}>
              {isSuccess ? (
                <>
                  <SuccessIcon />
                  <Text style={styles.modalText}>Redeem Success!</Text>
                </>
              ) : isError ? (
                <>
                  <ErrorIcon />
                  <Text style={styles.modalText}>Redeem Failed!</Text>
                </>
              ) : (
                <>
                  <ActivityIndicator
                    style={styles.onLoading}
                    size={screenWidth * 0.45}
                    color={blackTheme}
                  />
                  <Text style={styles.modalText}>Redeeming Reward...</Text>
                </>
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  backgroundDim: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: whiteTheme,
    height: screenWidth * 0.8,
    width: screenWidth * 0.8,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: blackTheme,
  },
  onLoading: {
    borderRadius: 20,
  },
  innerModalContainer: {
    height: '80%',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
