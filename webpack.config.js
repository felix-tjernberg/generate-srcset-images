const path = require('path')
const WebpackShellPluginNext = require('webpack-shell-plugin-next')

module.exports = {
  devtool: false,
  entry: {
    index: path.join(__dirname, 'index.js')
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|webp)$/i,
        use: {
          loader: 'responsive-loader',
          options: {
            adapter: require('responsive-loader/sharp'),
            name: '[name]-[width].[ext]',
            quality: 100
          }
        }
      },
      {
        exclude: /node_modules/,
        test: /\.js$/i,
        loader: 'babel-loader'
      }
    ]
  },
  optimization: {
    moduleIds: 'deterministic'
  },
  output: {
    clean: true,
    filename: './throwaway.js',
    path: path.join(__dirname, 'srcset-images')
  },
  plugins: [
    new WebpackShellPluginNext({
      onBuildEnd: { scripts: ['node srcset-images/throwaway.js'] }
    })
  ],
  stats: 'errors-warnings',
  target: 'node'
}
