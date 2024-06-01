module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-native-vector-icons|@react-native/js-polyfills))',
  ],

  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    '<rootDir>/jest.setup.js',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/'],
  globals: {
    'ts-jest': {
      babelConfig: true,
      diagnostics: false,
    },
  },
};
