import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { StateProvider } from './context/app.provider';
import AppNavigation from './navigation';

const App = () => {
  return (
    <StateProvider>
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#eee" barStyle="dark-content" />
        <AppNavigation />
      </View>
    </StateProvider>
  );
};

export default App;
