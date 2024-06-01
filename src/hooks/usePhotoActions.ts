import {useState} from 'react';
import {Camera} from 'react-native-vision-camera';

export const usePhotoActions = (cameraRef: React.RefObject<Camera>) => {
  const [photos, setPhotos] = useState<string[]>([]);

  const takePhoto = async (
    flashMode: 'on' | 'off',
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
