const path = require('path');
const hwp = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    //path: path.resolve(__dirname, 'dist'),
    path: "/home/koju/repos/todo-list",
    filename: 'bundle.js',
  },
  plugins:[
    new hwp({
        template: './src/index.html',
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