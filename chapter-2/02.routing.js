const http = require('node:http');
// CommonJS allow to import json files
const dittoJson = require('./pokemon/ditto.json');

const server = http.createServer((req, res) => {
  const { method, url } = req;

  console.log({ method, url });

  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json');
          // Convert Javascript object to a Json string before sending
          return res.end(JSON.stringify(dittoJson));
      }
      break;

    case 'POST':
      switch (url) {
        case '/pokemon': {
          let body = '';

          // Read data in chunks using the 'data' event of the request
          req.on('data', (chunk) => {
            body += chunk.toString();
          });

          req.on('end', () => {
            const pokemon = JSON.parse(body);
            pokemon.timestamp = Date.now();

            res
              .writeHead(201, {
                'content-type': 'application/json; charset=utf-u',
              })
              .end(JSON.stringify(pokemon));
          });
        }
      }
  }
});

server.listen(8080);
