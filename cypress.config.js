const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'mochawesome', //fazendo um relatorio de testes
  reporterOptions:{
    reportDir:'cypress/relatorio',
    overwrite:true,
    html:true,
    json:false,
    timestamp:'ddmmyyyy_HHMMss'
  }
});
