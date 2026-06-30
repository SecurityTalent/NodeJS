const fs = require('fs');
const http = require('http');
const url = require('url');



const data = fs.readFileSync(`${__dirname}/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

//! SERVER
const server = http.createServer((req, res) => {
    const pathName = req.url;

    //! overview page
    if (pathName === '/' || pathName === '/overview') {
        res.end("This is overview");

    //! product page
    } else if (pathName === '/product') {
        res.end("This is product");

    //! API
    } else if (pathName === '/api') {

        // fs.readFile(`${__dirname}/data.json`, 'utf-8', (err, data) => {
        //     const ProductData = JSON.parse(data);
            // console.log(ProductData)

            res.writeHead(200, {
                "content-type": "application/json"
            })
            res.end(data)
        // })


    //! Not fount page 404
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

















