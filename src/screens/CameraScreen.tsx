/**
 * @fileoverview Componente de pantalla que muestra la vista de la cámara.
 * @module CameraScreen
 */
import React from 'react';
import {SafeAreaView} from 'react-native';
import CameraComponent from '../components/CameraComponent';
import {baseStyles} from '../styles';

/**
 * Componente funcional que representa la pantalla de la cámara.
 * @function
 * @returns {JSX.Element} Elemento de React que representa la pantalla de la cámara.
 */
const CameraScreen: React.FC = () => {
  return (
    <SafeAreaView style={baseStyles.container}>
      <CameraComponent />
    </SafeAreaView>
  );
};

export default CameraScreen;
