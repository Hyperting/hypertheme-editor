import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    // Specify output directory for production build
    outDir: 'dist', // Adjust output directory as needed
    // Set target to 'esnext' for ES module output
    target: 'esnext',
    // Adjust assetsDir as needed if you have assets to be copied
    assetsDir: 'assets',
    // Rollup options
    rollupOptions: {
      // Externalize dependencies
      external: ['react', 'react-dom'], // Add other dependencies as needed
      // Customize entry point if necessary
      input: path.resolve(__dirname, 'src/index.ts'),
      // Customize output formats (ES modules and CommonJS)
      output: {
        dir: 'dist', // Adjust output directory as needed
        format: 'es', // Output format
        sourcemap: true, // Enable sourcemaps
      },
      // Plugins for Rollup (if necessary)
      plugins: [
        // Example: peerDepsExternal(), resolve(), commonjs(), typescript()
        // Add plugins as required by your project
      ],
    },
  },
});