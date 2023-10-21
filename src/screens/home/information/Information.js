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

//components
import styles from './styles.js';
import { TextComp } from '@/components';
import { ConButton } from '@/components';
import images from '../../../theme/variables';
import TextInputComp from '@/components';
import { Informationcomp } from '@/components';

function Information({ navigation }) {
  const isDarkMode = useColorScheme() === 'dark';
  const [first, setfirst] = useState();
  const data = [ 
    {
      name: 'tejeever amitnaa herhen zuv usand oruulah ve?', 
      company: 'ub v',
    },
      {name: 'tejeever amitnaa herhen zuv usand oruulah ve?', 
      company: 'ub v'
    }]

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ padding: 15 }}>
          <View style={styles.head}>
            <Image source={images.menu} style={styles.menu} />
            <View>
              <Image source={images.logo} style={styles.minilogo} />
            </View>
            <View>
              <Image source={images.searchicon} style={styles.search} />
            </View>
          </View>
          <View style={styles.pisda}>
            <TextComp text="Зөвлөгөө" style={styles.headtitle} />
          </View>
          <View style={{ display: 'flex', rowGap: 20 }}>
            {data.map((item,idx)=> (
              <Informationcomp key={idx} item={item}></Informationcomp>            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Information;
