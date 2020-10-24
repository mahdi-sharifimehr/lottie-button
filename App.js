/*
Programming with Mash
https://www.youtube.com/channel/UCkqNCi8euqXHHMk3XQ4luKw
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <View style={styles.body}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#2193b0',
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

export default App;
