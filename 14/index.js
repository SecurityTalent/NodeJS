const fs = require('fs');
const http = require('http');
const url = require('url');


//! ReadFile form data.json but blockBul Function readFileSync

const overview = fs.readFileSync(`${__dirname}/overview.html`, 'utf-8');
const card = fs.readFileSync(`${__dirname}/card.html`, 'utf-8');
const product = fs.readFileSync(`${__dirname}/product.html`, 'utf-8');

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
        // Non blockbul readFile
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

















