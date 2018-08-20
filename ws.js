const SocketCluster = require('socketcluster');

const socketCluster = new SocketCluster({
  workerController: require.resolve('./lib/worker.js'),
  brokerController: require.resolve('./lib/broker.js'),
  wsEngine: 'ws',
  path: 'ws' // This needs to be replaced with '/ws' in order for the client to connect
});
