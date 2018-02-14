const server = require('http').createServer();

server.on('request', (req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.write('Hello world\n')

  setTimeout(function () {
    res.write('Another hello world\n');
  }, 10000);

  setTimeout(function () {
    res.write('Yet another hello world\n');
  }, 20000);

  setTimeout(function () {
    res.end('Goodbye');
  }, 30000);

});

server.listen(8000)
