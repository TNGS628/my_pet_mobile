import React from 'react';
import { View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { RootNavigator } from './Root.navigator';


const AppNavigation = () => {

  const myTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255, 45, 85)',
    },
  };

  return (
    <View style={{flex: 1, backgroundColor: "#fff"}} >
      <NavigationContainer theme={myTheme} >
        <RootNavigator />
      </NavigationContainer>
    </View>
  );
};

export default AppNavigation;
