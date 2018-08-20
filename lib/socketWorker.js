module.exports = function socketWorker(scServer) {
  console.log('Worker starting...');

  scServer.on('connection', socket => {
    console.log(`${socket.id} connected, status: ${socket.authState}!`);
  });
};
