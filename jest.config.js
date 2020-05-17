module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["**/src/*.bs.js", "!src/__tests__"],
  coveragePathIgnorePatterns: ["/node_modules/"],
  testMatch: ["**/src/__tests__/**/*.bs.js"],
  coverageReporters: ["text", "lcov"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/__mocks__/fileMock.js",
  },
};
