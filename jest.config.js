module.exports = {
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/config/styleMock.js',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
