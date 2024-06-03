/**
 * @fileoverview Componente de cámara en React Native utilizando Vision Camera.
 * @module CameraComponent
 */

import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Camera} from 'react-native-vision-camera';
import Button from './UI/Button';
import ImagePreview from './UI/ImagePreview';
import {colors} from '../theme';

import {useCameraPermissions} from '../hooks/useCameraPermissions';
import {useCameraSetup} from '../hooks/useCameraSetup';
import {usePhotoActions} from '../hooks/usePhotoActions';

import {baseStyles} from '../styles';
import {cameraStyles} from '../styles/components';

/**
 * Componente funcional que representa la configuración y uso de la cámara.
 * @function
 * @returns {JSX.Element} - Elemento React que representa la configuración de la cámara.
 */
const CameraComponent: React.FC = () => {
  useCameraPermissions();
  const {
    camera,
    hdrEnabled,
    flashMode,
    shutterSoundEnabled,
    is60FPS,
    device,
    format,
    toggleHdr,
    toggleCamera,
    toggleFlash,
    toggleShutterSound,
    toggle60FPS,
  } = useCameraSetup();

  const {photos, takePhoto} = usePhotoActions(camera);

  if (!device || !format) {
    return (
      <View style={cameraStyles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }
  const supportsHdr = format.supportsPhotoHdr;
  const getFlashIcon = () => (flashMode === 'on' ? 'flash' : 'flash-off');

  return (
    <View style={baseStyles.container}>
      <Camera
        style={cameraStyles.camera}
        device={device}
        isActive={true}
        ref={camera}
        photo={true}
        photoHdr={supportsHdr && hdrEnabled}
      />
      <View style={cameraStyles.topBar}>
        <TouchableOpacity onPress={toggleCamera}>
          <MaterialCommunityIcons
            name="camera-flip-outline"
            size={30}
            color="#fff"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleFlash}>
          <Ionicons name={getFlashIcon()} size={30} color="#fff" />
        </TouchableOpacity>
        {supportsHdr && (
          <TouchableOpacity onPress={toggleHdr}>
            <MaterialCommunityIcons
              name={hdrEnabled ? 'hdr' : 'hdr-off'}
              size={30}
              color={hdrEnabled ? colors.while : colors.grey}
            />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={toggleShutterSound}>
          <MaterialCommunityIcons
            name={shutterSoundEnabled ? 'volume-high' : 'volume-off'}
            size={30}
            color="#fff"
          />
        </TouchableOpacity>
      </View>

      <View style={cameraStyles.controls}>
        {photos.length > 0 && <ImagePreview images={photos} />}

        <Button onPress={() => takePhoto(flashMode, shutterSoundEnabled)} />

        <TouchableOpacity onPress={toggle60FPS} style={cameraStyles.fpsIcons}>
          <MaterialIcons
            name={is60FPS ? '60fps' : '30fps'}
            size={30}
            color={colors.while}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CameraComponent;
