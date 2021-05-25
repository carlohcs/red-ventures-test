const config = require('./jest.config');

config.testMatch = ['<rootDir>/src/scripts/**/*.spec.js',];
config.globalSetup = '<rootDir>/etc/jest/unit/global.setup.js';
config.globalTeardown = '<rootDir>/etc/jest/unit/global.teardown.js';
config.setupFiles = ['<rootDir>/etc/jest/unit/setupFiles.js',];

console.log('RUNNING UNIT TESTS');

module.exports = config;