const config = require('./jest.config')

config.testMatch = ['<rootDir>/tests/e2e/**/*.spec.js']
config.globalSetup = '<rootDir>/etc/jest/e2e/global.setup.js'
config.globalTeardown = '<rootDir>/etc/jest/e2e/global.teardown.js'
config.setupFiles = ['<rootDir>/etc/jest/e2e/setupFiles.js']

console.log('RUNNING E2E TESTS')

module.exports = config
