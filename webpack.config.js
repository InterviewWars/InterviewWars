const config = {
   entry: './app/views/main.js', // entry point
   output: {
         filename: './public/bundle.js', // place where bundled app will be served
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
