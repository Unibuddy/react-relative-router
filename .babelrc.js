module.exports = {
  env: {
    test: {
      presets: ['@babel/react', ['@babel/env', { targets: { node: 14 } }]],
    },
  },
};
