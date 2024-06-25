const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./main", // Entry point for bundling
  mode: "production",
  output: {
    uniqueName: "remote", // unique name for the app
    path: path.join(__dirname, "dist"), // Where to put bundle files
    publicPath: "auto", // Which public path to use to serve files
    filename: "[name].js", // name of the bundled files
    libraryTarget: "module", // We are exposing files as es modules
    clean: true, // Clear dist folder before building
  },
  optimization: {
    runtimeChunk: false, // Do not create a separate runtime chunk for webpack runtime and add it in files
    minimize: false, // Do not minimize for debugging
  },
  experiments: {
    outputModule: true, // Output as es module
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "remote", // Unique name for this remote app
      filename: "remoteEntry.js", // Filename for the remote entry file
      exposes: {
        // What to expose
        "./utils": "./utils",
      },
      library: {
        // Can be exposed as module, script, var, etc
        type: "module",
      },
    }),
    new CopyPlugin({
      patterns: [{ from: "index.html" }], // Just copy index.html to dist folder
    }),
  ],
};
