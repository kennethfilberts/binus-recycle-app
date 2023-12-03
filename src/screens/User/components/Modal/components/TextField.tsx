import React, {useState} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {blackTheme} from '../../../../../assets/colors';

interface TextFieldProps {
  onHandleTextInput: (text: string) => void;
  placeholder: string;
  isSecureTextEntry: boolean;
  editPlaceholder: boolean;
}

export const TextField = ({
  onHandleTextInput,
  placeholder,
  isSecureTextEntry,
  editPlaceholder,
}: TextFieldProps) => {
  const [text, setText] = useState(editPlaceholder ? placeholder : '');

  return (
    <View style={styles.textBarContainer}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={blackTheme}
        underlineColorAndroid="transparent"
        value={text}
        onChangeText={currText => {
          setText(currText);
          onHandleTextInput(currText);
        }}
        secureTextEntry={isSecureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: '90%',
    height: '100%',
    color: blackTheme,
    fontFamily: 'Poppins-SemiBold',
    textAlignVertical: 'center',
  },
  textBarContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    height: 50,
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: blackTheme,
  },
});
