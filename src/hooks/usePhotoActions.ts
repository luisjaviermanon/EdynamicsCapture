import {useState} from 'react';
import {Camera} from 'react-native-vision-camera';

/**
 * Hook to handle photo capture.
 * @function
 * @param {React.RefObject<Camera>} cameraRef - Referent of the camera
 * @returns {object} - Status and functions for managing photos.
 */
export const usePhotoActions = (cameraRef: React.RefObject<Camera>) => {
  const [photos, setPhotos] = useState<string[]>([]);

  const takePhoto = async (
    flashMode: 'on' | 'off' | 'auto',
    shutterSoundEnabled: boolean,
  ) => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePhoto({
        flash: flashMode,
        enableShutterSound: shutterSoundEnabled,
      });
      setPhotos(prevPhotos => [...prevPhotos, photo.path]);
    }
  };

  return {
    photos,
    takePhoto,
  };
};
