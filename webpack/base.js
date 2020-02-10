import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config = {
  entry: [path.join(__dirname, '../', 'src', 'js', 'app')],

  output: {
    path: path.join(__dirname, '../', 'dist'),
    filename: 'bundle.js',
    publicPath: './',
  },
  resolve: {
    extensions: ['.js', '.scss', '.sass', '.css']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../', 'index.html'),
      inject: true
    })
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
              importLoaders: 1,
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true
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
  }
};

export default { ...config };
