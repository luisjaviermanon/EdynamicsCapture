import React from 'react';
import {Pressable, View} from 'react-native';
import {ButtonProps} from '../../types';
import {buttonStyles} from '../../styles/components';

const Button: React.FC<ButtonProps> = ({onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={buttonStyles.circleContainer}>
        <View style={buttonStyles.circleInner}>
          <View style={buttonStyles.circle} />
        </View>
      </View>
    </Pressable>
  );
};

export default Button;
