import { TextComp, TextInput } from '@/components';
import React, { useState } from 'react';
import { Image, SafeAreaView, Text, useColorScheme, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { styles } from './styles';
import { TextInputComp } from '@/components';

const Login = () => {
  const { colors } = useTheme();

  const isDarkMode = useColorScheme() === 'dark';
  const [first, setfirst] = useState();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.container}>
        <TextComp text={'My'} style={styles.my} />
        <TextComp text={'Pet'} style={styles.pet} />
      </View>
      <TextInputComp></TextInputComp>
    </SafeAreaView>
  );
};

export default Login;
