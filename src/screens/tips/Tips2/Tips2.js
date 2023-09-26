import React, { useState } from 'react';
import {SafeAreaView, useColorScheme, View, Image} from 'react-native';
import { useTheme } from '@react-navigation/native';

//components
import styles from './styles.js';
import { TextComp }from '@/components';
import { ConButton }  from '@/components'
import images from '../../../theme/variables'


const Tips = () => {
  const { colors } = useTheme();

  const isDarkMode = useColorScheme() === 'dark';
  const [first, setfirst] = useState()
  

  return (
    <SafeAreaView style={styles.headContainer}>
      <View style={styles.picContainer}>
      <Image source={images.tips2}/>
      </View>
      <View style={styles.secondTextContainer}>
        <TextComp text={'Та мал эмнэлэгийн байршил, мэргэжлийн эмчийн онош, зөвлөгөө зэргийг цахимаар авах боломжтой.'} style={styles.secondText}/>
      </View>
      <View style={styles.buttonContainer}> 
      <ConButton text={'Үргэлжлүүлэх'}/>
      </View>
    </SafeAreaView>
  );
};

export default Tips;
