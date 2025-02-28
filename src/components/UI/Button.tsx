/**
 * @fileoverview Functional component representing a customizable circular button.
 * @module Button
 */

import React, {useEffect} from 'react';
import {Pressable, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import {ButtonProps} from '../../types';
import {buttonStyles} from '../../styles/components';
import {colors} from '../../theme';

/**
 * Button component properties.
 * @typedef {object} ButtonProps
 * @property {() => void} onPressIn - Function that is executed when the button is pressed.
 * @property {() => void} onPressOut - Function that is executed when the button is released.
 * @property {boolean} isRecording - Status indicating whether it is recording.
 */

/**
 * Functional component representing a customizable circular button.
 * @function
 * @param {ButtonProps} props - Component Properties.
 * @returns {JSX.Element} React element that represents the button.
 */
const Button: React.FC<ButtonProps> = ({
  onPressIn,
  onPressOut,
  isRecording,
}) => {
  const scale = useSharedValue(1);

  useEffect(() => {
    if (isRecording) {
      scale.value = withTiming(1.2, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      });
    } else {
      scale.value = withTiming(1, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      });
    }
  }, [isRecording, scale]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  return (
    <Pressable onPressIn={onPressIn} onPressOut={onPressOut}>
      <Animated.View
        style={[
          buttonStyles.circleContainer,

          isRecording && {borderColor: colors.red},
        ]}>
        <View style={buttonStyles.circleInner}>
          <View
            style={[
              buttonStyles.circle,
              animatedStyle,
              isRecording && {backgroundColor: colors.red},
            ]}
          />
        </View>
      </Animated.View>
    </Pressable>
  );
};

export default Button;
