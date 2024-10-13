const http = require('node:hhtps');
const fs = require('node:fs');
const express = require('express')
const port = 8000

const options = {
    key: fs.readFileSync('private-key.pem'),
    cert: fs.readFileSync('certificate.pem'),
}

Http2ServerRequest.createServer(options, (req, res) => {
    res.send()
}).listen(port);