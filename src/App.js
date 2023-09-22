import React from 'react';
import { SafeAreaView, Text, useColorScheme, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { TextComp } from '@/components';
import Login from './login/login';

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

        <Login />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
