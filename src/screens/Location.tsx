import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function EcoHotspots() {

  return (
    <View style={styles.body}>

      <Image 
        style={styles.image}
        source={require('../assets/images/oasis.png')}
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
          source={require('../assets/images/kampus-anggrek.png')}
          style={styles.LocationImage}
        />
        <View style={styles.colContainer}>
          <Text style={styles.LocationText}>Binus Anggrek</Text>
          <Text style={styles.LocationText2}>TFI Office, close to basement entrance</Text>

          <View style={styles.TypeContainer}>
            <View style={styles.SampahContainer}>
              <Text style={styles.SampahText}>
                Plastic
              </Text>
            </View>

            <View style={styles.SampahContainer}>
              <Text style={styles.SampahText}>
                Paper
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.LocationContainer}>
        <Image
          source={require('../assets/images/kampus-syahdan.jpeg')}
          style={styles.LocationImage}
        />
        <View style={styles.colContainer}>
          <Text style={styles.LocationText}>Binus Syahdan</Text>
          <Text style={styles.LocationText2}>Parking lot behind the building</Text>

          <View style={styles.TypeContainer}>
            <View style={styles.SampahContainer}>
              <Text style={styles.SampahText}>
                Glass
              </Text>
            </View>

            <View style={styles.SampahContainer}>
              <Text style={styles.SampahText}>
                Metal
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.LocationContainer}>
        <Image
          source={require('../assets/images/kampus-kijang.jpg')}
          style={styles.LocationImage}
        />
        <View style={styles.colContainer}>
          <Text style={styles.LocationText}>Binus Kijang</Text>
          <Text style={styles.LocationText2}>Parking lot behind the main entrance</Text>

          <View style={styles.TypeContainer}>
            <View style={styles.SampahContainer2}>
              <Text style={styles.SampahText}>
                Cardboard
              </Text>
            </View>
          </View>
        </View>
      </View>

    </View>
    
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FFF9F4',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  image: {
    width: 253,
    height: 170,
    top: 37,
  },

  ExplanationContainer: {
    width: 351,
    height: 129,
    backgroundColor: '#06A385',
    borderRadius: 15,
    padding: 22,
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
    left: 30,
    top: 22,
  },

  LocationContainer: {
    width: 351,
    height: 103,
    backgroundColor: '#FFFFFF',
    borderRadius: 9,
    top: 40, 
    marginBottom: 15,
    padding: 16,
    elevation: 2,
    alignItems: 'center',
    flexDirection: 'row',
  },

  LocationImage: {
    width: 70,
    height: 70,
    borderRadius: 3,
  },

  colContainer: {
    alignItems: 'flex-start',
    padding: 15,
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
    width: 59,
    height: 20,
    backgroundColor: '#E74E8A',
    borderRadius: 4,
    padding: 1,
    marginRight: 5,
  },

  SampahContainer2: {
    width: 81,
    height: 20,
    backgroundColor: '#E74E8A',
    borderRadius: 4,
    padding: 1,
    marginRight: 5,
  },

  SampahText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },

});