import React from 'react';
import { Text, View, Title } from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation'; //
import { Ionicons } from '@expo/vector-icons'; // 6.2.2
import HomeScreen from '../screens/HomeScreen';
// import DetailsScreen from '../screens/DetailsScreen';
import About from '../screens/About';

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let iconName;
  if (routeName === 'Home') {
    iconName = `md-home`;
  } else if (routeName === 'About Us') {
    iconName = `md-information-circle${focused ? '' : '-outline'}`;
  }
  // You can return any component that you like here!

  return <Ionicons name={iconName} size={25} color={tintColor} />;
  // return <Ionicons name="md-home" size={32} color="green" />;
};

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: { screen: HomeScreen },
      'About Us': { screen: About },
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor),
      }),
      tabBarOptions: {
        activeTintColor: '#e65100',
        inactiveTintColor: 'gray',
      },
    }
  )
);
