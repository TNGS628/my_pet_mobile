import React, { useState } from 'react';
import {SafeAreaView, useColorScheme, View, Image,TouchableOpacity} from 'react-native';
import { useTheme } from '@react-navigation/native';

//components
import styles from './styles.js';
import { TextComp }from '@/components';
import { ConButton }  from '@/components'
import images from '../../../theme/variables'


function Tips ({navigation}){
const handleNavigateLogin = () => navigation.navigate('Login');

const isDarkMode = useColorScheme() === 'dark';
const [first, setfirst] = useState()
  

  return (
    <SafeAreaView style={styles.headContainer}>
      <TouchableOpacity onPress={handleNavigateLogin}
      style={styles.skipButton}>
        <TextComp text="Алгасах" />
      </TouchableOpacity>
      <View style={styles.picContainer}>
      <Image source={images.tips2}/>
      </View>
      <View style={styles.secondTextContainer}>
        <TextComp text={'Та мал эмнэлэгийн байршил, мэргэжлийн эмчийн онош, зөвлөгөө зэргийг цахимаар авах боломжтой.'} style={styles.secondText}/>
      </View>
      <View style={styles.buttonContainer}> 
      </View>
      
    </SafeAreaView>
  );
};

export default Tips;
