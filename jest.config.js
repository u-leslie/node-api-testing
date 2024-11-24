module.exports = {
  testEnvironment: "node",
  testTimeout: 1000000,  
  setupFilesAfterEnv: ["./tests/setup.js"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!mongodb-memory-server-core).+\\.js$",
  ],
};
