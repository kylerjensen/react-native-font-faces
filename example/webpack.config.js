const path = require('path');
const metroConfig = require('./metro.config');
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  config.module.rules.push({
    test: /\.(js|ts|tsx)$/,
    include: path.resolve(__dirname, '..', 'src'),
    use: 'babel-loader',
  });

  // We need to make sure that only one version is loaded for peerDependencies
  // So we alias them to the versions in example's node_modules
  Object.assign(config.resolve.alias, {
    ...metroConfig.resolver.extraNodeModules,
    'react-native-web': path.join(__dirname, 'node_modules', 'react-native-web'),
    '@expo/vector-icons/MaterialCommunityIcons': require.resolve('@expo/vector-icons/MaterialCommunityIcons'),
  });

  return config;
};
