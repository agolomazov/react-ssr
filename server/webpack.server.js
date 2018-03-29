const path = require('path');

module.exports = {
  // говорим webpack, что мы строим пакет для NodeJS,
  // а не для браузера
  target: 'node',
  // точка входа в проект
  entry: './src/index.js',
  // куда поместить выходной файл, который сгенерирован
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] } }]
          ]
        }
      }
    ]
  }
};