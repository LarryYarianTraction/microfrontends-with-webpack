const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const mf = require('@angular-architects/module-federation/webpack')
const path = require('path')
const share = mf.share

const sharedMappings = new mf.SharedMappings()
sharedMappings.register(path.join(__dirname, 'tsconfig.json'), [
  /* mapped paths to share */
])

module.exports = {
  entry: './src/main.ts',
  output: {
    uniqueName: 'spotify',
    publicPath: 'auto',
    scriptType: 'text/javascript',
  },
  mode: 'development',
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases()
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'spotify',
      filename: 'remoteEntry.js',
      exposes: {
        './song-seeker': './src/mf-main'
      },
      shared: share({
        '@angular/core': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        '@angular/common': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        ...sharedMappings.getDescriptors()
      })
    }),
    sharedMappings.getPlugin()
  ]
}
