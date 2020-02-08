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
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new CopyWebpackPlugin([
      // { from: path.join(__dirname, '../', 'src', 'features'), to: path.join(__dirname, '../', 'dist', 'src', 'features') },
      { from: path.join(__dirname, '../', 'src', 'assets'), to: path.join(__dirname, '../', 'dist', 'src', 'assets') },
      { from: path.join(__dirname, '../', 'src', 'views'), to: path.join(__dirname, '../', 'dist', 'src', 'views') },
      { from: path.join(__dirname, '../', 'node_modules', 'angular', 'angular.min.js'), to: path.join(__dirname, '../', 'dist', 'node_modules', 'angular') },
      { from: path.join(__dirname, '../', 'node_modules', 'angular-route', 'angular-route.min.js'), to: path.join(__dirname, '../', 'dist', 'node_modules', 'angular-route') },
      { from: path.join(__dirname, '../', 'node_modules', 'angular-ui-swiper', 'dist', 'angular-ui-swiper.js'), to: path.join(__dirname, '../', 'dist', 'node_modules', 'angular-ui-swiper', 'dist') },
      { from: path.join(__dirname, '../', 'node_modules', 'angular-ui-swiper', 'dist', 'angular-ui-swiper.css'), to: path.join(__dirname, '../', 'dist', 'node_modules', 'angular-ui-swiper', 'dist') },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.js?$/, // include .js files
        exclude: /node_modules/, // exclude any and all files in the node_modules folder
        use: [{
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-env']
          }
        },
      ]
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader",
            options: {

            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  },
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
