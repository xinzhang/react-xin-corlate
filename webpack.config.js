var path = require('path');
var webpack = require('webpack');

module.exports = {
  //devtool: 'eval-source-map',  
  // entry: {
  //   main: [
  //     'webpack-dev-server/client?http://localhost:3080',
  //     'webpack/hot/only-dev-server',
  //     './src/main.jsx'
  //   ]
  // },
  entry: ['./src/main.jsx'],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'web/build'),
    publicPath: '/build/'
  },
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin(),
  //   new webpack.NoErrorsPlugin()
  // ],
  devServer: {
    contentBase: 'web',
    port: 3900,
    hot: true,
    inline: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        loader: 'react-hot-loader!babel-loader',
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'src'),
        loader: 'style!css!sass'
      },
      { test: /\.css$/, excludes: [/node_modules/], loader: "style!css" },
      { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
      
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/svg+xml" } 
      
    ]    
  }
}
