const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  const projectName = env.project || "tetris";
  return {
    entry: path.resolve(__dirname, `./${projectName}/src/index.ts`),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: "ts-loader",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: `./${projectName}/public/index.html`,
      }),
    ],
    devServer: {
      port: 3000,
      client: {
        overlay: false,
      },
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
  };
};
