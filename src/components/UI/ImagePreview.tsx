/**
 * @fileoverview Functional component that shows a preview of the last three images.
 *  * @module ImagePreview
 */

import React from 'react';
import {View, Text, Image} from 'react-native';

import {ImagePreviewProps} from '../../types';
import {imagePreviewStyles} from '../../styles/components';

/**
 * ImagePreview component properties.
 * @typedef {object} ImagePreviewProps
 * @property {string[]} images - Array of URLs of the images to display in the preview.
 */

/**
 * Functional component that represents an image preview.
 * @function
 * @param {ImagePreviewProps} props - Component Properties.
 * @returns {JSX.Element} React element that represents the image preview.
 */

const ImagePreview: React.FC<ImagePreviewProps> = ({images}) => {
  const lastThreeImages = images.slice(-3);

  return (
    <View style={imagePreviewStyles.container}>
      {lastThreeImages.map((image, index) => {
        const isRotated = index !== lastThreeImages.length - 1;
        const rotation =
          index === lastThreeImages.length - 1
            ? '0deg'
            : `${(lastThreeImages.length - index - 1) * 20 + 10}deg`;
        const opacity = isRotated ? 0.85 : 1.0;
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
                opacity: opacity,
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
