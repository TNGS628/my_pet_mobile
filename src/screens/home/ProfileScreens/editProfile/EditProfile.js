import React, { useState } from 'react';
import {
  SafeAreaView,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import { useTheme } from '@react-navigation/native';

//styles
import styles from './styles.js';

//components
import LinearGradient from 'react-native-linear-gradient';
import { TextInputComp } from '@/components';

//screens
import UserProfile from '../userProfile/UserProfile.js';

//images
import images from '../../../../theme/variables';

const EditProfile = ({ navigation }) => {
  const { colors } = useTheme();

  const isDarkMode = useColorScheme() === 'dark';
  const [first, setfirst] = useState();

  return (
    <SafeAreaView style={styles.headContainer}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={images.back} style={styles.backArrow} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('UserProfile')}
            style={styles.smallProfileContainer}>
            <Image source={images.profile} style={styles.smallProfile} />
          </TouchableOpacity>
        </View>
        <View style={styles.main}>
          <View>
            <TouchableOpacity style={styles.editPhoto}>
              <Image source={images.profile} style={styles.profileImage} />
            </TouchableOpacity>
          </View>
          <View style={{ width: '88%' }}>
            <TextInputComp placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha" />
          </View>
          <View style={styles.infoChangeContainer}>
            <View style={styles.editInfo}>
              <TextInputComp
                placeholder="Нэрээ солих"
                style={styles.changeInfo}
              />
            </View>
            <View style={styles.editInfo}>
              <TextInputComp
                placeholder="И-Мэйл хаяг солих"
                style={styles.changeInfo}
              />
            </View>
            <View style={styles.editInfo}>
              <TextInputComp
                placeholder="Тэжээвэр амьтан нэмэх"
                style={styles.changeInfo}
              />
            </View>
            <LinearGradient
              colors={['#80aceb', '#6ea1ee', '#5e96f0']}
              style={styles.saveButton}>
              <TouchableOpacity
                onPress={() => navigation.navigate('UserProfile')}>
                <Text style={styles.saveButtonText}>Хадгалах</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;
