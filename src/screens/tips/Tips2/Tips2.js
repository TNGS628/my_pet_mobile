import React, { useState } from 'react';
import {SafeAreaView, useColorScheme, View, Image,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useTheme } from '@react-navigation/native';

//components
import styles from './styles.js';
import { TextComp }from '@/components';
import { ConButton }  from '@/components'
import images from '../../../theme/variables'
import { useStore } from 'src/context/app.provider';
import { AppActionTypes } from 'src/context/types';
import { APP_STACK } from 'src/navigation/screenTypes';





function Tips ({ navigation }){
  const { colors } = useTheme();
  const { appDispatch } = useStore();


const isDarkMode = useColorScheme() === 'dark';
const [first, setfirst] = useState()
  

  return (
    <SafeAreaView style={styles.headContainer}>
      {/* <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={images.back} style={styles.backButton} />
      </TouchableOpacity> */}
     <TouchableOpacity style={styles.skipButton} onPress={() =>
                appDispatch({
                  type: AppActionTypes.SWITCH_STACK,
                  payload: APP_STACK.AUTH,
                })
              }>
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
