import React, { useState } from 'react';
import {
  SafeAreaView,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useTheme, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';

//components
import styles from './styles.js';
import { TextComp } from '@/components';
import images from '../../../theme/variables';
import { HomeCard } from '@/components';

const animals = ['Dogs', 'Cats'];

const Home = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const [activeCategory, setActiveCategory] = useState('Dogs');

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
              // marginBottom: 30,
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
            <View style={{ flexDirection: 'row', columnGap: 8 }}>
              <TouchableOpacity
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: '#f7f7f8',
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Feather name="search" color="#070A3C" size={24} />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: '#f7f7f8',
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Feather name="bell" color="#070A3C" size={24} />
              </TouchableOpacity>
            </View>
          </View>

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
                marginBottom: 15,
              }}
            />
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
                  backgroundColor: '#f2effb',
                  paddingHorizontal: 15,
                  borderRadius: 20,
                  height: 45,
                  flexDirection: 'row',
                  gap: 10,
                }}>
                <Image
                  source={images.filterHome}
                  style={{
                    width: 24,
                    height: 24,
                    objectFit: 'cover',
                  }}
                />

                <TextComp
                  text="Filter"
                  style={{
                    color: '#000',
                    fontWeight: '600',
                  }}
                />
              </TouchableOpacity>

              {animals.map(a => (
                <TouchableOpacity
                  onPress={() => setActiveCategory(a)}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor:
                      a === activeCategory ? '#d2cbed' : '#f2effb',
                    paddingHorizontal: 15,
                    borderRadius: 20,
                    height: 45,
                    flexDirection: 'row',
                    gap: 10,
                  }}>
                  <Image
                    source={
                      a === 'Dogs' ? images.filterHomeDog : images.filterHomeCat
                    }
                    style={{
                      width: 24,
                      height: 24,
                      objectFit: 'cover',
                    }}
                  />

                  <TextComp
                    text={a}
                    style={{
                      color: '#000',
                      fontWeight: '600',
                    }}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>

          {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}> */}
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: 20,
              marginVertical: 10,
              justifyContent: 'space-between',
            }}>
            {[0, 1, 1, 2, 2, 4, 5, 4].map(i => (
              <HomeCard
                gender={i % 2}
                onPress={() => {
                  navigation.navigate('PetDetailPage');
                }}
              />
            ))}
          </View>
          {/* </ScrollView> */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
