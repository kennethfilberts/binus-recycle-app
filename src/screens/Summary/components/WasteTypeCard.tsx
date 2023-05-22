import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GlassIcon from './images/glass';
import MetalIcon from './images/metal';
import PlasticIcon from './images/plastic';
import {Int32} from 'react-native/Libraries/Types/CodegenTypes';

interface setParam {
  type: string;
  value: Int32;
  color: any;
}

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

export const WasteTypeCard = ({type, value, color}: setParam) => {
  const wasteType = getWasteType(type);

  return (
    <View style={[styles.container_box, {backgroundColor: color}]}>
      <View style={styles.image}>{wasteType}</View>

      <View>
        <View style={styles.text_box}>
          <Text style={styles.text}>{value} Kg</Text>
          <Text style={styles.text}>{type}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container_box: {
    borderRadius: 15,
    justifyContent: 'center',
    width: 120,
    height: 180,
    gap: 25,
    elevation: 3,
  },

  image: {
    alignItems: 'flex-end',
  },

  text_box: {
    alignItems: 'baseline',
    marginLeft: '20%',
  },

  text: {
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
    fontSize: 20,
    margin: -5,
  },
});
