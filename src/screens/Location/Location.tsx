import {StyleSheet, Text, View, Image, ScrollView, Dimensions} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios, { AxiosResponse } from 'axios';

const screenHeight = Dimensions.get('window').height;

interface Location {
  StationID : String;
  BuildingID : String;
  BuildingName : String;
  StationLocation : String;
  CategoryID : String;
  CategoryName : String;
}

const imagePaths: { [key: string]: any } = {
  anggrek: require('../../assets/images/anggrek.png'),
  syahdan: require('../../assets/images/syahdan.png'),
  kijang: require('../../assets/images/kijang.png'),
};


export default function EcoHotspots() {

  const [Location1, setLocation1] = useState<Location[]>([]);
  const [Location2, setLocation2] = useState<Location[]>([]);
  const [Location3, setLocation3] = useState<Location[]>([]);

  useEffect(()=>{

    console.log(`${process.env.BASE_URL}/api/v1/station`);
    axios
      .get<Location[]>(`${process.env.BASE_URL}/api/v1/station`)
      .then((response : AxiosResponse) => {
        console.log('Response: ', response.data.data);
        
        const { data } = response.data;

        data.forEach((location: Location) => {
          if (location.StationID === 'ST001') {
            setLocation1((prevLocation1) => [...prevLocation1, location]);
          } else if (location.StationID === 'ST002') {
            setLocation2((prevLocation2) => [...prevLocation2, location]);
          } else if (location.StationID === 'ST003') {
            setLocation3((prevLocation3) => [...prevLocation3, location]);
          }
        });
      });
  }, []);

  return (
    <ScrollView>
      
      <View style={styles.body}>
        <Image 
          style={styles.image}
          source={require('../../assets/images/oasis.png')}
        />

        <View style={styles.ExplanationContainer}>
          <Text style={styles.ExplanationText}>
            Discover convenient recycling stations across campus. Dispose of recyclable materials responsibly and help create a greener environment. Join the movement, recycle at Eco Hotspots!
          </Text>
        </View>

        <Text style={styles.LocationTitle}>
          Locations
        </Text>

          <View style={styles.LocationContainer}>
              <Image
                  source={imagePaths[Location1[0].BuildingName.toLowerCase()]}
                  style={styles.LocationImage}
              />

              <View style={styles.colContainer}>

                  <Text style={styles.LocationText}>Binus {Location1[0].BuildingName}</Text>

                  <Text style={styles.LocationText2}>{Location1[0].StationLocation}</Text>

                    <View style={styles.TypeContainer}>
                        {Location1.map((location, index) => location.CategoryName)
                          .filter((category, index, self) => category && self.indexOf(category) === index)
                          .map((category, index) => (
                            <View style={styles.SampahContainer} key={index}>
                              <Text style={styles.SampahText}>{category}</Text>
                            </View>
                          ))}
                    </View>

              </View>

          </View>

          <View style={styles.LocationContainer}>
              <Image
                  source={imagePaths[Location2[0].BuildingName.toLowerCase()]}
                  style={styles.LocationImage}
              />
              <View style={styles.colContainer}>

                  <Text style={styles.LocationText}>Binus {Location2[0].BuildingName}</Text>

                  <Text style={styles.LocationText2}>{Location2[0].StationLocation}</Text>

                  <View style={styles.TypeContainer}>
                        {Location2.map((location, index) => location.CategoryName)
                          .filter((category, index, self) => category && self.indexOf(category) === index)
                          .map((category, index) => (
                            <View style={styles.SampahContainer} key={index}>
                              <Text style={styles.SampahText}>{category}</Text>
                            </View>
                          ))}
                    </View>

              </View>
          </View>

          <View style={styles.LocationContainer}>
              <Image
                  source={imagePaths[Location3[0].BuildingName.toLowerCase()]}
                  style={styles.LocationImage}
              />
              <View style={styles.colContainer}>

                  <Text style={styles.LocationText}>Binus {Location3[0].BuildingName}</Text>

                  <Text style={styles.LocationText2}>{Location3[0].StationLocation}</Text>

                  <View style={styles.TypeContainer}>
                        {Location3.map((location, index) => location.CategoryName)
                          .filter((category, index, self) => category && self.indexOf(category) === index)
                          .map((category, index) => (
                            <View style={styles.SampahContainer} key={index}>
                              <Text style={styles.SampahText}>{category}</Text>
                            </View>
                          ))}
                  </View>

              </View>

          </View>

          
        </View>

    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FFF9F4',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: screenHeight,
  },

  image: {
    width: '72%',
    height: '23%',
    top: '5%',
  },

  ExplanationContainer: {
    width: '89%',
    height: '16%',
    backgroundColor: '#06A385',
    borderRadius: 15,
    padding: '6%',
  },

  ExplanationText: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },

  LocationTitle: {
    color: '#000000',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    marginRight: 'auto',
    left: '5%',
    top: '2.7%',
  },

  LocationText: {
      color: '#000000',
      fontSize: 14,
      fontFamily: 'Poppins-Bold',
  },

  LocationText2: {
      color: '#000000',
      fontSize: 11,
      fontFamily: 'Poppins-Regular',
  },

  TypeContainer:{
      flexDirection: 'row',
  },

  SampahContainer: {
      backgroundColor: '#E74E8A',
      borderRadius: 4,
      paddingVertical: "0.6%",
      paddingHorizontal: "3%", 
      marginRight: "3.5%",
  },

  SampahText: {
      color: '#FFFFFF',
      fontSize: 12,
      fontFamily: 'Poppins-Regular',
      textAlign: 'center',
  },

  LocationContainer: {
      width: '89%',
      height: '13%',
      backgroundColor: '#FFFFFF',
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
      padding: "4.5%",
  },
});