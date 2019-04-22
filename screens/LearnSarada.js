import React, { Component } from 'react';
import {
  WebView,
  View,
  ActivityIndicator,
  Dimensions,
  BackHandler,
  Platform,
  ToastAndroid
} from 'react-native';
import { Container, Header, Button, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import MyWebView from '../screens/mywebview'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class LearnSarada extends Component {

  render() {
    return (
      <MyWebView source={{ uri: 'https://shardaweb.herokuapp.com/' }} />
    )
  };
}
