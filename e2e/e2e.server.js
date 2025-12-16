/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../webpack.dev');

// Создаём компилятор
const compiler = webpack(config);

// Передаём ТОЛЬКО devServer-опции первым аргументом
const server = new WebpackDevServer(config.devServer, compiler);

server.start()
  .then(() => {
    if (process.send) {
      process.send('ok');
    }
  })
  .catch((err) => {
    console.error('Failed to start dev server:', err);
    process.exit(1);
  });
