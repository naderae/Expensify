// entry => output


const path = require('path');

// the entry point (app.js in src folder) is the file that gets loaded and executed
// the ouput is where you want to put the bundle file which combines all the files you need
// webpack will have access to everythinhg in this object

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  // here we are telling webpack to run babel everytime it sees a js file, and babel is what converts JSX to regular javascript
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  // this is the source map that helps you what is executing, and will help debug
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
};
