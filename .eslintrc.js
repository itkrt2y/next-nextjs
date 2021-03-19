/** @type import("eslint").Linter.Config */
module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "preact",
    "prettier",
  ],
  env: { browser: true, node: true },
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "react/react-in-jsx-scope": "off",
    "react/prefer-stateless-function": "error",
    "react/prop-types": "off",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "import/no-unresolved": "off",
    "import/order": ["error", { alphabetize: { order: "asc" } }],

    // https://github.com/basarat/typescript-book/blob/master/docs/tips/defaultIsBad.md
    // https://twitter.com/dan_abramov/status/1255229440860262400
    "import/no-default-export": "error",

    // TODO: eslint-config-preactで入るjestのルールは全てoffにしたいが、簡単な方法がわからなかった
    "jest/valid-expect": "off",
    "jest/expect-expect": "off",
  },
  overrides: [
    {
      files: ["vite.config.ts"],
      rules: { "import/no-default-export": "off" },
    },
    {
      files: ["./cypress/**/*.@(js|ts|tsx)"],
      rules: { "no-undef": "off" },
    },
  ],
};
