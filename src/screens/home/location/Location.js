import React, { useState } from 'react';
import {SafeAreaView, useColorScheme, View, Image, TouchableOpacity} from 'react-native';
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
    <SafeAreaView>
       <TouchableOpacity style={styles.skipButton}>
            <TextComp text="Алгасах" />
          </TouchableOpacity>
      <View style={styles.textContainer}>
        <TextComp text={'Тавтай морилно уу?'} style={styles.welcome} />
      </View>
      <View style={styles.picContainer}>
      <Image source={images.tips1}/>
      </View>
      <View style={styles.secondTextContainer}>
        <TextComp text={'Тэжээвэр амьтанд тань зориулсан хамгийн сайн туслах'} style={styles.secondText}/>
      </View>
      <View style={styles.buttonContainer}> 
      </View>
    </SafeAreaView>
  );
};

export default Tips;
