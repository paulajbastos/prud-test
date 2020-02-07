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
      template: path.join(__dirname, '../', 'src', 'index.html'),
      inject: true
    })
  ]
};

export default { ...config };
