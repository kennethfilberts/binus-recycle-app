import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {blackTheme} from '../../../assets/colors';

interface Location {
  StationID: String;
  BuildingID: String;
  BuildingName: String;
  StationLocation: String;
  CategoryID: String;
  CategoryName: String;
}

interface StationCardProps {
  location: Location[];
  imageSource: {[key: string]: any};
}

export const StationCard = ({location, imageSource}: StationCardProps) => {
  return (
    <View style={styles.LocationContainer}>
      <Image source={imageSource} style={styles.LocationImage} />

      <View style={styles.colContainer}>
        <Text style={styles.LocationText}>
          Binus {location[0].BuildingName}
        </Text>

        <Text style={styles.LocationText2}>{location[0].StationLocation}</Text>

        <View style={styles.TypeContainer}>
          {location
            .map(item => item.CategoryName)
            .filter(
              (category, index, self) =>
                category && self.indexOf(category) === index,
            )
            .map((category, index) => (
              <View style={styles.SampahContainer} key={index}>
                <Text style={styles.SampahText}>{category}</Text>
              </View>
            ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  LocationTitle: {
    color: blackTheme,
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    marginRight: 'auto',
    left: '5%',
    top: '2.7%',
  },
  LocationText2: {
    color: blackTheme,
    fontSize: 11,
    fontFamily: 'Poppins-Regular',
  },
  LocationText: {
    color: blackTheme,
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
  },
  TypeContainer: {
    flexDirection: 'row',
  },
  SampahText: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  SampahContainer: {
    backgroundColor: '#E74E8A',
    borderRadius: 4,
    paddingVertical: '0.6%',
    paddingHorizontal: '3%',
    marginRight: '3.5%',
  },
  LocationContainer: {
    width: '89%',
    height: '13%',
    backgroundColor: '#FFFFFF',
    borderRadius: 9,
    top: '10%',
    marginBottom: '4%',
    padding: '4%',
    elevation: 5,
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
