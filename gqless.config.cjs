/**
 * @type {import("@gqless/cli").GqlessConfig}
 */
const config = {
  endpoint: "/",
  enumsAsStrings: false,
  react: true,
  scalars: { DateTime: "string" },
  preImport: "",
  introspection: {
    endpoint: "https://graphql-pokemon2.vercel.app/",
    headers: {},
  },
  destination: "./src/gqless/index.ts",
  subscriptions: false,
};

module.exports = config;
