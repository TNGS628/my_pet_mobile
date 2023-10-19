import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './styles';

const TextInputComp = ({ text = '', placeholder = '' }) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.textinput}
      multiline={true}
      numberOfLines={5}
      // value={text}
    />
  );
};

export default TextInputComp;
