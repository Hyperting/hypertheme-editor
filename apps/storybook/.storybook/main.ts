import type { StorybookConfig } from "@storybook/react-vite";
import { join, dirname } from "path";
import nodePolyfills from "rollup-plugin-polyfill-node";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: [
    "../../../packages/**/stories/*.@(mdx|stories.@(js|jsx|mjs|ts|tsx))",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  viteFinal: async (config) => {
    config.plugins?.push(
      nodePolyfills({
        include: ["process"],
      })
    );
    return {
      ...config,
      resolve: {
        alias: {
          ...config.resolve?.alias,
          process: "process/browser",
        },
      },
    };
  },
};
export default config;
