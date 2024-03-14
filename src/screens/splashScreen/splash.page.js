import React, { useEffect } from 'react';
import { View, Image, StatusBar } from 'react-native';
import { useStore } from 'src/context/app.provider';

import images from 'src/theme/variables';
import { TextComp } from '@/components';
import { AppActionTypes } from 'src/context/types';
import { APP_STACK } from 'src/navigation/screenTypes';

const SplashPage = () => {
  const { appDispatch } = useStore();

  useEffect(() => {
    const onInit = () => {
      appDispatch({
        type: AppActionTypes.SWITCH_STACK,
        payload: APP_STACK.APP_INTRO,
      });
    };
    const timeOut = setTimeout(onInit, 2000);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3c3c4a',
      }}>
      <StatusBar backgroundColor="#eee" barStyle="dark-content" />
      <View
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={images.splash}
          style={{ width: '60%', height: 200, objectFit: 'contain' }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 50,
          }}>
          <TextComp text="Pet" style={{ fontSize: 30, color: 'aqua' }} />
          <TextComp text="Lovers" style={{ fontSize: 30, color: 'white' }} />
        </View>
      </View>
    </View>
  );
};

export default SplashPage;
