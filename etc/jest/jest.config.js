module.exports = {
  rootDir: process.env.PWD,
  testEnvironment: 'node',
  verbose: true,
  testEnvironment: 'node',
  testURL: 'http://localhost:1234',
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: ['**/src/scripts/**/*.js'],
  coverageDirectory: 'tests/coverage',
  coverageReporters: ['lcov']
}
