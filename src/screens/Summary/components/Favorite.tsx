import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {redTheme} from '../../../assets/colors';
import GlassIcon from './images/glass';
import MetalIcon from './images/metal';
import PlasticIcon from './images/plastic';

const getWasteType = (icon: string) => {
  switch (icon) {
    case 'Glass':
      return <GlassIcon width={512} height={512} svgHeight={80} svgWidth={80}/>;
    case 'Metal':
      return <MetalIcon width={512} height={512} svgHeight={80} svgWidth={80}/>;
    case 'Plastic':
      return <PlasticIcon width={512} height={512} svgHeight={80} svgWidth={80}/>;
    case 'Cardboard':
      return <Image source={require('../../../assets/images/cardboard.png')} style={{width: 80, height: 80}}/>;
    case 'Paper':
      return <Image source={require('../../../assets/images/paper.png')} style={{width: 80, height: 80}}/>;
  }
};

interface Param {
  type: string; 
}

export const Favorite = ({type}: Param) => {
  const getType = getWasteType(type);

  return (
    <View style={styles.box_container}>
      <Text style={styles.text}>Favourite</Text>
      {getType}
      <Text style={styles.text}>Category</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box_container: {
    backgroundColor: redTheme,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    flex: 1,
  },

  text: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    margin: 5
  },
});
