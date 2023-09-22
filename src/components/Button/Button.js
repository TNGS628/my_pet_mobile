import TextComp from '@components';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles.js';

const Button = ({ text = "", style={} }) => {
  return (
    <Button text= "Үргэлжлүүлэх" style={styles.continueButton} />
  );
};




export default Button;
