import React from "react";
import { TabView } from "react-native-tab-view";
import { TouchableOpacity } from "react-native";

//tip screens
import Tips1 from "./screens/tips/Tips1";
import Tips2 from "./screens/tips/Tips2";
import Tips3 from "./screens/tips/Tips3";
import Tips4 from "./screens/tips/Tips4";

const AppIntroPage = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first' },
        { key: 'second' },
        { key: 'third' },
        { key: 'fourth' },
      ]);

    const renderScene = SceneMap({
        first: () => (
          <Tips1 />
        ),
        second: () => (
          <Tips2 />
        ),
        third: () => (
          <Tips3  />
        ),
        fourth: () => (
          <Tips4 />
        )
    });

    const renderTabBar = (props: any) => {
        return (
          <View style={styles.appIntroSliderContainer}>
            {index !== 2 ? (
              <>
                <TouchableOpacity
                  variant="text"
                  p={0}
                  _text={{
                    color: colors.grayColor,
                  }}
                  zIndex={1}
                  onPress={() => {
                    setIndex(2);
                  }}>
                  Алгасах
                </TouchableOpacity>
                <View style={styles.appIntroDotContainer}>
                  {props.navigationState.routes.map((route: any, i: number) => {
                    const dotStyle = (idx: any) => [
                      styles.appIntroSliderDot,
                      idx === i && styles.appIntroSliderDotSelected,
                    ];
                    return <View style={dotStyle(index)} />;
                  })}
                </View>
                <TouchableOpacity
                  onPress={() => {
                    setIndex(index + 1);
                  }}>
                  Дараах
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity flex={1} bg={colors.success[500]} onPress={() => onSuccess()}>
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
                  style={styles.mainContainer}
                  initialLayout={{ width: layout.width }}
                />
              );      
}
export default AppIntroPage;