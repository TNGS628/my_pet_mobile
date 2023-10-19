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
import { TextComp } from '@/components';
import { ProfileAchievements } from '@/components';

//images
import images from '../../../../theme/variables';


const Profile = ({ navigation }) => {
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
          <TouchableOpacity style={styles.smallProfileContainer}>
            <Image source={images.profile} style={styles.smallProfile} />
          </TouchableOpacity>
        </View>
        <View style={styles.main}>
          <TouchableOpacity>
            <Image source={images.profile} style={styles.profileImage} />
          </TouchableOpacity>
          <TextComp text={'Tengis Altankhuyag'} style={styles.name} />
          <View style={styles.achContainer}>
            <View style={styles.achievements}>
              <ProfileAchievements text={'hello'} />
            </View>
            <View style={styles.achievements}>
              <ProfileAchievements text={'hello'} />
            </View>
          </View>
          <View style={styles.starBox}>
            <Image source={images.star} style={styles.star} />
            <Image source={images.star} style={styles.star} />
            <Image source={images.star} style={styles.star} />
            <Image source={images.star} style={styles.star} />
            <Image source={images.star} style={styles.star} />
          </View>
          <View style={styles.review}>
            <View style={styles.ratings}>
              <TextComp text={'4.5'} style={styles.overallRating} />
              <TextComp text={' 48 total reviews'} style={{color: "#656566"}} />
            </View>
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
            <Text style={styles.bio}>Bio</Text>
            <TextComp
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the "
              }
              style={styles.bioFont}
            />
          </View>
          <View style={styles.quali}>
            <Text style={styles.qualify}>Qualifications</Text>
            <TextComp text={'Comfortable '} style={styles.qualiText} />
            <TextComp text={'Will provide '} style={styles.qualiText} />
            <TextComp text={'no smoking '} style={styles.qualiText} />
            <TextComp text={'College '} style={styles.qualiText} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
