const SocketCluster = require('socketcluster');

const socketCluster = new SocketCluster({
  workerController: require.resolve('./lib/worker.js'),
  brokerController: require.resolve('./lib/broker.js'),
  wsEngine: 'uws',
  path: 'ws'
});
