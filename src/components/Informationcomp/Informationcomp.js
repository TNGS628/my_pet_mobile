import { useTheme } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import styles from './styles.js';
import images from 'src/theme/variables';

import { TextComp } from '@/components';

const Informationcomp = ({
  text = '',
  backgroundColor = '',
  onPress = () => {},
  item = {}
}) => {
  const { colors } = useTheme();
  return (
    <View style={styles.box}>
      <Image source={images.info} stytle={styles.img} />
      <View style={styles.minibox}>
        <TextComp text={item.name} style={styles.itext} />
        {/* <TextComp text="хэрхэн зөв усанд" style={styles.itext} />
        <TextComp text="оруулах вэ?" style={styles.itext} /> */}

        <View>
          <TextComp text={item.company} style={styles.drsaid} />
          <View style={styles.cont}>
            <TextComp text="Цааш үзэх" style={styles.continue} />
            <Image source={images.rarrow} style={styles.arrow} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Informationcomp;
