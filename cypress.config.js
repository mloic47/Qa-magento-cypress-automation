const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
    },
    baseUrl: 'https://magento.softwaretestingboard.com',
    setupNodeEvents(on, config) {
      // implement plugins here (like Allure or Mochawesome reporters)
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
    watchForFileChanges: false
  },
  viewportWidth: 1280,
  viewportHeight: 800,
  defaultCommandTimeout: 10000,
});
