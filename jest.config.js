'use strict';
const config = require('jest-config');
const ciParallelVars = require('ci-parallel-vars');
const chunkd = require('chunkd');
const child = require('child_process');

let chunk = null;

if (ciParallelVars && process.env.TEST_FILES) {
  let tests = JSON.parse(process.env.TEST_FILES).sort();
  chunk = chunkd(tests, ciParallelVars.index, ciParallelVars.total);
  console.log(`Tests are being split across ${ciParallelVars.total} nodes. Current node running ${chunk.length} of ${tests.length} tests`);
}

module.exports = {
  testMatch: chunk ? chunk : [
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
