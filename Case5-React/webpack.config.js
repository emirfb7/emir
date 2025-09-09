const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  
  return {
    entry: {
      script: ['./src/script1.js', './src/script2.js', './src/styles.js']
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].min.js',
      clean: true
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'style.min.css'
      })
    ],
    mode: argv.mode || 'development',
    devServer: {
      static: path.join(__dirname, 'src'),
      port: 3001,
      open: true
    }
  };
};