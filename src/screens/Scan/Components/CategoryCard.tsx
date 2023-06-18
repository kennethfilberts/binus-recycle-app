import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import GlassIcon from '../../Summary/components/images/glass';
import PlasticIcon from '../../Summary/components/images/plastic';
import MetalIcon from '../../Summary/components/images/metal';
import ArrowIcon from '../../../assets/icons/ArrowIcon';
import {
  blackTheme,
  greyTheme,
  lightGreenTheme,
  lightPurpleTheme,
  lightYellowTheme,
  redTheme,
  yellowGreenTheme,
} from '../../../assets/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface setParam {
  type: String;
  navigation: any;
}

const getColor = (type: String) => {
  switch (type) {
    case 'Glass':
      return lightPurpleTheme;
    case 'Plastic':
      return lightYellowTheme;
    case 'Metal':
      return yellowGreenTheme;
    case 'Cardboard':
      return lightGreenTheme;
    case 'Paper':
      return redTheme;
  }
};

const getIcon = (type: String) => {
  switch (type) {
    case 'Glass':
      return (
        <GlassIcon width={384} height={384} svgHeight={60} svgWidth={60} />
      );
    case 'Plastic':
      return (
        <PlasticIcon width={384} height={384} svgHeight={60} svgWidth={60} />
      );
    case 'Metal':
      return (
        <MetalIcon width={384} height={384} svgHeight={60} svgWidth={60} />
      );
    case 'Cardboard':
      return (
        <Image
          source={require('../../../assets/images/cardboard.png')}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{width: 60, height: 60}}
        />
      );
    case 'Paper':
      return (
        <Image
          source={require('../../../assets/images/paper.png')}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{width: 60, height: 60}}
        />
      );
  }
};

export default function CategoryCard({navigation, type}: setParam) {
  const getType = getIcon(type);
  const color = getColor(type);

  return (
    <View style={styles.outerBody}>
      <View style={styles.body}>
        <View style={styles.imageInfoContainer}>
          <View style={[styles.image_box, {backgroundColor: color}]}>
            <View>{getType}</View>
          </View>

          <View style={styles.text_box}>
            <Text style={styles.text}>{type}</Text>
            <Text style={styles.sub_text}>See Location</Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.navigate('Eco Hotspots');
          }}>
          <ArrowIcon rotation={180} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  outerBody: {
    width: screenWidth * 0.85,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: blackTheme,
    borderWidth: 2,
    marginBottom: 5,
    gap: 5,
  },

  imageInfoContainer: {
    flexDirection: 'row',
  },

  image_box: {
    backgroundColor: greyTheme,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },

  text_box: {
    flexDirection: 'column',
    margin: 10,
  },

  text: {
    color: blackTheme,
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
  },

  sub_text: {
    color: blackTheme,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
});
