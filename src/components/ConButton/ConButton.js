import { useTheme } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles.js';

const ConButton = ({ text = "", style={} }) => {

  const {colors} = useTheme()
  return (
    <TouchableOpacity text={""} style={[styles.conButton, {backgroundColor: colors.primary}]} >  
    <Text style={styles.textStyle}>Үргэлжлүүлэх</Text>    
    </TouchableOpacity>
  );
};

export default ConButton;
