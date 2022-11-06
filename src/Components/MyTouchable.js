import React, {Component} from 'react';
import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';

export default class MyTouchable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  pressButton = () => {
    if (!this.props.dontDisableOnClick) {
      this.setState({
        disabled: true,
      });

      // enable after 5 second
      setTimeout(() => {
        this.setState({
          disabled: false,
        });
      }, 600);
    }
    !this.props.disabled
      ? this.props.onPress
        ? this.props.onPress()
        : null
      : null;
  };
  render() {
    let props = this.props;
    if (Platform.OS === 'android') {
      return (
        <TouchableNativeFeedback
          onLongPress={props.onLongPress ? props.onLongPress() : null}
          disabled={props.disabled || this.state.disabled}
          style={props.style}
          onPress={this.pressButton}
        >
          {props.children}
        </TouchableNativeFeedback>
      );
    } else {
      return (
        <TouchableOpacity
          // onLongPress={props.onLongPress ? props.onLongPress() : () => {}}
          disabled={props.disabled || this.state.disabled}
          style={[{flex: 1}, props.style]}
          onPress={this.pressButton}
        >
          {props.children}
        </TouchableOpacity>
      );
    }
  }
}
