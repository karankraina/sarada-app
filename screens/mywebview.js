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

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class MyWebView extends Component {
  constructor(props) {
    super(props);
    this.state = { source: props.source, visible: true, iConnect: false, showToast: false };
  }
  webView = {
    canGoBack: false,
    ref: null,
    shouldExit: false,
  };
  onAndroidBackPress = () => {
    if (this.webView.canGoBack && this.webView.ref) {
      this.webView.ref.goBack();
      return true;
    } else if(!this.webView.shouldExit){
      this.webView.shouldExit = true;
      ToastAndroid.show('Press Again to Exit', ToastAndroid.SHORT)
      setTimeout(() => {
        this.webView.shouldExit = false;
      }, 3000);
      return true
      
    }
    return false;
  };

  hideSpinner() {
    this.setState({ visible: false });
  }
  goterror() {
    this.setState({
      iConnect: false,
    });
  }
  refresh() {
    this.setState({
      iConnect: true,
    });
  }
  componentWillMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener(
        'hardwareBackPress',
        this.onAndroidBackPress
      );
    }
    this.setState({source: this.props.source})
  }
  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress');
    }
  }
  render() {
    if (this.state.iConnect) {
      return (
        <Container>
          <Row />
          <Row>
            <Button onPress={() => this.refresh()} full light>
              <Text>REFRESH 1</Text>
            </Button>
          </Row>
          <Row />
        </Container>
      );
    } else {
      return (
        <View style={{ flex: 1 }}>
          <WebView
            onLoad={() => this.hideSpinner()}
            style={{ flex: 1 }}
            source={this.state.source}
            renderError={() => this.goterror()}
            ref={webView => {
              this.webView.ref = webView;
            }}
            onNavigationStateChange={navState => {
              this.webView.canGoBack = navState.canGoBack;
            }}
          />
          {this.state.visible && (
            <ActivityIndicator
              style={{ position: 'absolute', top: height / 2, left: width / 2 }}
              size="large"
            />
          )}
        </View>
      );
    }
  }
}
