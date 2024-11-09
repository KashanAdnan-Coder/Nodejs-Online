const { createServer } = require("node:http")

// { }  destructure karna 
// require
// require means = kisi cheez ko get karna kisi or package se
// node:http

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!\n');
});

server.listen(4000, 'localhost', () => {
    console.log('Listening on localhost:3000');
});