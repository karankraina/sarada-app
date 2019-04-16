import React from 'react';
import {
  Button,
  View,
  Text,
  WebView,
  StyleSheet,
  TextInput,
} from 'react-native';

export default class DetailsScreen extends React.Component {
  state = {
    url: 'www.google.com',
    go: false,
  };
  handleUrl = text => {
    this.setState({ url: text });
  };
  render() {
    const goUrl = this.state.url;
    const goFlag = this.state.go;
    let WebViewRef;
    return (
      <View style={styles.container}>
        <WebView
          ref={WEBVIEW_REF => (WebViewRef = WEBVIEW_REF)}
          source={{ uri: this.state.url }}
          renderLoading={this.ActivityIndicatorLoadingView}
          startInLoadingState={true}
        />
        <Button
          title="Reload Me!"
          onpress={() => {
            WebViewRef && WebViewRef.reload();
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 700,
  },
});
