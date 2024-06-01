import {useEffect} from 'react';
import {Camera} from 'react-native-vision-camera';

export const useCameraPermissions = () => {
  useEffect(() => {
    (async () => {
      await Camera.requestCameraPermission();
      await Camera.requestMicrophonePermission();
    })();
  }, []);
};
