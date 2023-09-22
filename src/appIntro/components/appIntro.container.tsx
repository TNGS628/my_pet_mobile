import React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';

export const AppIntroContainer = ({
  title = '',
  desc = '',
  img = '',
  bg = '#FEE8E8',
}: any) => {

  return (
    <View >
      <View >
        <SafeAreaView />
        <Image source={img} />
      </View>
      <View >
        <Text>{title}</Text>
        <Text >{desc}</Text>
      </View>
    </View>
  );
};
