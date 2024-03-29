const path = require('path')

module.exports = {
  entry: {
    'jigsaw': './src/jigsaw'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '../src'),
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|eot|otf|ttf|woff|woff2)$/,
        loader: 'url-loader',
      },
    ]
  }
}
