import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import nodePolyfills from "rollup-plugin-polyfill-node";

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      include: ["process"],
    }),
  ],
  resolve: {
    alias: {
      process: "process/browser",
    },
  },
});
