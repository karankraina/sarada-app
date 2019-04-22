import React, { Component } from 'react';
import { Image, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Right,
} from 'native-base';
import { AppLoading, Font } from 'expo';

import LearnSarada from '../screens/LearnSarada';
import Gallery from '../screens/Gallery';
import Translator from '../screens/Translator';
// import ImageGallery from '../screens/imageGallery';
// import About from '../screens/about';
import { Ionicons } from '@expo/vector-icons';
import MyWebView from '../screens/mywebview'

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  // async componentWillMount() {
  //   await Font.loadAsync({
  //     Roboto: require("native-base/Fonts/Roboto.ttf"),
  //     Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
  //     ...Ionicons.font,
  //   });
  //   this.setState({ loading: false });
  // }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Sarada: require('../assets/fonts/sarada.ttf'),
      ...Ionicons.font,
    });
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return <AppLoading />;
    } else {
      return (
        <Container style={styles.container}>
          <Header hasTabs style={{ backgroundColor: '#e65100' }}>
            <Body>
              <Title style={{ fontFamily: 'Sarada', color: '#fff' }}>
                𑆑𑆾𑆫 𑆯𑆳𑆫𑆢𑆳 𑆛𑆵𑆩
              </Title>
            </Body>
          </Header>
          <Tabs locked={true} tabBarUnderlineStyle={{ backgroundColor: '#fff' }}>
            <Tab
              heading="About the Team"
              activeTextStyle={{ color: '#fff', fontWeight: 'bold' }}
              textStyle={{ color: '#fff' }}
              tabStyle={{ backgroundColor: '#e65100' }}
              activeTabStyle={{ backgroundColor: '#e65100' }}>
              <MyWebView source={require('../assets/about.html')} />
            </Tab>
          </Tabs>
        </Container>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
      },
    }),
  },
});
