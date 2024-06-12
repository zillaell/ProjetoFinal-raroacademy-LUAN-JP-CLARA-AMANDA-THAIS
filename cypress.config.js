const { defineConfig } = require("cypress")

// module.exports = defineConfig({
//   e2e: {
//     baseUrl:'https://raromdb-3c39614e42d4.herokuapp.com',
//     setupNodeEvents(on, config) {
//     },
//   },
// });
const { addCucumberPreprocessorPlugin, } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin, } = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://raromdb-frontend-c7d7dc3305a0.herokuapp.com/',
    specPattern: 'cypress/e2e/**/*.feature',
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        'file:preprocessor',
        createBundler({ plugins: [createEsbuildPlugin(config)] })
      );

      return config;
    },
  },
});