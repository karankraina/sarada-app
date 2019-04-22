import React from 'react';
import { Header, Button, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

import HomeScreen from './screens/HomeScreen';
// import DetailsScreen from './screens/DetailsScreen';
import RoutesContainer from './routes/Routes';

export default class App extends React.Component {
  render() {
    return <RoutesContainer styles={styles.main} />;
  }
}

const styles = StyleSheet.create({
  main: {
    marginTop: '125',
  },
});
