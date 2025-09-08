const path = require('path');

module.exports = {
  entry: {
    main: ['./src/script1.js', './src/script2.js', './src/styles.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'src'),
    port: 3001,
    open: true
  }
};