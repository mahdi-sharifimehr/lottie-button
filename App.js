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
      radio_on: false,
      liked: false,
      submitted: false,
      submit_loop: false,
    }
  }

  render() {
    return (
      <View style={styles.body}>
        <View
          style={styles.buttons}
        >
          <TouchableWithoutFeedback
            onPress={() => {
              this.play_btn.play();
            }}
          >
            <LottieView
              ref={animation => {
                this.play_btn = animation;
              }}
              source={require('./assets/play.json')}
              loop={false}
            />
          </TouchableWithoutFeedback>
        </View>
        <View
          style={styles.buttons}
        >
          <TouchableWithoutFeedback
            onPress={() => {
              if (this.state.radio_on) {
                this.radio_btn.play(36, 92);
              } else {
                this.radio_btn.play(0, 36);
              }
              this.setState({ radio_on: !this.state.radio_on })
            }}
          >
            <LottieView
              ref={animation => {
                this.radio_btn = animation;
              }}
              source={require('./assets/radio.json')}
              loop={false}
            />
          </TouchableWithoutFeedback>
        </View>
        <View
          style={styles.buttons}
        >
          <TouchableWithoutFeedback
            onPress={() => {
              if (this.state.liked) {
                this.like_btn.reset()
                this.setState({ liked: false });
              } else {
                this.like_btn.play(20, 60);
                this.setState({ liked: true });
              }
            }}
          >
            <LottieView
              ref={animation => {
                this.like_btn = animation;
              }}
              source={require('./assets/like.json')}
              loop={false}
            />
          </TouchableWithoutFeedback>
        </View>
        <View
          style={styles.buttons}
        >
          <TouchableWithoutFeedback
            onPress={() => {
              if (this.state.submitted) {
                this.submit_btn.play(0, 1);
                this.setState({ submitted: false });
              } else {
                this.submit_btn.play(0, 68);
                this.timerHandle1 = setInterval(() => {
                  this.submit_btn.play(69, 103);
                  this.setState({ submit_loop: true });
                  this.timerHandle2 = setInterval(() => {
                    this.submit_btn.play(104, 180);
                    this.setState({
                      submitted: true,
                      submit_loop: false,
                    });
                    clearInterval(this.timerHandle2);
                  }, 5000);
                  clearInterval(this.timerHandle1);
                }, 2000);
              }
            }}
          >
            <LottieView
              ref={animation => {
                this.submit_btn = animation;
              }}
              source={require('./assets/submit.json')}
              loop={this.state.submit_loop}
              speed={0.5}
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
    backgroundColor: '#ffffff',
  },
  buttons: {
    width: 400,
    height: 150,
  },
});

export default App;
