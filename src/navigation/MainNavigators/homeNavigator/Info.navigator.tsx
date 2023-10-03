import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppIntroPage from 'src/screens/tips/Appintro';

const InfoStack = createStackNavigator();

export const InfoNavigator = () => {
  return (
    <InfoStack.Navigator
      initialRouteName="InfoPage"
      screenOptions={{ headerShown: false }}>
      <InfoStack.Screen
        name="InfoPage"
        component={AppIntroPage}
        // options={{
        //   header: () => <Header  title="Events.mn" />,
        // }}
      />
    </InfoStack.Navigator>
  );
};
