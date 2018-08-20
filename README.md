# Socket cluster inconsistency between wsEngines - reproduction

When using `wsEngine: 'ws'`, `path` needs to be preceded with `/`, this is not the case for `wsEngine: 'uws'`.

Consider following client code and two example server configurations:

```JS
// client.js
const socket = socketCluster.create({ path: '/ws' })
```

```JS
// uws.js

const SocketCluster = require('socketcluster');

const socketCluster = new SocketCluster({
  workerController: require.resolve('./lib/worker.js'),
  brokerController: require.resolve('./lib/broker.js'),
  wsEngine: 'uws',
  path: 'ws'
});
```

```JS
// ws.js

const SocketCluster = require('socketcluster');

const socketCluster = new SocketCluster({
  workerController: require.resolve('./lib/worker.js'),
  brokerController: require.resolve('./lib/broker.js'),
  wsEngine: 'ws',
  path: 'ws' // This needs to be replaced with '/ws' in order for the client to connect
});
```

The client connects to `uws.js` without an issue, but it is not possible to establish connection with `ws.js`.
