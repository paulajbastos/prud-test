import webpack from 'webpack';
import path from 'path';
// import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config = {
  // node: {
  //   fs: 'empty'
  // },
  entry: [path.join(__dirname, '../', 'src', 'js', 'app')],
  output: {
    path: path.join(__dirname, '../', 'dist'),
    filename: 'bundle.js',
    publicPath: './',
  },
  resolve: {
    extensions: ['.js', '.scss', '.sass', '.css'],
    alias: {
      '@modules': path.resolve(__dirname, '../', 'src', 'js', 'modules/'),
      '@config': path.resolve(__dirname, '../', 'src', 'js', 'config/'),
      '@utils': path.resolve(__dirname, '../', 'src', 'js', 'utils/')
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../', 'src', 'index.html'),
      inject: true
    }),
    // new ExtractTextPlugin('bundle.css'),
  ]
};

export default { ...config };
