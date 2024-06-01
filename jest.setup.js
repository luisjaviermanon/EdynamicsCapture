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
