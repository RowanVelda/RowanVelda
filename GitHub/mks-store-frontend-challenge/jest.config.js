module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/next/'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    '^@/integrations/(.*)$': '<rootDir>/integrations/$1',
    '\\.(scss/css/sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  testEnvironment: 'jsdom',
}
