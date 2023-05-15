import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import ArrowIcon from '../../../assets/icons/ArrowIcon';
import {blackTheme, pastelGreenTheme} from '../../../assets/colors';
import {AxiosResponse} from 'axios';

type MissionItemProps = {
  navigation: any;
  category: {
    source: any;
    color: string;
  };
  missionData: AxiosResponse<any, any>;
};

export const MissionItem = ({
  navigation,
  category,
  missionData,
}: MissionItemProps) => {
  return (
    <View style={styles.missionItem}>
      <View style={styles.imageAndInfoContainer}>
        <View
          style={[styles.imageContainer, {backgroundColor: category.color}]}>
          <Image source={category.source} style={styles.categoryImage} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.missionName}>Recycle 10 Plastic(s)</Text>
          <View style={styles.completion}>
            <Text style={styles.completionText}>Completed</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          navigation.navigate('Scan');
        }}
        style={{marginLeft: 15}}>
        <ArrowIcon rotation={180} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  missionItem: {
    height: '27%',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 9,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  infoContainer: {
    height: '75%',
    justifyContent: 'space-evenly',
  },
  completion: {
    backgroundColor: pastelGreenTheme,
    width: '70%',
    height: '30%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  completionText: {
    fontFamily: 'Poppins-Regular',
    color: 'white',
    fontSize: 12,
  },
  missionName: {
    fontFamily: 'Poppins-Medium',
    color: blackTheme,
    fontSize: 14,
  },
  imageAndInfoContainer: {
    height: '100%',
    width: '70%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageContainer: {
    height: '75%',
    aspectRatio: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryImage: {
    height: '75%',
    width: '75%',
    resizeMode: 'contain',
  },
});
