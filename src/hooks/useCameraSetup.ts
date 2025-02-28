import {useState, useRef} from 'react';
import {
  Camera,
  useCameraDevices,
  useCameraFormat,
} from 'react-native-vision-camera';

/**
 * Hook to configure the camera.
 * @function
 * @returns {object} - Status and functions to manage camera settings.
 */

export const useCameraSetup = () => {
  let devices = useCameraDevices();
  const camera = useRef<Camera>(null);
  const [hdrEnabled, setHdrEnabled] = useState<boolean>(true);
  const [flashMode, setFlashMode] = useState<'on' | 'off'>('off');
  const [shutterSoundEnabled, setShutterSoundEnabled] = useState<boolean>(true);
  const [is60FPS, setIs60FPS] = useState(false);
  const [isFrontCamera, setIsFrontCamera] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const currentDevice = isFrontCamera
    ? devices.find(device => device.position === 'front')
    : devices.find(device => device.position === 'back');

  const format = useCameraFormat(currentDevice, [{fps: is60FPS ? 60 : 30}]);

  const toggleHdr = () => setHdrEnabled(prevState => !prevState);
  const toggleCamera = () => setIsFrontCamera(prevState => !prevState);
  const toggleFlash = () =>
    setFlashMode(prevFlashMode => (prevFlashMode === 'off' ? 'on' : 'off'));
  const toggleShutterSound = () =>
    setShutterSoundEnabled(prevState => !prevState);
  const toggle60FPS = () => setIs60FPS(prevState => !prevState);
  const startRecording = async () => {
    if (camera.current) {
      setIsRecording(true);
      try {
        await camera.current.startRecording({
          onRecordingFinished: video => {
            console.log(video);
            setIsRecording(false);
          },
          onRecordingError: error => {
            console.error(error);
            setIsRecording(false);
          },
          flash: flashMode,
          videoCodec: 'h264',
        });
      } catch (e) {
        console.error(e);
        setIsRecording(false);
      }
    }
  };

  const stopRecording = async () => {
    if (camera.current && isRecording) {
      await camera.current.stopRecording();
      setIsRecording(false);
    }
  };
  return {
    camera,
    hdrEnabled,
    flashMode,
    shutterSoundEnabled,
    is60FPS,
    isFrontCamera,
    device: currentDevice,
    format,
    toggleHdr,
    toggleCamera,
    toggleFlash,
    toggleShutterSound,
    toggle60FPS,
    startRecording,
    stopRecording,
    isRecording,
  };
};
