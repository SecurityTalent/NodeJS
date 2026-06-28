const fs = require('fs')
const http = require('http')


const server = http.createServer((req, res) => {
  console.log(req);
  res.end('Hello form the server');
});

server.listen(8080, '127.0.0.1', () => {
  console.log('Listening form request on port 8080')
})









