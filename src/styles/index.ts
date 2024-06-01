import {StyleSheet} from 'react-native';
import {colors, spacing, borderRadius} from '../theme';
export const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  text: {
    color: colors.while,
  },
  button: {
    padding: spacing.medium,
    borderRadius: borderRadius.medium,
    backgroundColor: colors.grey,
  },
});
