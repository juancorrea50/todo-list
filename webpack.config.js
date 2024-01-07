const path = require('path');
const hwp = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins:[
    new hwp({
        title:'To-Do List',
        filename:'index.html',
        inject:'head',
        scriptLoading: 'defer',
    })
  ],
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        }
    ]
  }
};