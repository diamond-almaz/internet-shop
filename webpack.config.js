const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { loader } = require('mini-css-extract-plugin');


const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const getOptimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    } 
  }

  if (isProd) {
    config.minimizer = [
      new TerserWebpackPlugin(),
      new CssMinimizerPlugin(),
    ]
  }

  return config;
}

const cssLoaders = (extra) => {
  const loaders = [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {},
        },
        "css-loader",
  ];

  if (extra) {
    loaders.push(extra)
  }

  return loaders;
}

const getFileName = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`

const babelOptions = (preset) => {
  const defaultOptions = {
    presets: ['@babel/preset-env']
  }

  if (preset) {
    defaultOptions.presets.push(preset)
  }

  return defaultOptions;
}

module.exports = {
  context: path.resolve(__dirname, 'src'),

  entry: {
    app: './app.tsx',
  },

  output: {
    filename: getFileName('js'),
    path: path.resolve(__dirname, 'dist')
  },

  optimization: getOptimization(),

  devServer: {
    port: 3000,
    open: true,
    hot: isDev,
  },

  devtool: isDev ? 'source-map' : false,

  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: isProd,
      }
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/favicon.ico'),
          to: path.resolve(__dirname, 'dist')
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: getFileName('css'),
    }),
  ],

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders('sass-loader'),
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions(),
        }
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions('@babel/preset-typescript'),
        }
      },
      {
        test: /\.[tj]sx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions('@babel/preset-react'),
        }
      },
    ]
  }
}