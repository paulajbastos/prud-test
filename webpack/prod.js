import webpack from 'webpack';
// import CopyWebpackPlugin from 'copy-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
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
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      uglifyOptions: {
        // compress: false,
        // ecma: 6,
        // mangle: true
      },
      sourceMap: true
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    // new CopyWebpackPlugin([
    //   { from: './images', to: 'images' },
    // ]),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
        uglifyOptions: {
          compress: {
            drop_console: false,
          }
        }
      }),
    ],
  },
};

export default config;
