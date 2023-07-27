module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/, // regex to match only js files
        exclude: /node_modules/, // exclude node_modules
        use: {
          loader: "babel-loader", // use babel-loader
          options: {
            presets: [
              "@babel/preset-react", // react preset
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
};
