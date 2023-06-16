import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import GlassIcon from './images/glass';
import MetalIcon from './images/metal';
import PlasticIcon from './images/plastic';
import {Float, Int32} from 'react-native/Libraries/Types/CodegenTypes';

interface setParam {
  type: string;
  value: Float | null;
  color: any;
}

const getWasteType = (icon: string) => {
  switch (icon) {
    case 'Glass':
      return <GlassIcon width={512} height={512} svgHeight={80} svgWidth={80} marginRight={15}/>;
    case 'Metal':
      return <MetalIcon width={512} height={512} svgHeight={80} svgWidth={80}/>;
    case 'Plastic':
      return <PlasticIcon width={512} height={512} svgHeight={80} svgWidth={80}/>;
    case 'Cardboard':
      return <Image source={require('../../../assets/images/cardboard.png')} style={{width: 80, height: 80, marginRight: 15}}/>;
    case 'Paper':
      return <Image source={require('../../../assets/images/paper.png')} style={{width: 80, height: 80, marginRight: 15}}/>;
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
    width: 150,
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
    marginLeft: -10,
  },
});
