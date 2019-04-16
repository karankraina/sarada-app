import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import RoutesContainer from './routes/Routes';

export default class App extends React.Component {
  render() {
    return <RoutesContainer />; 
  }
}
