import React, { useState } from 'react';
import {SafeAreaView, Text, useColorScheme, View} from 'react-native';
import { useTheme } from '@react-navigation/native';
import styles from './styles.js';

//components
import { TextComp} from '@/components';
import { Button } from '@/components'

const Tips = () => {
  const { colors } = useTheme();

  const isDarkMode = useColorScheme() === 'dark';
  const [first, setfirst] = useState()

  const backgroundStyle = {
    backgroundColor: 'white',
  };
  

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.textContainer}>
        <TextComp text={'Тавтай морилно уу?'}style={styles.welcome} />
      </View>
      {/* <Tips1 /> */}
      {/* <Image source={require('./Tips1.png')} /> */}
      {/* <View style={styles.secondTextContainer}>
        <TextComp text={'Тэжээвэр амьтанд тань зориулсан хамгийн сайн туслах'} style={styles.secondText}/>
      </View> */}
      <Button />
    </SafeAreaView>
  );
};

export default Tips;
