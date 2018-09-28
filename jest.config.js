'use strict';
const config = require('jest-config');
const isCI = require('is-ci');
const ciParallelVars = require('ci-parallel-vars');
const child = require('child_process');

// if (isCI && ciParallelVars) {
//   chil
// }

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
