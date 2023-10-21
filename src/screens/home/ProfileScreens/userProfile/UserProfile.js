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
import Icon from 'react-native-vector-icons/FontAwesome5';


//styles
import styles from './styles.js';

//components
import { TextComp } from '@/components';

//images
import images from '../../../../theme/variables';


const UserProfile = ({ navigation }) => {
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
        </View>
        <View style={styles.main}>
          <TouchableOpacity>
            <Image source={images.profile} style={styles.profileImage} />
          </TouchableOpacity>
          <TextComp text={'Тэнгис Алтанхуяг'} style={styles.name} />
          <View style={styles.review}>
            <TouchableOpacity>
              <Image source={images.facebook} style={styles.miniLink} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={images.instagram} style={styles.miniLink} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={images.twitter} style={styles.miniLink} />
            </TouchableOpacity>
          </View>
          <View style={styles.description}>
            <View style={styles.bioEdit}>
              <Text style={styles.bio}>Миний тухай</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('EditProfile')}>
                <Icon name="bars" color="#070A3C" size={16} />

              </TouchableOpacity>
            </View>

            <TextComp
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the "
              }
              style={styles.bioFont}
            />
          </View>
          <View style={styles.quali}>
            <Text style={styles.qualify}>Миний мэдээлэл</Text>
            <TextComp text={'Нас  -     22'} style={styles.qualiText} />
            <TextComp
              text={'Миний тэжээвэр амьтад   -        Нохой '}
              style={styles.qualiText}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserProfile;
