const SocketCluster = require('socketcluster');

const socketCluster = new SocketCluster({
  port: 3000,
  workers: 1,
  brokers: 1,
  environment: 'dev',
  appName: 'socketcluster',
  authKey: 'secret',
  workerController: require.resolve('./worker.js'),
  brokerController: require.resolve('./broker.js'),
  path: 'ws',
  logLevel: 3,
  wsEngine: 'ws'
});
