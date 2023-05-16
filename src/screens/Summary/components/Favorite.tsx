import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {redTheme} from '../../../assets/colors';
import GlassIcon from './images/glass';
import MetalIcon from './images/metal';
import PlasticIcon from './images/plastic';

const getWasteType = (icon: string) => {
  switch (icon) {
    case 'Glass':
      return <GlassIcon />;
    case 'Metal':
      return <MetalIcon />;
    case 'Plastic':
      return <PlasticIcon />;
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
