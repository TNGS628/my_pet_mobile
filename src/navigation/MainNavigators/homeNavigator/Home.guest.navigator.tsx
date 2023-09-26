import React from 'react';
import {
  createStackNavigator,
} from '@react-navigation/stack';
import AppIntroPage from 'src/screens/tips/Appintro';

const HomeGuestStack = createStackNavigator();

export const HomeGuestNavigator = () => {
  return (
    <HomeGuestStack.Navigator initialRouteName="HomeGuestPage">
      <HomeGuestStack.Screen
        name="HomeGuestPage"
        component={AppIntroPage}
        // options={{
        //   header: () => <Header home title="Events.mn" />,
        // }}
      />
    </HomeGuestStack.Navigator>
  );
};
