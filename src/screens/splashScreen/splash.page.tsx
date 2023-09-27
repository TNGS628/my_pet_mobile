import React, { useEffect } from 'react';
import { View, Image, Text, StatusBar } from 'react-native';
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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar backgroundColor="#eee" barStyle="dark-content" />
      <View>
        <Image source={images.logo} />
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <TextComp text="My" style={{ fontSize: 30, color: 'aqua' }} />
          <TextComp text="Pet" style={{ fontSize: 30 }} />
        </View>
      </View>
    </View>
  );
};

export default SplashPage;
