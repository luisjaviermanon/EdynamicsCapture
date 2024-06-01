import {StyleSheet} from 'react-native';
import {borderRadius, colors, spacing} from '../theme';

export const buttonStyles = StyleSheet.create({
  circle: {
    width: 75,
    aspectRatio: 1,
    borderRadius: 75,
    backgroundColor: colors.while,
    justifyContent: 'center',
  },
  circleInner: {
    width: 65,
    aspectRatio: 1,
    borderRadius: 65,
    borderWidth: 0.5,
    borderColor: colors.black,

    position: 'absolute',
    zIndex: 1,
    alignSelf: 'center',
  },
});

export const cameraStyles = StyleSheet.create({
  controls: {
    position: 'absolute',
    bottom: spacing.medium,
    left: spacing.medium,
    right: spacing.medium,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  camera: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: borderRadius.large + borderRadius.medium,
    overflow: 'hidden',
  },
  fpsIcons: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: spacing.medium,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1,
  },
});

export const imagePreviewStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 100,
    height: 100,
    left: 0,
    zIndex: 1,
  },
  counterContainer: {
    position: 'absolute',
    bottom: spacing.medium,
    left: spacing.medium,
    backgroundColor: colors.while,
    minWidth: 25,
    minHeight: 25,
    borderRadius: 12.5,
    paddingHorizontal: spacing.small,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  counterText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  image: {
    width: 50,
    height: 70,
    position: 'absolute',
    borderRadius: borderRadius.medium,
    borderWidth: 2,
    borderColor: colors.while,
  },
});
