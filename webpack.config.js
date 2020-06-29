module.exports = {
  module: {
    rules: [
      {
        // For every file with a js or jsx extension
        // Webpack pipes the code through babel- loader
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
