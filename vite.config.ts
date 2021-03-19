import { resolve } from "path";
import preact from "@preact/preset-vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "es2019",
  },
  plugins: [preact()],
  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
    },
  },
});
