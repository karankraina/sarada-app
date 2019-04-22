import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class MyCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
    };
  }
  render() {
    const title = this.props.title;
    const subtitle = this.props.subtitle;
    return (
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://www.dike.lib.ia.us/images/sample-1.jpg/image',
          }}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            alignSelf: 'flex-end',
            width: '80%'
          }}>
          <Text style={{ color: 'white', fontSize: 20, margin: 6 }}>
            {title}
          </Text>
          <Text style={{ color: 'white', margin: 6 }}>{subtitle}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    position: 'absolute',
  },
  card: {
    width: '90%',
    flexDirection: 'row',
    margin: 10,
    height: 200,
  },
});
