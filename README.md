# react

## 検証環境
```
$ node -v
v12.4.0

$ yarn -v
1.16.0
```

## やったこと
### 事前準備
```
$ yarn init -y
$ yarn add webpack webpack-cli webpack-dev-server --dev
$ yarn add @babel/core babel-loader @babel/preset-env @babel/preset-react --dev
$ yarn add react react-dom --dev
$ yarn add html-webpack-plugin html-loader --dev
$ mkdir src
$ touch src/index.js
$ touch src/index.html
```

### webpack.config.jsを作成・編集
```
$ touch webpack.config.js
```
```
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', "@babel/preset-react"],
          },
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true
  }
};
```

### package.jsonを編集
```
"scripts": {
    "start": "webpack-dev-server --mode development --open",
    "build": "webpack --mode production"
},
```

### src/index.jsを編集
```
ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
  );
```

### src/index.htmlを編集
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>hello react</title>
</head>
<body>
    <div id="root">
    </div>
</body>
</html>
```

### テストサーバー立ち上げてみる
```
$ yarn start
```

### どうせならtypescriptでも書けるようにする
```
$ yarn add typescript ts-loader @types/react @types/react-dom --dev
$ touch tsconfig.json
```

### tsconfig.jsonを編集
```
{
    "compilerOptions": {
      "sourceMap": true,
      "target": "es5", // TSはECMAScript 5に変換
      "module": "es2015", // TSのモジュールはES Modulesとして出力
      "outDir": "./dist/",
      "noImplicitAny": true,
      "jsx": "react"
    }
}
```

### webpack.config.jsも編集
```
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', "@babel/preset-react"],
          },
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
          options: { minimize: true }
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true
  }
};
```

### index.tsxを作成
```
$ touch src/index.tsx
```

### index.tsxを編集
```
import * as React from 'react';
import * as ReactDOM from 'react-dom';

ReactDOM.render(
    <h1>Hello, world!!!</h1>,
    document.getElementById('root')
);
```

### テスト
```
$ yarn start
```

### ここからは以下URLの内容をこなしていく
* https://reactjs.org/docs/hello-world.html