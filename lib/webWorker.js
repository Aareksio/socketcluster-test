const koaStatic = require('koa-static');
const path = require('path');
const Koa = require('koa');

const app = new Koa();

app.use(koaStatic(path.join(__dirname, '../static'), { maxage: 2592000000 }));

module.exports = function webWorker(httpServer) {
  httpServer.on('request', app.callback());
};
