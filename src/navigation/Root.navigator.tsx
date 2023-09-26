import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppIntroNavigator from './AppIntro.navigator';
import AuthNavigator from './Auth.navigator';
import { TabHomeNavigator } from './MainNavigators/Tab.home.navigator';
import { useStore } from 'src/context/app.provider';
import { APP_STACK } from './screenTypes';
import SplashPage from 'src/splashScreen/splash.page';

const RootStack = createNativeStackNavigator();

export const RootNavigator = () => {
  const {
    appState: { newStack },
  } = useStore();

  switch (newStack) {
    case APP_STACK.SPLASH:
      return (
        <RootStack.Navigator>
          <RootStack.Screen
            name={APP_STACK.SPLASH}
            component={SplashPage}
            options={{ headerShown: false, animation: 'fade' }}
          />
        </RootStack.Navigator>
      );
    case APP_STACK.APP_INTRO:
      return (
        <RootStack.Navigator>
          <RootStack.Screen
            name={APP_STACK.APP_INTRO}
            component={AppIntroNavigator}
            options={{ headerShown: false, animation: 'fade' }}
          />
        </RootStack.Navigator>
      );
    case APP_STACK.AUTH:
      return (
        <RootStack.Navigator>
          <RootStack.Screen
            name={APP_STACK.AUTH}
            component={AuthNavigator}
            options={{ headerShown: false, animation: 'fade' }}
          />
        </RootStack.Navigator>
      );
    case APP_STACK.HOME:
      return (
        <RootStack.Navigator>
          <RootStack.Screen
            name={APP_STACK.HOME}
            component={TabHomeNavigator}
            options={{ headerShown: false, animation: 'fade' }}
          />
        </RootStack.Navigator>
      );

    default:
      return <></>;
  }
};
