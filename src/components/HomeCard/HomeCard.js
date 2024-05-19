import React, { useEffect, useState } from 'react';
import { TextComp } from '@/components';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import images from 'src/theme/variables';
import Icon from 'react-native-vector-icons/FontAwesome5';

const HomeCard = ({ isLiked = false }) => {
  const [dogImageUrl, setDogImageUrl] = useState('');

  useEffect(() => {
    // Fetch a random dog image URL
    fetch('https://random.dog/woof.json')
      .then(response => response.json())
      .then(data => {
        setDogImageUrl(data.url);
      })
      .catch(error => {
        console.error('Error fetching dog image:', error);
      });
  }, []);

  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#fff',
        borderRadius: 15,
        // padding: 5,
        paddingBottom: 15,
        elevation: 1,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        overflow: 'hidden',
      }}>
      <View style={{ position: 'relative' }}>
        <Image
          // source={images.dog}
          source={{ uri: dogImageUrl }}
          style={{
            height: 200,
            width: 150,
            objectFit: 'cover',
            backgroundColor: '#e7e8e7',
            // borderRadius: 15,
            marginBottom: 10,
          }}></Image>
        <View
          style={{
            height: 20,
            width: 20,
            backgroundColor: 'red',
            position: 'absolute',
            top: 8,
            right: 8,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isLiked ? '#b84847' : '#fff',
          }}>
          <Icon
            color={isLiked ? '#fff' : '#b84847'}
            solid={isLiked}
            name="heart"></Icon>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <View>
          <TextComp
            text="George"
            style={{ color: '#070A3C', fontWeight: '700', fontSize: 16 }}
          />
          <TextComp text="Dutch Pug" />
        </View>
        <View
          style={{
            backgroundColor: '#f6eceb',
            borderRadius: 10,
            padding: 5,
            paddingHorizontal: 10,
            alignSelf: 'flex-end',
          }}>
          <TextComp
            text="2 YRS"
            style={{ color: '#c97070', fontWeight: '700', fontSize: 12 }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeCard;
