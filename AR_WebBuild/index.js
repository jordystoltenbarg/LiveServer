const tls = require('tls')
const https = require('live-server-https');

const port = 8443;

const server = tls.createServer(https, (socket) => {
  console.log('server connected',
              socket.authorized ? 'authorized' : 'unauthorized');
  socket.write('welcome!\n');
  socket.setEncoding('utf8');
  socket.pipe(socket);
});
server.listen(port, () => {
  console.log("Server started. Listening on: https://127.0.0.1:" + port);
});
