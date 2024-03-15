import React, { useState } from 'react';
import {
  SafeAreaView,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

//components
import styles from './styles.js';
import { TextComp } from '@/components';
import images from '../../../theme/variables';
import LinearGradient from 'react-native-linear-gradient';
import { HomeCard } from '@/components';

const animals = [
  'Dog',
  'Cat',
  'Elephant',
  'Lion',
  'Tiger',
  'Penguin',
  'Giraffe',
  'Zebra',
  'Snake',
  'Dolphin',
  'Horse',
  'Kangaroo',
  'Rhinoceros',
  'Owl',
  'Parrot',
];

const Home = () => {
  const { colors } = useTheme();

  const [activeCategory, setActiveCategory] = useState('Dog');

  const isDarkMode = useColorScheme() === 'dark';
  const [first, setfirst] = useState();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: 30,
            }}>
            <View>
              <View style={styles.locContainer}>
                <TextComp text="Location" />
                <Icon
                  name="chevron-down"
                  color="#91baf0"
                  size={10}
                  style={{ marginTop: 2 }}
                />
              </View>
              <View style={[styles.locContainer, { marginTop: 5 }]}>
                <TextComp
                  text="Hello,"
                  style={{ fontSize: 20, color: '#070A3C', fontWeight: '700' }}
                />
                <TextComp
                  text="Kenn"
                  style={{ fontSize: 20, color: '#070A3C' }}
                />
              </View>
            </View>
            <View style={{ flexDirection: 'row', columnGap: 10 }}>
              <TouchableOpacity
                style={{
                  width: 35,
                  height: 35,
                  backgroundColor: '#f7f7f8',
                  borderRadius: 7,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="search" color="#070A3C" size={20} />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: 35,
                  height: 35,
                  backgroundColor: '#f7f7f8',
                  borderRadius: 7,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="bell" color="#070A3C" size={20} />
              </TouchableOpacity>
            </View>
          </View>

          <LinearGradient
            colors={['#80aceb', '#6ea1ee', '#5e96f0']}
            style={styles.linearGradient}>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}>
              <TextComp
                text="Join Our Animal"
                style={{ fontSize: 18, color: '#fff', fontWeight: '500' }}
              />
              <TextComp
                text="Lovers Community"
                style={{ fontSize: 18, color: '#fff', fontWeight: '500' }}
              />
              <TouchableOpacity
                style={{
                  padding: 15,
                  backgroundColor: '#eecb55',
                  borderRadius: 8,
                  marginTop: 15,
                  paddingVertical: 10,
                }}>
                <TextComp text="Join Now" style={{ color: '#fff' }} />
              </TouchableOpacity>
            </View>
            <Image
              source={images.cat}
              style={{
                width: 150,
                height: 150,
                position: 'absolute',
                bottom: 0,
                right: 0,
              }}></Image>
          </LinearGradient>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TextComp
              text="Categories"
              style={{
                fontSize: 18,
                color: '#070A3C',
                fontWeight: '700',
                marginVertical: 25,
              }}
            />
            <TouchableOpacity
              style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TextComp
                text="View All"
                style={{
                  fontSize: 14,
                  color: '#eecb55',
                  fontWeight: '500',
                  marginRight: 8,
                }}
              />
              <View
                style={{
                  padding: 8,
                  backgroundColor: '#eecb55',
                  borderRadius: 8,
                }}>
                <Icon size={8} color={'#fff'} name="chevron-right"></Icon>
              </View>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginBottom: 10 }}>
            <View style={{ flexDirection: 'row', columnGap: 10 }}>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#f7f7f8',
                  padding: 15,
                  borderRadius: 10,
                  height: 50,
                }}>
                <Icon name="bars" color="#070A3C" size={16} />
              </TouchableOpacity>

              {animals.map(a => (
                <TouchableOpacity onPress={() => setActiveCategory(a)}>
                  <LinearGradient
                    colors={
                      activeCategory === a
                        ? ['#80aceb', '#6ea1ee', '#5e96f0']
                        : ['#f7f7f8', '#f7f7f9', '#f7f7ff']
                    }
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#f7f7f8',
                      padding: 15,
                      borderRadius: 10,
                    }}>
                    <TextComp
                      text={a}
                      style={{
                        color: activeCategory === a ? '#fff' : '#070A3C',
                        fontWeight: '500',
                      }}
                    />
                  </LinearGradient>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 10,
                marginVertical: 10,
                paddingHorizontal: 2,
              }}>
              {[0, 1, 2, 3].map(i => (
                <HomeCard isLiked={i === 0 || i === 2} />
              ))}
            </View>
          </ScrollView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
