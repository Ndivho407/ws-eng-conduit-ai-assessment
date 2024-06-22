module.exports = {
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: async (config, { configType }) => {
    return config;
  },
};
