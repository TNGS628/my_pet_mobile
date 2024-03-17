import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

//styles
import styles from './styles.js';

//images
import images from '../../../../theme/variables';
import { TextComp } from '@/components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FIcon from 'react-native-vector-icons/Feather';
import { Divider } from 'native-base';

const EditProfile = ({ navigation }) => {
  const [first, setfirst] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ position: 'relative' }}>
        <View>
          <TouchableOpacity
            style={styles.iconCon}
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="arrow-back" size={20}></Icon>
          </TouchableOpacity>

          <View style={styles.header}>
            <TextComp text="My Profile" style={styles.name} />
            <View style={styles.proImageCon}>
              <Image source={images.splash} style={styles.proImage} />
              <View style={styles.imageIcon}>
                <FIcon name="upload-cloud" size={20} color={'#fff'}></FIcon>
              </View>
            </View>
          </View>

          <View style={styles.main}>
            <View style={styles.fieldCon}>
              <TextComp text="Name" style={styles.fieldName} />
              <View style={styles.fieldBottom}>
                <TextComp text="Chrollo Ken" style={styles.name} />
                <Divider style={styles.divider} />
              </View>
            </View>
            <View style={styles.fieldCon}>
              <TextComp text="Email" style={styles.fieldName} />
              <View style={styles.fieldBottom}>
                <TextComp text="kanekkirit@gmail.com" style={styles.name} />
                <Divider style={styles.divider} />
              </View>
            </View>
            <View style={styles.fieldCon}>
              <TextComp text="Phone No." style={styles.fieldName} />
              <View style={styles.fieldBottom}>
                <TextComp text="+976 99248671" style={styles.name} />
                <Divider style={styles.divider} />
              </View>
            </View>
            <View style={styles.fieldCon}>
              <TextComp text="Address" style={styles.fieldName} />
              <View style={styles.fieldBottom}>
                <TextComp
                  text="#425/2. Block-C, Ulaanbaatar, Jamsranjav, Dalaihutagt, Marshall tower"
                  style={styles.name}
                />
                <Divider style={styles.divider} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.goBack();
        }}>
        <TextComp text="Update" style={styles.buttonText} />
        <MIcon name="cloud-check" size={25} color="#fff"></MIcon>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default EditProfile;
