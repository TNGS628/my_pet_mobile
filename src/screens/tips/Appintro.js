import React, { useState } from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';
import { TouchableOpacity, View } from 'react-native';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { TextComp } from '@/components';

//styles
import styles from './styles.js';

//tip screens
import Tips1 from './Tips1';
import Tips2 from './Tips2';
import Tips4 from './Tips4';
import Tips3 from './Tips3';
import { ConButton } from '@/components';
import { useStore } from 'src/context/app.provider';
import { AppActionTypes } from 'src/context/types/app.types';
import { APP_STACK } from 'src/navigation/screenTypes';
import LinearGradient from 'react-native-linear-gradient';

const AppIntroPage = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first' },
    { key: 'second' },
    { key: 'third' },
    { key: 'fourth' },
  ]);
  const { colors } = useTheme();

  const { appDispatch } = useStore();

  const renderScene = SceneMap({
    first: () => <Tips1 />,
    second: () => <Tips2 changeScreen={changeScreen} />,
    third: () => <Tips3 changeScreen={changeScreen} />,
    fourth: () => <Tips4 changeScreen={changeScreen} />,
  });
  const onSuccess = async () => {
    appDispatch({
      type: AppActionTypes.SWITCH_STACK,
      payload: APP_STACK.GUEST,
    });
  };
  const changeScreen = () => {
    setIndex(index - 1)
  }

  const colorPicker = index => {
    switch (index) {
      case 0:
        return '#ABCC36';
      case 1:
        return '#2E6C9E';
      case 2:
        return '#D64242';
      case 3:
        return '#FB8B02';
      default:
        return 'black';
    }
  };

  const renderTabBar = props => {
    return (
      <View style={styles.appIntroSliderContainer}>
        <>
          <View style={styles.appIntroDotContainer}>
            {props.navigationState.routes.map((route, i) => {
              const dotStyle = idx => [
                styles.appIntroSliderDot,
                idx === i && styles.appIntroSliderDotSelected,
                { backgroundColor: idx === i ? colorPicker(i) : 'grey' },
              ];
              return <View style={dotStyle(index)} />;
            })}
          </View>
          <ConButton
            backgroundColor={colorPicker(index)}
            onPress={() => {
              if (index !== 3) {
                setIndex(index + 1);
              } else {
                appDispatch({
                  type: AppActionTypes.SWITCH_STACK,
                  payload: APP_STACK.AUTH,
                });
              }
            }}
            text={index !== 3 ? 'Үргэлжлүүлэх' : ' Эхлэх'}
          />
        </>
      </View>
    );
  };
  return (
    <TabView
      tabBarPosition="bottom"
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
      style={{backgroundColor: "#fff"}}
    />
  );
};
export default AppIntroPage;
