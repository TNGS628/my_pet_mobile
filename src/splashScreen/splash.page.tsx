import React, { useEffect } from 'react';
import { View, Image, Text, StatusBar } from 'react-native';
import { useStore } from 'src/context/app.provider';

import images from 'src/theme/variables';


const SplashPage = () => {
  const {
    appDispatch,
  } = useStore();

  useEffect(() => {
    const onInit = async () => {
      console.log("HAHA")
    };
    onInit();
  }, []);

  return (
    <View style={{flex: 1}} >
      {/* <StatusBar backgroundColor="#eee" barStyle="dark-content" />
      <View>
        <Image source={images.logo} />
      </View>
      <Text>MY PET</Text> */}
      <Text>2022</Text>
      
    </View>
  );
};

export default SplashPage;
