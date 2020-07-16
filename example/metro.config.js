const path = require('path');
const escape = require('escape-string-regexp');
const package = require('../package.json');
const blacklist = require('metro-config/src/defaults/blacklist');

const root = path.resolve(__dirname, '..');

const peerDeps = ['@expo/vector-icons', ...Object.keys(package.peerDependencies)];

module.exports = {
  projectRoot: __dirname,
  watchFolders: [root],

  // We need to make sure that only one version is loaded for peerDependencies
  // So we blacklist them at the root, and alias them to the versions in example's node_modules
  resolver: {
    blacklistRE: blacklist(peerDeps.map(m => new RegExp(`^${escape(path.join(root, 'node_modules', m))}\\/.*$`))),
    extraNodeModules: peerDeps.reduce((acc, name) => {
      acc[name] = path.join(__dirname, 'node_modules', name);
      return acc;
    }, {}),
  },

  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
