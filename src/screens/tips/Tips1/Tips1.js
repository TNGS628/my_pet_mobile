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
    <SafeAreaView>
      <View style={styles.textContainer}>
        <TextComp text={'Тавтай морилно уу?'} style={styles.welcome} />
      </View>
      <View style={styles.picContainer}>
      <Image source={images.tips1}/>
      </View>
      <View style={styles.secondTextContainer}>
        <TextComp text={'Тэжээвэр амьтанд тань зориулсан хамгийн сайн туслах'} style={styles.secondText}/>
      </View>
      {/* <View style={styles.appIntroDotContainer}>
              {props.navigationState.routes.map((route: any, i: number) => {
                
                return <View style={dotStyle(index)} />;
              })}
            </View> */}
      <View style={styles.buttonContainer}> 
      <ConButton text={'Үргэлжлүүлэх'}/>
      </View>
    </SafeAreaView>
  );
};

export default Tips;
