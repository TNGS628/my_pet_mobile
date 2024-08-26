import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

//components
import styles from './styles.js';
import { TextComp } from '@/components';
import images from '../../../theme/variables';

const main_detail_data = [
  {
    description: 'Male',
    description_name: 'Sex',
    background_color: '#e2f5cb',
  },
  {
    description: '1 Years',
    description_name: 'Age',
    background_color: '#ffe9c2',
  },
  {
    description: '10 Kg',
    description_name: 'Weight',
    background_color: '#c2EBFF',
  },
];

const detail_data = [
  {
    description: 'Life expectancy',
    description_name: 'No data',
  },
  {
    description: 'Colours',
    description_name: 'No data',
  },
  {
    description: 'Living Conditions',
    description_name: 'No data',
  },
  {
    description: 'Litter Size',
    description_name: 'No data',
  },
  {
    description: 'Origin',
    description_name: 'No data',
  },
  {
    description: 'Grooming',
    description_name: 'No data',
  },
  {
    description: 'Exercise',
    description_name: 'No data',
  },
  {
    description: 'Sheds',
    description_name: 'No data',
  },
  {
    description: 'Coat length',
    description_name: 'No data',
  },
  {
    description: 'Fun Facts',
    description_name: 'No data',
  },
  {
    description: 'Ease Of Training',
    description_name: 'No data',
  },
];

const PetDetail = () => {
  const navigation = useNavigation();
  const { height, width, scale, fontScale } = useWindowDimensions();
  const [isLiked, setIsLiked] = useState(true);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            top: 30,
            left: 30,
            zIndex: 30,
            elevation: 30,
            backgroundColor: '#fff',
            padding: 8,
            borderRadius: 10,
          }}>
          <Icon name="chevron-back" size={24}></Icon>
        </TouchableOpacity>
        <ScrollView>
          <Image
            source={images.husky}
            style={{
              objectFit: 'cover',
              height: height / 2.5,
              width: '100%',
            }}
          />
          <View style={styles.detail}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}>
              <View>
                <TextComp
                  text="Husky"
                  style={{
                    fontWeight: '700',
                    color: '#000',
                    fontSize: 20,
                    marginBottom: 5,
                  }}
                />
                <TextComp
                  text="Thornbridge, Chicago (5km)"
                  style={{ fontWeight: '400', color: '#A7B2a2', fontSize: 14 }}
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  setIsLiked(!isLiked);
                }}
                style={{
                  borderRadius: 64,
                  backgroundColor: '#fff',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 8,
                  shadowColor: 'red',
                  shadowOpacity: 0.1,
                  shadowOffset: { width: 0, height: 0 },
                  shadowRadius: 10,
                }}>
                {isLiked ? (
                  <Icon name="heart" color="red" size={20}></Icon>
                ) : (
                  <Icon name="heart-outline" size={20}></Icon>
                )}
              </TouchableOpacity>
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                columnGap: 16,
                marginBottom: 20,
              }}>
              {main_detail_data.map(_detail => (
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: _detail.background_color,
                    borderRadius: 20,
                    padding: 20,
                    flex: 1,
                  }}>
                  <TextComp
                    text={_detail.description}
                    style={{ fontWeight: '500', color: '#000', fontSize: 16 }}
                  />
                  <TextComp
                    text={_detail.description_name}
                    style={{
                      fontWeight: '400',
                      color: '#A7B2a2',
                      fontSize: 14,
                    }}
                  />
                </View>
              ))}
            </View>
            <TextComp
              text={
                'Husky is a general term for a dog used in the polar regions, primarily and specifically for work as sled dogs.'
              }
              style={{
                fontWeight: '400',
                color: '#000',
                fontSize: 14,
                marginBottom: 20,
              }}
            />
            {detail_data.map(d => (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 10,
                }}>
                <TextComp
                  text={d.description}
                  style={{
                    fontWeight: '400',
                    color: '#BEBEBE',
                    fontSize: 14,
                  }}
                />
                <TextComp
                  text={d.description_name}
                  style={{
                    fontWeight: '400',
                    color: '#BEBEBE',
                    fontSize: 14,
                  }}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default PetDetail;
