import React, { useState } from 'react';
import {
  SafeAreaView,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useStore } from 'src/context/app.provider';
import { AppActionTypes } from 'src/context/types';
import { APP_STACK } from 'src/navigation/screenTypes';

//components
import styles from './styles.js';
import { TextComp } from '@/components';
import images from '../../../theme/variables';

const Tips = ({ navigation }) => {
  const { colors } = useTheme();
  const { appDispatch } = useStore();

  const isDarkMode = useColorScheme() === 'dark';
  const [first, setfirst] = useState();

  return (
    <SafeAreaView>
      <View style={{ paddingTop: 50 }}>
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() =>
            appDispatch({
              type: AppActionTypes.SWITCH_STACK,
              payload: APP_STACK.AUTH,
            })
          }>
          <TextComp text="Алгасах" />
        </TouchableOpacity>

        <View style={styles.picContainer}>
          <Image
            source={images.tips1}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </View>
        <View style={styles.textContainer}>
          <TextComp text={'Тавтай морилно уу?'} style={styles.welcome} />
        </View>
        <View style={styles.secondTextContainer}>
          <TextComp
            text={'Тэжээвэр амьтанд тань зориулсан хамгийн сайн туслах'}
            style={styles.secondText}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Tips;
