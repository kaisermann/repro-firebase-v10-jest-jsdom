/** @type {import('jest').Config} */
module.exports = {
  // If the following line is commented, the repro test passes
  // If the following line is uncommented, the repro test hangs forever
  testEnvironment: 'jest-environment-jsdom',
};
