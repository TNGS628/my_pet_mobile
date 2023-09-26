import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppIntroContainer } from 'src/appIntro/components';

const AppIntroStack = createNativeStackNavigator();

const AppIntroNavigator = () => {
  return (
    <AppIntroStack.Navigator initialRouteName="AppIntroPage">
      <AppIntroStack.Screen
        name="AppIntroPage"
        component={AppIntroContainer}
        options={{
          headerShown: false,
        }}
      />
    </AppIntroStack.Navigator>
  );
};

export default AppIntroNavigator;
