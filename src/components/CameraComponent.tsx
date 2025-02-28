/**
 * @fileoverview Camera component in React Native using Vision Camera.
 * @module CameraComponent
 */

import React, {useState} from 'react';
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
 * Functional component that represents the configuration and use of the camera.
 * @function
 * @returns {JSX.Element} - React element that represents the camera configuration.
 */
const CameraComponent: React.FC = () => {
  const hasCameraPermission = useCameraPermissions();
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
    startRecording,
    stopRecording,
    isRecording,
  } = useCameraSetup();

  const {photos, takePhoto} = usePhotoActions(
    camera as React.RefObject<Camera>,
  );
  const [pressTimeout, setPressTimeout] = useState<NodeJS.Timeout | null>(null);

  const handlePressIn = () => {
    const timeout = setTimeout(startRecording, 500);
    setPressTimeout(timeout);
  };

  const handlePressOut = () => {
    if (pressTimeout) {
      clearTimeout(pressTimeout);
      setPressTimeout(null);
    }
    if (isRecording) {
      stopRecording();
    } else {
      takePhoto(flashMode, shutterSoundEnabled);
    }
  };
  if (!device || !format || !hasCameraPermission) {
    return (
      <View style={cameraStyles.loadingContainer}>
        <Text style={cameraStyles.loadingText}>
          Requesting Camera Permission...
        </Text>
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
        video={true}
      />
      <View style={cameraStyles.topBar}>
        <TouchableOpacity onPress={toggleCamera}>
          <MaterialCommunityIcons
            name="camera-flip-outline"
            size={30}
            color={colors.while}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleFlash}>
          <Ionicons name={getFlashIcon()} size={30} color={colors.while} />
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
            color={colors.while}
          />
        </TouchableOpacity>
      </View>

      <View style={cameraStyles.controls}>
        {photos.length > 0 && <ImagePreview images={photos} />}

        <Button
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          isRecording={isRecording}
        />

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
