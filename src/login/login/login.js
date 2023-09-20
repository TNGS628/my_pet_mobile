import React, { useState } from 'react';
import {SafeAreaView, Text, useColorScheme, View} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const Loginf = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [first, setfirst] = useState()

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
        <Text>App</Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
