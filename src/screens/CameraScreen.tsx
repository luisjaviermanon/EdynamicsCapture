/**
 * @fileoverview Display component that shows the camera view.
 * @module CameraScreen
 */
import React from 'react';
import {View} from 'react-native';
import CameraComponent from '../components/CameraComponent';
import {baseStyles} from '../styles';

/**
 * Functional component that represents the camera display.
 * @function
 * @returns {JSX.Element} React element that represents the camera screen.
 */
const CameraScreen: React.FC = () => {
  return (
    <View style={baseStyles.container}>
      <CameraComponent />
    </View>
  );
};

export default CameraScreen;
