const path = require('path');
const package = require('../package.json');

const moduleResolverConfig = {
  alias: {
    [package.name]: path.join(__dirname, '..', 'src'),
  },
};

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [['module-resolver', moduleResolverConfig]],
  };
};
