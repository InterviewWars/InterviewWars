// var path = require('path');
// var webpack = require('webpack');
//
// module.exports = {
//     entry: './main.js',
//     output: {
//         path: path.resolve(__dirname, 'build'),
//         filename: 'bundle.js'
//     },
//     module: {
//         loaders: [
//             {
//                 test: /\.js$/,
//                 exclude:/node_modules/,
//                 loader: 'babel-loader',
//                 query: {
//
//                     presets: ['env', 'react']
//                 }
//             }
//             // {
//             //   test: /\.css$/,
//             //   use: [ 'style-loader', 'css-loader' ]
//             // }
//         ]
//     },
//     // stats: {
//     //     colors: true
//     // },
//     // devtool: 'source-map'
// };


var config = {
   entry: './main.js', // entry point
   output: {
         filename: 'bundle.js', // place where bundled app will be served
      },
   devServer: {
         inline: true, // autorefresh
         port: 8080 // development port server
      },
   module: {
         loaders: [
            {
               test: /\.jsx?$/, // search for js files
               exclude: /node_modules/,
               loader: 'babel-loader',
   query: {
               presets: ['env', 'react'] // use es2015 and react
            }
         }
      ]
   }
}
module.exports = config;
