module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.s[ca]ss$/,
      use: [
        "style-loader",
        "css-loader",
        "postcss-loader",
        "sass-loader",
      ],
    })

    return config
  },
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}