module.exports = {
  "stories": [
    "../packages/**/*.stories.mdx",
    "../packages/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@chakra-ui/storybook-addon'
  ],
  features: {
    storyStoreV7: true,
    emotionAlias: false,
  },
  core: {
    builder: 'webpack5',
  },
  "framework": "@storybook/react"
}