import * as React from 'react';
import { AppRegistry, Alert } from 'react-native';
import {
  Appbar,
  Button,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const title = this.props.title;
    const subtitle = this.props.subtitle;
    return (
      <Appbar>
        <Appbar.Content title={title} subtitle={subtitle} />
      </Appbar>
    );
  }
}
