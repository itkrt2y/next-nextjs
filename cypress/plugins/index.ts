/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
import { startDevServer } from "@cypress/vite-dev-server";

const pluginConfig: Cypress.PluginConfig = (on, config) => {
  on("dev-server:start", async (options) => startDevServer({ options }));

  return config;
};
// eslint-disable-next-line import/no-default-export
export default pluginConfig;
