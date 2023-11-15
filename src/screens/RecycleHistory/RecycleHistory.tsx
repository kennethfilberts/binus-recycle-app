import {View, StyleSheet, FlatList, StatusBar} from 'react-native';
import React from 'react';
import {backgroundTheme, blackTheme} from '../../assets/colors';
import {useRecycleHistoryData} from '../../redux/hooks/recycleHistoryHook';
import {RecycleHistoryItem} from './components/RecycleHistoryItem';

export default function RecycleHistory() {
  return (
    <View style={styles.outerContainer}>
      <StatusBar backgroundColor={backgroundTheme} barStyle="dark-content" />
      <FlatList
        style={styles.recycleHistoryContainer}
        contentContainerStyle={styles.recycleHistoryContainerAlignment}
        data={useRecycleHistoryData().recycleHistory}
        renderItem={({item}) => {
          return <RecycleHistoryItem RecycleHistoryData={item} />;
        }}
        keyExtractor={item => item.RecyclingID}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: backgroundTheme,
  },
  recycleHistoryContainer: {
    height: '100%',
    width: '100%',
    marginBottom: 20,
    marginTop: 20,
  },
  recycleHistoryContainerAlignment: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    marginTop: '5%',
    width: '90%',
    color: blackTheme,
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
});
