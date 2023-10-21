import React from 'react';
import { Text } from 'react-native';

const TextComp = ({ text = '', style = {} }) => {
  return <Text style={style}>{text}</Text>;
};

export default TextComp;
