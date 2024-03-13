import React, { useState } from 'react';
import { SafeAreaView, useColorScheme, View, Image, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useStore } from 'src/context/app.provider';
import { AppActionTypes } from 'src/context/types';
import { APP_STACK } from 'src/navigation/screenTypes';




//components
import styles from './styles.js';
import { TextComp } from '@/components';
import { ConButton } from '@/components'
import images from '../../../theme/variables'



const Tips = ({changeScreen}) => {
  const { colors } = useTheme();
  const { appDispatch } = useStore();


  const isDarkMode = useColorScheme() === 'dark';
  const [first, setfirst] = useState()


  return (
    <SafeAreaView >
      <View style={{ paddingTop: 50 }} >

        <TouchableOpacity style={styles.skipButton} onPress={() =>
          appDispatch({
            type: AppActionTypes.SWITCH_STACK,
            payload: APP_STACK.AUTH,
          })
        }>
          <TextComp text="Алгасах" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.backButton} onPress={() =>
          changeScreen()
        }>
          <TextComp text="Буцах" />
        </TouchableOpacity>

        <View style={styles.picContainer}>
          <Image source={images.tips4} />
        </View>
        <View style={styles.textContainer}>
          <TextComp text={'Тавтай морилно уу?'} style={styles.welcome} />
        </View>
        <View style={styles.secondTextContainer}>
        <TextComp text={'Гэр бүлийн нэгэн гишүүнийхээ төлөө энэхүү аялалыг эхлүүлэхэд бэлэн үү?'} style={styles.secondText}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Tips;
