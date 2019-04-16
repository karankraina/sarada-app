/*import React, { Component } from 'react';
import { View, WebView, StyleSheet } from 'react-native';
class MyWebView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView source={{ uri: 'https://shardaweb.herokuapp.com/' }} />
      </View>
    );
  }
}
export default MyWebView;

const styles = StyleSheet.create({
  container: {
    height: 700,
  },
});*/
import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Body
} from "native-base";
import { Ionicons } from '@expo/vector-icons';

// import styles from "./styles";
const styles = {
  container: {
    backgroundColor: "#fff"
  }
}

class MyWebView extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Text>Content goes here (internal)</Text>
        </Content>

        <Footer>
          <FooterTab>
            <Button active full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default MyWebView;