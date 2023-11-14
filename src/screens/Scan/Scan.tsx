import {StyleSheet, View, Image, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import {backgroundTheme, blackTheme} from '../../assets/colors';
import CategoryCard from './components/CategoryCard';
import ScanIcon from '../../assets/icons/ScanIcon';
import axios from 'axios';
import {BASE_URL} from '@env';

export default function Scan({navigation, route}: any) {
  const [prediction, setPrediction] = useState<any>();
  const urlModel = `${BASE_URL}/api/v1/model`;
  

  useEffect(() => {
    const garbageClassification = async () => {
      const formData = new FormData();
      formData.append('image', {
        name: 'image.jpg',
        type: 'image/jpeg',
        uri: route.params.route,
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

    garbageClassification();
  }, [route.params.route, urlModel]);

  return (
    <View style={styles.body}>
      {route.params != null && (
        <Image source={{uri: route.params.route}} style={styles.image} />
      )}
      <StatusBar backgroundColor={backgroundTheme} barStyle="dark-content" />

      <ScanIcon navigation={navigation} style={styles.button} />

      {route.params != null && (
        <CategoryCard type={prediction} navigation={navigation} />
      )}
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
    borderColor: blackTheme,
    borderWidth: 2,
    borderRadius: 20,
  },
});
