import React from 'react';
import {View, Text, Image} from 'react-native';
import {ImagePreviewProps} from '../../types';
import {imagePreviewStyles} from '../../styles/components';
const ImagePreview: React.FC<ImagePreviewProps> = ({images}) => {
  const lastThreeImages = images.slice(-3);

  return (
    <View style={imagePreviewStyles.container}>
      {lastThreeImages.map((image, index) => {
        const rotation =
          index === lastThreeImages.length - 1
            ? '0deg'
            : `${(lastThreeImages.length - index - 1) * 20 + 10}deg`;
        return (
          <Image
            key={index}
            source={{uri: `file://${image}`}}
            style={[
              imagePreviewStyles.image,
              {
                transform: [
                  {
                    rotate: rotation,
                  },
                ],

                right: index * 20,
              },
            ]}
          />
        );
      })}
      {images.length > 3 && (
        <View style={imagePreviewStyles.counterContainer}>
          <Text style={imagePreviewStyles.counterText}>{images.length}</Text>
        </View>
      )}
    </View>
  );
};

export default ImagePreview;
