const { VueLoaderPlugin } = require("vue-loader"); // import vue-loader plugin

module.exports = {
  entry: "./src/index.js", // entry point
  output: {
    // output
    filename: "[name].[contenthash].js", // file name
  },
  resolve: {
    extensions: [".js", ".vue"], // resolve js and vue files
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|woff|svg|eof|eot|ttf)$/i, // regex to match only image files
        use: [
          {
            loader: "file-loader", // use file-loader
          },
        ],
      },
      {
        test: /\.vue$/, // regex to match only vue files
        loader: "vue-loader", // use vue-loader
      },
      {
        test: /\.scss|\.css$/,
        use: [
          "vue-style-loader", // use vue-style-loader
          "style-loader", // use style-loader
          "css-loader", // use css-loader
          "sass-loader", // use sass-loader
        ],
      },
      {
        test: /\.m?js$/, // regex to match only js files
        exclude: /node_modules/, // exclude node_modules
        use: {
          loader: "babel-loader", // use babel-loader
          options: {
            presets: [
              "@babel/preset-env", // env preset
            ],
            plugins: [
              "@babel/plugin-transform-runtime", // plugin to transform runtime
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(), // use vue loader plugin
  ],
};
