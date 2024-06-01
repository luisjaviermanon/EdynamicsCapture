import {useEffect} from 'react';
import {Camera} from 'react-native-vision-camera';

export const useCameraPermissions = () => {
  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermission();
      const microphonePermission = await Camera.requestMicrophonePermission();
    })();
  }, []);
};
