import React, { useState } from 'react';
import {SafeAreaView, useColorScheme, View, Image,TouchableOpacity} from 'react-native';
import { useTheme } from '@react-navigation/native';

//components
import styles from './styles.js';
import { TextComp }from '@/components';
import { ConButton }  from '@/components'
import images from '../../../theme/variables'


function Information ({navigation}){

const isDarkMode = useColorScheme() === 'dark';
const [first, setfirst] = useState()
  

  return (
    <SafeAreaView style={styles.headContainer}>
      <View style={styles.as}>
        <Image source={images.logo} />
        
      </View>
      
    </SafeAreaView>
  );
};

export default Information;
