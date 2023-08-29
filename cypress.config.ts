import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";
import * as path from "path";
import * as fs from "fs-extra";

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve("./cypress", "config", `${file}.json`);
  return fs.readJson(pathToConfigFile);
}

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  let file = config.env.configFile || "qa";
  let vars = await getConfigurationByFile(file);
  config.env = {
    ...vars,
  };

  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  e2e: {
    baseUrl: "https://practicetestautomation.com/practice-test-login/",
    specPattern: "**/*.feature",
    setupNodeEvents,
  },
});
