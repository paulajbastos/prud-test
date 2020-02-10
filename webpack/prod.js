import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import path from 'path';
import baseConfig from './base';

const config = {
  ...baseConfig,

  plugins: [
    ...baseConfig.plugins,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new CopyWebpackPlugin([
      // { from: path.join(__dirname, '../', 'src', 'features'), to: path.join(__dirname, '../', 'dist', 'src', 'features') },
      { from: path.join(__dirname, '../', 'src', 'assets'), to: path.join(__dirname, '../', 'dist', 'src', 'assets') },
      { from: path.join(__dirname, '../', 'src', 'views'), to: path.join(__dirname, '../', 'dist', 'src', 'views') }
    ]),
  ],

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
        uglifyOptions: {
          compress: {
            drop_console: false,
          }
        },
        sourceMap: true
      }),
    ],
  },
};

export default config;
