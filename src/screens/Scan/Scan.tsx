import {ImageBackground, StyleSheet, View, Image} from 'react-native';
import React, {useState} from 'react';
import {launchCamera} from 'react-native-image-picker';
import {backgroundTheme, darkGreenTheme, pastelGreenTheme} from '../../assets/colors';
import CategoryCard from './Components/CategoryCard';
import ScanIcon from '../../assets/icons/ScanIcon';
import axios from 'axios';

export default function Scan() {
  const [imageData, setImageData] = useState<any>();
  const [prediction, setPrediction] = useState<any>();
  const urlModel = `${process.env.BASE_URL}/api/v1/model`;

  const garbageClassification = async (imageData: any) => {
    const formData = new FormData();
    formData.append('image', {
      name: 'image.jpg',
      type: 'image/jpeg',
      uri: imageData.uri,
    });

    try {
      const response = await axios.post(urlModel, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        console.log(response.data.class);
        setPrediction(response.data.class);
      } else {
        console.log(response.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const openCamera = () => {
    launchCamera(
      {mediaType: 'photo', quality: 1, includeBase64: true},
      async res => {
        if (res.didCancel) {
          console.log('User cancelled');
        } else if (res.errorCode) {
          console.log(res.errorMessage);
        } else {
          if (res.assets != null) {
            const data = res.assets[0];
            setImageData(data);
            garbageClassification(data);
          }
        }
      },
    );
  };

  return (
    <View style={styles.body}>
      {imageData != null && (
        <Image
          source={{uri: imageData.uri}}
          style={styles.image}/>
      )}

      <ScanIcon
        navigation={''}
        number={2}
        onPress={openCamera}
        style={styles.button}
      />

      {imageData != null && (<CategoryCard type={prediction} />)}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: backgroundTheme,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    marginTop: -40,
    marginBottom: -20,
  },

  image: {
    width: '70%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: darkGreenTheme,
    borderWidth: 5,
    borderRadius: 20,
  },
});
