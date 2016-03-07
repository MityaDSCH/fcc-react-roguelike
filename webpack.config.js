module.exports = {
  entry: getEntrySources(['./src/js/entry.js']),
  output: {
    path: __dirname,
    publicPath: 'http://localhost:8080/',
    filename: 'bundle.js'
  },
  devtool: 'eval',
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'source-map'
      }
    ],
    loaders: [
      {
        test: /\.scss$/,
        include: /src/,
        loaders: [
          'style',
          'css',
          lq('autoprefixer', {
            browsers: 'last 3 versions'
          }),
          lq('sass', {
            outputStyle: 'expanded'
          })
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          lq('url', {
            limit: 8192
          }),
          'img'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [
          'react-hot',
          lq('babel', {
            presets: ['stage-0', 'react', 'es2015']
          })
        ]
      }
    ]
  }
};

function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    sources.push('webpack-dev-server/client?http://localhost:8080');
    sources.push('webpack/hot/only-dev-server');
  }

  return sources;
}

function lq(loader, query) {
  return loader + '?' + JSON.stringify(query);
}
