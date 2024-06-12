/**
/**
 * Hook que solicita permisos para usar la cámara.
 * @function
 */
import {useEffect} from 'react';
import {Camera} from 'react-native-vision-camera';

export const useCameraPermissions = () => {
  useEffect(() => {
    (async () => {
      await Camera.requestCameraPermission();
    })();
  }, []);
};
