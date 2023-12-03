import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PassIcon from './icons/PassIcon';
import NotifIcon from './icons/NotifIcon';
import HelpIcon from './icons/HelpIcon';
import LogoutIcon from './icons/LogoutIcon';
import EditIPIcon from './icons/EditIPIcon';

interface InfoProps {
  imageIcon: string;
  itemText: string;
  action: () => void;
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
    case 'editIP':
      return <EditIPIcon />;
  }
};

export const Info = ({imageIcon, itemText, action}: InfoProps) => {
  const icon = getIcons(imageIcon);

  return (
    <TouchableOpacity style={styles.box_item} onPress={action}>
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
