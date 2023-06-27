import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {StationCard} from './components/StationCard';
import {StationCardLoading} from './components/StationCardLoading';
import {
  backgroundTheme,
  blackTheme,
  lightGreenTheme,
} from '../../assets/colors';
import {BASE_URL} from '@env';

const screenHeight = Dimensions.get('window').height;

interface Location {
  StationID: String;
  BuildingID: String;
  BuildingName: String;
  StationLocation: String;
  CategoryID: String;
  CategoryName: String;
}

interface LocationResponse {
  data: Location[];
}

const imagePaths: {[key: string]: any} = {
  anggrek: require('../../assets/images/anggrek.png'),
  syahdan: require('../../assets/images/syahdan.png'),
  kijang: require('../../assets/images/kijang.png'),
};

export default function EcoHotspots() {
  const [Location1, setLocation1] = useState<Location[]>([]);
  const [Location2, setLocation2] = useState<Location[]>([]);
  const [Location3, setLocation3] = useState<Location[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    console.log(`${BASE_URL}/api/v1/station`);

    const loadStations = async () => {
      try {
        const res = await axios.get<LocationResponse>(
          `${BASE_URL}/api/v1/station`,
          {
            timeout: 2000,
          },
        );

        const data = res.data.data;

        data.forEach((location: Location, index: number) => {
          if (location.StationID === 'ST001') {
            setLocation1(prevLocation1 => [...prevLocation1, location]);
          } else if (location.StationID === 'ST002') {
            setLocation2(prevLocation2 => [...prevLocation2, location]);
          } else if (location.StationID === 'ST003') {
            setLocation3(prevLocation3 => [...prevLocation3, location]);
          }

          if (index === data.length - 1) {
            setLoading(false);
          }
        });
      } catch (error) {
        console.log(error);
      }
    };

    loadStations();
  }, []);

  return (
    <ScrollView>
      <StatusBar backgroundColor={backgroundTheme} barStyle="dark-content" />

      <View style={styles.body}>
        <Image
          style={styles.image}
          source={require('../../assets/images/ecohotspot.png')}
        />

        <View style={styles.ExplanationContainer}>
          <Text style={styles.ExplanationText}>
            Discover convenient recycling stations across campus. Dispose of
            recyclable materials responsibly and help create a greener
            environment. Join the movement, recycle at Eco Hotspots!
          </Text>
        </View>

        <Text style={styles.LocationTitle}>Locations</Text>

        {isLoading ? (
          <>
            <StationCardLoading />
            <StationCardLoading />
            <StationCardLoading />
          </>
        ) : (
          <>
            <StationCard
              location={Location1}
              imageSource={imagePaths[Location1[0].BuildingName.toLowerCase()]}
            />
            <StationCard
              location={Location2}
              imageSource={imagePaths[Location2[0].BuildingName.toLowerCase()]}
            />
            <StationCard
              location={Location3}
              imageSource={imagePaths[Location3[0].BuildingName.toLowerCase()]}
            />
          </>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: backgroundTheme,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: screenHeight,
  },
  image: {
    width: '72%',
    height: '25%',
    top: '5%',
  },
  ExplanationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '89%',
    height: '16%',
    backgroundColor: lightGreenTheme,
    borderRadius: 15,
    padding: '5%',
  },
  ExplanationText: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  LocationTitle: {
    color: blackTheme,
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    marginRight: 'auto',
    left: '5%',
    top: '2.7%',
  },
  LocationText: {
    color: blackTheme,
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
  },
  LocationText2: {
    color: blackTheme,
    fontSize: 11,
    fontFamily: 'Poppins-Regular',
  },
  TypeContainer: {
    flexDirection: 'row',
  },
  SampahContainer: {
    backgroundColor: lightGreenTheme,
    borderRadius: 4,
    paddingVertical: '0.6%',
    paddingHorizontal: '3%',
    marginRight: '3.5%',
  },
  SampahText: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  LocationContainer: {
    width: '89%',
    height: '13%',
    backgroundColor: 'white',
    borderRadius: 9,
    top: '10%',
    marginBottom: '4%',
    padding: '4%',
    elevation: 2,
    alignItems: 'center',
    flexDirection: 'row',
  },
  LocationImage: {
    width: '22%',
    height: '92%',
    borderRadius: 3,
  },
  colContainer: {
    alignItems: 'flex-start',
    padding: '4.5%',
  },
});
