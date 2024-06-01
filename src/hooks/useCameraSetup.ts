import {useState, useRef} from 'react';
import {Camera} from 'react-native-vision-camera';
import {useCameraDevices, useCameraFormat} from 'react-native-vision-camera';

export const useCameraSetup = () => {
  const devices = useCameraDevices();
  const camera = useRef<Camera>(null);
  const [hdrEnabled, setHdrEnabled] = useState<boolean>(true);
  const [flashMode, setFlashMode] = useState<'on' | 'off'>('off');
  const [shutterSoundEnabled, setShutterSoundEnabled] = useState<boolean>(true);
  const [is60FPS, setIs60FPS] = useState(false);
  const [isFrontCamera, setIsFrontCamera] = useState(false);

  const device = isFrontCamera
    ? devices.find(device => device.position === 'front')
    : devices.find(device => device.position === 'back');

  const format = useCameraFormat(device, [{fps: is60FPS ? 60 : 30}]);

  const toggleHdr = () => setHdrEnabled(prevState => !prevState);
  const toggleCamera = () => setIsFrontCamera(prevState => !prevState);
  const toggleFlash = () =>
    setFlashMode(prevFlashMode => (prevFlashMode === 'off' ? 'on' : 'off'));
  const toggleShutterSound = () =>
    setShutterSoundEnabled(prevState => !prevState);
  const toggle60FPS = () => setIs60FPS(prevState => !prevState);

  return {
    camera,
    hdrEnabled,
    flashMode,
    shutterSoundEnabled,
    is60FPS,
    isFrontCamera,
    device,
    format,
    toggleHdr,
    toggleCamera,
    toggleFlash,
    toggleShutterSound,
    toggle60FPS,
  };
};
