import AppIntroPage from './appIntro/appIntro.page';
import React from 'react';
import {Image, SafeAreaView, Text, useColorScheme, View} from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import { TextComp } from '@/components';
import images from './theme/variables';
import Tips1 from './screens/tips/Tips1/Tips1';
import { ConButton } from './components';
import Tips2 from './screens/tips/Tips2';
import Tips3 from './screens/tips/Tips3.';
import Tips4 from './screens/tips/Tips4';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255, 45, 85)',
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <SafeAreaView style={backgroundStyle}>
        {/* <AppIntroPage /> */}
        {/* <Text>HSD</Text> */}
        {/* <TextComp text={"HIEHEHEH"} /> */}
        <AppIntroPage />
        {/* <Tips1 /> */}
        {/* <Tips2 /> */}
        {/* <Tips3 /> */}
        {/* <Tips4 /> */}
        {/* <TextComp text={"HIEHEHEH"} /> */}
        <Image source={images.tips1} />
        {/* <ConButton/> */}
      </SafeAreaView>
    </NavigationContainer>

  );
};

export default App;
