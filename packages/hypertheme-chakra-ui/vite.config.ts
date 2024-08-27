import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      // Configure the Vite TypeScript declaration plugin as needed
      include: ["src"],
    }),
  ],
  build: {
    // Specify output directory for production build
    outDir: "dist", // Adjust output directory as needed
    // Set target to 'esnext' for ES module output
    target: "esnext",
    // Adjust assetsDir as needed if you have assets to be copied
    assetsDir: "assets",
    sourcemap: true,
    // Rollup options
    rollupOptions: {
      // Externalize dependencies
      external: ["react", "react-dom"], // Add other dependencies as needed
      // Customize entry point if necessary
      input: path.resolve(__dirname, "src/index.ts"),
      // Customize output formats (ES modules and CommonJS)
      output: [
        {
          format: "es",
          entryFileNames: "index.esm.js",
        },
        {
          format: "cjs",
          entryFileNames: "index.cjs.js",
        },
      ],
    },
  },
});
