import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import List from '../screens/List';
import Web from '../screens/webview';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    List: List,
    Web: Web,
  },
  {
    initialRouteName: 'Home',
  }
);

const RoutesContainer = createAppContainer(RootStack);

export default class Routes extends React.Component {
  render() {
    return <RoutesContainer />;
  }
}
