import React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import { TextInput } from '@/components';
import { useTheme } from '@react-navigation/native';

//styles
import styles from './styles.js';
import { TextComp } from '@/components';


const ProfileAchievements = ({ text = "", style={}, onPress = () => {} }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.headContainer}>
        <TextComp style={{fontSize: 14}} text = {" "} />
    </View>
  );
};

export default ProfileAchievements;
