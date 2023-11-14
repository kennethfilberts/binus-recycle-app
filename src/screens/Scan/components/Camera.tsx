import axios from 'axios';
import {useState} from 'react';
import {launchCamera} from 'react-native-image-picker';
import {BASE_URL} from '@env';

const [imageData, setImageData] = useState<any>();
const [prediction, setPrediction] = useState<any>();
const urlModel = `${BASE_URL}/api/v1/model`;


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

const openCamera = ({navigation}: any) => {
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
          navigation.navigate('Scan');
        }
      }
    },
  );
};

export default {openCamera};
