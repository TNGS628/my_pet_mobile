import {TextComp} from '@/components';
import React from 'react';
import { Text, View } from 'react-native';

const TextInput = ({ text = "", style={} }) => {
  return (
    <View>
        <TextComp style={style.ri} />
        <TextComp style={style.dweqwe} />
        <TextComp style={style.eqweq} />
    </View>
  );
};




export default TextInput;