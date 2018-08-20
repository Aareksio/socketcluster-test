const SCWorker = require('socketcluster/scworker');

const webWorker = require('./webWorker');
const socketWorker = require('./socketWorker');

class Worker extends SCWorker {
  run() {
    webWorker(this.httpServer);
    socketWorker(this.scServer);
  }
}

new Worker();
