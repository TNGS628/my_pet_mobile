import React, { useEffect, useState } from 'react';
import { TextComp } from '@/components';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeCard = ({ gender = 0, onPress = () => {} }) => {
  const [dogImageUrl, setDogImageUrl] = useState('');
  const [isLiked, setIsLiked] = useState(false);

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
        backgroundColor: '#f0eff4',
        borderRadius: 18,
        // padding: 5,
        paddingBottom: 15,
        elevation: 1,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        overflow: 'hidden',
        width: '47%',
      }}
      onPress={onPress}>
      <View style={{ position: 'relative' }}>
        <Image
          // source={images.dog}
          source={{ uri: dogImageUrl }}
          style={{
            height: 180,
            width: '100%',
            objectFit: 'cover',
            backgroundColor: '#e7e8e7',
            // borderRadius: 15,
            marginBottom: 10,
          }}></Image>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
              marginBottom: 5,
            }}>
            <TextComp
              text="Coco"
              style={{
                color: '#000',
                fontWeight: '700',
                fontSize: 14,
              }}
            />

            <MaterialIcon
              name={gender === 0 ? 'gender-male' : 'gender-female'}
              size={20}
              color={gender === 0 ? '#76c9cf' : '#ce5adf'}
            />
          </View>

          <TextComp
            text="Young | Border collie"
            style={{ color: '#79797b', fontWeight: '500', fontSize: 12 }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            setIsLiked(!isLiked);
          }}>
          {isLiked ? (
            <Icon name="heart" size={24} color="#6952c7"></Icon>
          ) : (
            <Icon name="heart-outline" size={24} color="#6952c7"></Icon>
          )}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default HomeCard;
