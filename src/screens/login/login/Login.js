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
import LinearGradient from 'react-native-linear-gradient';
import { ConButton } from '@/components';

const Login = ({ navigation }) => {
  const { colors } = useTheme();

  const isDarkMode = useColorScheme() === 'dark';
  const [first, setfirst] = useState();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={{ paddingHorizontal: 23 }}>
        <View style={styles.container}>
          <View style={styles.headlogos}>
            <Image style={styles.headlogos} source={images.logo} />
          </View>

          <TextComp text="My" style={styles.my} />

          <TextComp text="Pet" style={styles.pet} />
        </View>
        <TextInputComp
          srtyle={styles.nevtreh}
          placeholder="Нэвтрэх нэр"></TextInputComp>
        <TextInputComp
          placeholder="Нууц үг"
          style={styles.container}></TextInputComp>
        <View>
          <Image style={styles.faceid} source={images.face} />

          <TouchableOpacity style={styles.forgetpasswordcontainer}>
            <TextComp
              text="Нууц үгээ мартсан уу?"
              style={styles.forget_password}
            />
          </TouchableOpacity>
          <View style={styles.registercontainer}>
            <ConButton
              backgroundColor="pink"
              text="Нэвтрэх"
              style={{ marginBottom: 150 }}></ConButton>
            <ConButton
              onPress={() => navigation.navigate('RegisterPage')}
              backgroundColor="orange"
              text="Бүртгүүлэх"></ConButton>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
