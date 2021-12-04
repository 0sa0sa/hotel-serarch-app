const path = require("path");
const outputPath = path.resolve(__dirname, "dist");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = [
  {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: "development",

    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: "./src/index.tsx",
    // ファイルの出力設定
    output: {
      //  出力ファイルのディレクトリ名
      // 出力ファイル名
      filename: "main.js",
      path: outputPath,
      publicPath: "/",
    },
    module: {
      rules: [
        {
          // 拡張子 .ts もしくは .tsx の場合
          test: /\.tsx?$/,
          // TypeScript をコンパイルする
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    // import 文で .ts や .tsx ファイルを解決するため
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
    },
    // ES5(IE11等)向けの指定（webpack 5以上で必要）
    target: ["web", "es5"],
    devServer: {
      historyApiFallback: true,
      static: {
        directory: outputPath,
      },
    },
  },
  {
    mode: "development",
    entry: {
      style: "./stylesheets/index.scss",
    },
    output: {
      path: outputPath,
      publicPath: "/",
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            "css-loader",
            "sass-loader",
          ],
        },
      ],
    },
    plugins: [new MiniCssExtractPlugin({ filename: "bundle.css" })],
  },
];
