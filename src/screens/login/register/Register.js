import { TextComp, TextInput } from '@/components';
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { useTheme } from '@react-navigation/native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { styles } from './styles';
import { TextInputComp } from '@/components';
import images from 'src/theme/variables';

const Register = ({ navigation }) => {
  const { colors } = useTheme();

  const isDarkMode = useColorScheme() === 'dark';
  const [first, setfirst] = useState();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <TextComp text="REGISTER" style={styles.my} />
      <TouchableOpacity
        style={styles.forgetpasswordcontainer}
        onPress={() => navigation.goBack()}>
        <TextComp text="Butsah" style={styles.forget_password} />
      </TouchableOpacity>

      <View style={styles.container}>
        <View style={styles.headlogos}>
          <Image style={styles.headlogos} source={images.logo} />
        </View>
        <TextComp text="My" style={styles.my} />
        <TextComp text="Pet" style={styles.pet} />
      </View>
      <TextInputComp placeholder="Нэвтрэх нэр"></TextInputComp>
      <TextInputComp
        placeholder="Нууц үг"
        style={styles.container}></TextInputComp>
      <View>
        <TouchableOpacity style={styles.forgetpasswordcontainer}>
          <TextComp
            text="Нууц үгээ мартсан уу?"
            style={styles.forget_password}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register;
