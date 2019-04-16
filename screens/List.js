import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Button } from 'react-native';

class List extends Component {
  state = {
    names: [
      {
        id: 0,
        name: 'Kargan',
      },
      {
        id: 1,
        name: 'Darshan',
      },
      {
        id: 2,
        name: 'Nilam',
      },
      {
        id: 3,
        name: 'Nitin',
      },
    ],
  };
  alertItemName = item => {
    alert(item.name);
  };
  render() {
    return (
      <View>
        {this.state.names.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style={styles.container}
            onPress={() => this.alertItemName(item)}>
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        ))}
        <Button
          title="Go Back to Home Page"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Text>
          { this.props.navigation.state.params.name }
        </Text>
      </View>
    );
  }
}
export default List;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 3,
    backgroundColor: '#d9f9b1',
    alignItems: 'center',
  },
  text: {
    color: '#4f603c',
  },
});
