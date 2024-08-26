import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon6 from 'react-native-vector-icons/FontAwesome6';
import { BlurView } from '@react-native-community/blur';

//styles
import styles from './styles.js';

//components
import { TextComp } from '@/components';

//images
import images from '../../../../theme/variables';

const UserProfile = () => {
  const navigation = useNavigation();

  const menuItems = [
    {
      icon: 'user',
      name: 'My Profile',
      bcolor: '#dbebf6',
      color: '#6bbbe8',
    },
    {
      icon: 'box-open',
      name: 'My Orders',
      bcolor: '#d9f3de',
      color: '#6cc26f',
    },
    {
      icon: 'sack-dollar',
      name: 'Refund',
      bcolor: '#e2e1f7',
      color: '#7f67f3',
    },
    {
      icon: 'lock',
      name: 'Change Password',
      bcolor: '#f2e4e0',
      color: '#ed9264',
    },
    {
      icon: 'language',
      name: 'Change Language',
      bcolor: '#f2e1ef',
      color: '#d041a2',
    },
    {
      icon: 'right-to-bracket',
      name: 'Log Out',
      bcolor: '#e3242b',
      color: '#fff',
    },
  ];

  return (
    <SafeAreaView style={styles.headContainer}>
      <ScrollView>
        <View
          style={{
            // backgroundColor: 'red',
            width: '100%',
            height: '100%',
            flex: 1,
            position: 'relative',
          }}>
          <View
            style={{
              position: 'relative',
            }}>
            <View style={styles.header}>
              <TextComp text="Profile" style={styles.profileName} />
              <TouchableOpacity style={styles.profileMoreButton}>
                <Icon name="dots-vertical" color="#fff" size={30}></Icon>
              </TouchableOpacity>
            </View>

            <View style={styles.profileHeadCon}>
              <TouchableOpacity
                style={styles.proImagCon}
                onPress={() => {
                  navigation.navigate('EditProfilePage');
                }}>
                <Image source={images.splash} style={styles.proImage} />
                <TouchableOpacity
                  style={styles.editButtonContainer}
                  onPress={() => {
                    navigation.navigate('EditProfilePage');
                  }}>
                  <Icon
                    name="circle-edit-outline"
                    color="#fff"
                    size={16}></Icon>
                </TouchableOpacity>
              </TouchableOpacity>
              <TextComp text="Chrollo Kenn" style={styles.name} />
              <TextComp text="+976 99248671" style={styles.phone} />
            </View>

            <Image style={styles.image} source={images.splash} />
            <BlurView style={styles.absolute} blurType="dark" blurAmount={4} />
          </View>

          <View style={styles.menuItemContainer}>
            <TextComp text="Account Overview" style={styles.menuHeadTitle} />

            {menuItems.map(item => (
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 15,
                }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View
                    style={{
                      backgroundColor: item.bcolor,
                      borderRadius: 14,
                      marginRight: 20,
                      width: 40,
                      height: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Icon6
                      name={item.icon}
                      size={18}
                      color={item.color}></Icon6>
                  </View>
                  <TextComp text={item.name} style={styles.menuItem} />
                </View>
                {/* {item.name !== 'Log Out' && (
                  <Icon6 name="chevron-right" size={18} color="#172B47"></Icon6>
                )} */}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserProfile;
