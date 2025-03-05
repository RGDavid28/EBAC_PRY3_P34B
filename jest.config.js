module.exports = {
    verbose: true,
    setupFilesAfterEnv: ['./setupTests.js'],
    
    preset: "@vue/cli-plugin-unit-jest",
    transformIgnorePatterns: ["node_modules/(?!axios)"],  
};