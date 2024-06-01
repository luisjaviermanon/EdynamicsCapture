import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-vector-icons/Ionicons', () => {
  const React = require('react');
  const MockIcon = props => React.createElement('MockIcon', props);
  return MockIcon;
});

jest.mock('react-native-vector-icons/MaterialIcons', () => {
  const React = require('react');
  const MockIcon = props => React.createElement('MockIcon', props);
  return MockIcon;
});

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => {
  const React = require('react');
  const MockIcon = props => React.createElement('MockIcon', props);
  return MockIcon;
});
jest.mock('react-native-vision-camera', () => {
  return {
    __esModule: true,
    ...jest.requireActual('react-native-vision-camera'),
    Camera: jest.fn().mockImplementation(() => {
      return null;
    }),
    useCameraDevices: jest.fn().mockReturnValue({
      devices: [],
      selectedCamera: null,
    }),
    useFrameProcessor: jest.fn(),
  };
});
