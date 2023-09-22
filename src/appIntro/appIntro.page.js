import React, { useState } from 'react';
import { TouchableOpacity, View, useWindowDimensions, Text } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import { AppIntroContainer } from './components';
// import { images } from '@/theme/variables';

const AppIntroPage = () => {
  const [index, setIndex] = useState(0);
  const layout = useWindowDimensions();

  const [routes] = useState([
    { key: 'paymentWaiting' },
    { key: 'active' },
    { key: 'expired' },
  ]);

  const renderScene = SceneMap({
    paymentWaiting: () => (
      <AppIntroContainer
        title="Нэгдсэн мэдээллийн бааз"
        desc="Төлбөртэй болон төлбөргүй бүх төрлийн эвентүүдийн мэдээллийг зөвхөн
        MONGOL EVENTS системээс.."
        // img={images.appIntro1}
      />
    ),
    active: () => (
      <AppIntroContainer
        bg="#E1E1EC"
        title="Ухаалаг хайлтын систем"
        desc="Зөвхөн Танд зориулсан эвентийн мэдээллийг хүргэхээс гадна хайлтын систем ашиглаж олон сонирхолтой нээлтийг хийх боломжтой"
        // img={images.appIntro2}
      />
    ),
    expired: () => (
      <AppIntroContainer
        bg="#EAF9F5"
        title="Эвент үүсгэх"
        desc="Эвентэд бүртгүүлэх, хайлт хийх зэргээс гадна Та өөрийн гэсэн эвентээ үүсгэж хүрээллээ тэлцгээе"
        // img={images.appIntro3}
      />
    ),
  });

  const onSuccess = async () => {
    console.log("DUSASH")
   
  };

  const renderTabBar = (props: any) => {
    return (
      <View>
        {index !== 2 ? (
          <>
            <TouchableOpacity
              onPress={() => {
                setIndex(2);
              }}>
                <Text>
                Алгасах
                </Text>
              
            </TouchableOpacity>
            {/* <View style={styles.appIntroDotContainer}>
              {props.navigationState.routes.map((route: any, i: number) => {
                const dotStyle = (idx: any) => [
                  styles.appIntroSliderDot,
                  idx === i && styles.appIntroSliderDotSelected,
                ];
                return <View style={dotStyle(index)} />;
              })}
            </View> */}
            <TouchableOpacity
              onPress={() => {
                setIndex(index + 1);
              }}>
                <Text>
                Дараах
                </Text>
              
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity  onPress={() => onSuccess()}>
            Эхэлцгээе!
          </TouchableOpacity>
        )}
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
      // style={styles.mainContainer}
      initialLayout={{ width: layout.width }}
    />
  );
};

export default AppIntroPage;
