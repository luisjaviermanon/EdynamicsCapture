import {use} from 'react';
import {Camera} from 'react-native-vision-camera';

const cameraPermissionPromise = (async () => {
  const granted = await Camera.requestCameraPermission();
  return granted === 'granted';
})();

export function useCameraPermissions() {
  return use(cameraPermissionPromise);
}
