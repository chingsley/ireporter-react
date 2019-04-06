module.exports = {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: `${__dirname}/dist`,
    historyApiFallback: true,
    port: 4000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.s?css/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};
