/**
 * Button component properties.
 */
export interface ButtonProps {
  onPressIn: () => void;
  onPressOut: () => void;
  isRecording: boolean;
}
/**
 * ImagePreview component properties.
 */
export interface ImagePreviewProps {
  images: string[];
}
