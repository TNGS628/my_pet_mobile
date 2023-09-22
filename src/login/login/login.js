import Card from '@components';
import TextComp from '@components';
import React, { useState } from 'react';
import {SafeAreaView, Text, useColorScheme, View} from 'react-native';
import { useTheme } from '@react-navigation/native';


import { Colors } from 'react-native/Libraries/NewAppScreen';

const Login = () => {
  const { colors } = useTheme();

  const isDarkMode = useColorScheme() === 'dark';
  const [first, setfirst] = useState()

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  

  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
        <Text style={{color: colors.primary}}>App</Text>
      </View>
      <TextComp text={"DSD"} style={{fontSize: 10}} />
      <Card/>
    </SafeAreaView>
  );
};

export default Login;
