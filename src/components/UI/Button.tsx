/**
 * @fileoverview Componente funcional que representa un botón circular personalizable.
 * @module Button
 */

import React from 'react';
import {Pressable, View} from 'react-native';
import {ButtonProps} from '../../types';
import {buttonStyles} from '../../styles/components';

/**
 * Propiedades del componente Button.
 * @typedef {object} ButtonProps
 * @property {() => void} onPress - Función que se ejecuta cuando se presiona el botón.
 */

/**
 * Componente funcional que representa un botón circular personalizable.
 * @function
 * @param {ButtonProps} props - Propiedades del componente.
 * @returns {JSX.Element} Elemento de React que representa el botón.
 */
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
