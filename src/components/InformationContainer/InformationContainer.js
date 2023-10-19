import React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import { TextInput } from '@/components';
import { useTheme } from '@react-navigation/native';

//styles
import styles from './styles.js';


const InformationContainer = ({ text = '', style={}, onPress = () => {} }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.headContainer}>
        <TextInput style={{fontSize: 14, fontWeight: 'bold'}} text = 'My'/>
        <TextInput style={{fontSize: 14, fontWeight: 'bold'}} text = 'Pet'/>
        <TextInput style={{fontSize: 14, fontWeight: 'bold'}} text = ''/>

        <TouchableOpacity />
    </View>
  );
};

export default InformationContainer;
