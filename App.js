/*
Programming with Mash
https://www.youtube.com/channel/UCkqNCi8euqXHHMk3XQ4luKw
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import LottieView from 'lottie-react-native';

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
        <View
          style={styles.buttons}
        >
          <TouchableWithoutFeedback
            onPress={() => {
              this.animation.play();
            }}
          >
            <LottieView
              ref={animation => {
                this.animation = animation;
              }}
              source={require('./assets/radio.json')}
              autoPlay
              loop={false}
              speed={1.0}
              onAnimationFinish={() => {
              }}
            />
          </TouchableWithoutFeedback>
        </View>
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
  buttons: {
    width: 300,
    height: 100,
    padding: 20,
  },
});

export default App;
