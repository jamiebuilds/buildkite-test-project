'use strict';
const config = require('jest-config');

module.exports = {
  testMatch: [
    ...config.defaults.testMatch,
    '**/__tests__/**/*.{ts,tsx}',
    '**/?(*.)+(spec|test).{ts,tsx}',
  ],
  moduleFileExtensions: [
    ...config.defaults.moduleFileExtensions,
    'ts',
    'tsx',
  ],
  transform: {
    ...config.defaults.transform,
     '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  }
};
