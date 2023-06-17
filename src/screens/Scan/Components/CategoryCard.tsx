import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import GlassIcon from '../../Summary/components/images/glass';
import PlasticIcon from '../../Summary/components/images/plastic';
import MetalIcon from '../../Summary/components/images/metal';
import ArrowIcon from '../../../assets/icons/ArrowIcon';
import {
  blackTheme,
  darkGreenTheme,
  lightPinkTheme,
} from '../../../assets/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface setParam {
  type: String;
}

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
          style={{width: 60, height: 60}}
        />
      );
    case 'Paper':
      return (
        <Image
          source={require('../../../assets/images/paper.png')}
          style={{width: 60, height: 60}}
        />
      );
  }
};

export default function CategoryCard({type}: setParam) {
  const getType = getIcon(type);

  return (
    <TouchableOpacity>
      <View style={styles.body}>
        <View style={styles.image_box}>
          <View>{getType}</View>
        </View>

        <View style={styles.text_box}>
          <Text style={styles.text}>{type}</Text>
          <Text style={styles.sub_text}>See Location</Text>
        </View>

        <View>
          <ArrowIcon rotation={180} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: darkGreenTheme,
    borderWidth: 3,
    marginBottom: 5,
    gap: 5,
  },

  image_box: {
    backgroundColor: lightPinkTheme,
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
