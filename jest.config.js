module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    // For styles
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    // For assets
    '^.+\\.(jpg|jpeg|png|gif|webp|svg|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],  
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
};
