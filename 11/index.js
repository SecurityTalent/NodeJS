



const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {

    const pathName = req.url;

    if (pathName === '/' || pathName === '/overview') {
        res.end("This is overview");
    } else if (pathName === '/product') {
        res.end("This is product");

    } else {
        res.writeHead(404, {
            'content-type': 'text/html',
            'My-Header': 'Hello World'

        })
        res.end("<h1>Page not found</h1>");
    }

})

server.listen(8080, '127.0.0.1', () => {
    console.log('listening to request on port : 8080')
})



















