import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { StateProvider } from './context/app.provider';
import AppNavigation from './navigation';
import {NativeBaseProvider} from 'native-base';

const App = () => {
  return (
    <StateProvider>
      <NativeBaseProvider
        config={{
          suppressColorAccessibilityWarning: true,
        }}>
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#eee" barStyle="dark-content" />
        <AppNavigation />
      </View>
      </NativeBaseProvider>

    </StateProvider>
  );
};

export default App;
