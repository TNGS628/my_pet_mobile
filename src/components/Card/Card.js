import React from 'react';
import { Text } from 'react-native';

const Card = ({ text = "", style={} }) => {
  return (
    <Text style={style} >
        {text}
    </Text>
  );
};

export default Card;
