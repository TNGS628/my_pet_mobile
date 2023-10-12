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
import { ConButton } from '@/components';

const Register = ({ navigation }) => {
  const { colors } = useTheme();

  const isDarkMode = useColorScheme() === 'dark';
  const [first, setfirst] = useState();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.leftarrow}
          onPress={() => navigation.goBack()}>
          <Image style={styles.headlogos} source={images.larrow} />
        </TouchableOpacity>
        <TextComp text="Тавтай морилно уу" style={styles.welcome} />

        <View>
          <TextComp text="Таны нэр хэн бэ ?" style={styles.alltext} />
          <TextInputComp style={styles.input}></TextInputComp>
        </View>

        <View>
          <TextComp text="И-Мейл хаягаа оруулна уу." style={styles.alltext} />
        </View>
        <TextInputComp></TextInputComp>
        <View>
          <TextComp text="Нууц үгээ оруулна уу." style={styles.alltext} />
          <TextInputComp></TextInputComp>
        </View>
        <View>
          <TextComp text="Нууц үгээ дахин оруулна уу." style={styles.alltext} />
          <TextInputComp style={styles.haha}></TextInputComp>
        </View>
      </View>
      <ConButton backgroundColor="black" text="asaassa"></ConButton>
    </SafeAreaView>
  );
};

export default Register;
