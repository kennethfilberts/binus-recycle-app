import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Scan() {
  return (
    <View style={styles.body}>
      <Text>Scan Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FFFCF5',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
