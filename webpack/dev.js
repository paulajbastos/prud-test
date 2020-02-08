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
        }]
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
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ]
  },
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
