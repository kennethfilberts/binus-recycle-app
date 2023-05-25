import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PassIcon from './icons/PassIcon';
import NotifIcon from './icons/NotifIcon';
import HelpIcon from './icons/HelpIcon';
import LogoutIcon from './icons/LogoutIcon';
import {blackTheme} from '../../../assets/colors';

interface Info {
  imageIcon: string;
  itemText: string;
}

const getIcons = (image: string) => {
  switch (image) {
    case 'pass':
      return <PassIcon />;
    case 'notif':
      return <NotifIcon />;
    case 'help':
      return <HelpIcon />;
    case 'logout':
      return <LogoutIcon />;
  }
};

export const Info = ({imageIcon, itemText}: Info) => {
  const icon = getIcons(imageIcon);

  return (
    <TouchableOpacity style={styles.box_item}>
      {icon}
      <Text style={styles.item_text}>{itemText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box_item: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
  },

  item_text: {
    fontFamily: 'Poppins-Medium',
    color: 'black',
    fontSize: 16,
  },
});