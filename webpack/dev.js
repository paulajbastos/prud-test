import webpack from 'webpack';
import baseConfig from './base';

const config = {
  ...baseConfig,

  entry: [
    'webpack-dev-server/client?https://localhost:8081/#/',
    ...baseConfig.entry
  ],

  output: {
    publicPath: '/',
  },

  devtool: 'cheap-module-source-map',

  plugins: [
    ...baseConfig.plugins,
    //new webpack.HotModuleReplacementPlugin(),
  ],

  devServer: {
    // quiet: true,
    // hotOnly: true,
    // https: true,
    port: '8081',
    inline: true,
    historyApiFallback: true,
  }
}

export default config;
