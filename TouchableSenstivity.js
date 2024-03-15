import { TouchableNativeFeedback, Platform, TouchableOpacity } from 'react-native';
import React from 'react';

const TouchableSensitivity = ({ props, color }) => {
  if (Platform.OS === 'ios') {
    return <TouchableOpacity onPress={props.onPress}>{props.children}</TouchableOpacity>;
  } else {
    return (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple(color ? color : '#FFFFFF')}
        onPress={props.onPress}
      >
        {props.children}
      </TouchableNativeFeedback>
    );
  }
};

export default TouchableSensitivity;
