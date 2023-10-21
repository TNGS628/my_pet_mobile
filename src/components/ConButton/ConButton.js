import { useTheme } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles.js';

const ConButton = ({ text = '', backgroundColor = '', onPress = () => {} }) => {
  const { colors } = useTheme();
  return (
      <TouchableOpacity
      onPress={onPress}
      style={[
        styles.conButton,
        { backgroundColor: backgroundColor ? backgroundColor : colors.primary },
      ]}>
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
    
  );
};

export default ConButton;
