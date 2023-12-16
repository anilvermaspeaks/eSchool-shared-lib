module.exports = () => ({
  presets: [
    ['@babel/preset-typescript'],
    [
      '@babel/env',
      {
        bugfixes: true,
        loose: true,
        modules: false,
        targets: {
          esmodules: true,
          chrome: 70,
        },
      },
    ],
  ],
});