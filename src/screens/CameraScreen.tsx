import React from 'react';
import {SafeAreaView} from 'react-native';
import CameraComponent from '../components/CameraComponent';
import {baseStyles} from '../styles';

const CameraScreen: React.FC = () => {
  return (
    <SafeAreaView style={baseStyles.container}>
      <CameraComponent />
    </SafeAreaView>
  );
};

export default CameraScreen;
