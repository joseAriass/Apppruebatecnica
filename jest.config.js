const config = {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    transformIgnorePatterns: [
        '/node_modules/',
    ],
};
export default config;