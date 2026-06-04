const http = require('node:http')

/**
 * Create a http server
 * The callback is invoked every time a request is received
 *
 * Request -> what the client sends to the server
 * Response -> what the server sends back to the client
 */
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')

  if (req.url === '/') {
    res.statusCode = 200
    res.end('Bienvenido a mi página de inicio!')
  } else if (req.url === '/contact') {
    res.statusCode = 200
    res.end('Página de contacto')
  } else {
    res.statusCode = 404
    res.end('404 - Página no encontrada')
  }
})

/**
 * HTTP -> One of the most used protocols for web communication
 *
 * Request -> what the client sends to the server
 *  - Url -> Indicates the requested resource
 *  - Method -> The type of the request depending of the action performed
 *    (GET, POST, PUT, DELETE, etc.)
 *  - Headers -> Key-value pairs of data that provide more information about the request
 *  - Body -> Optional data send to the server
 *
 * Response -> what the server sends back to the client
 *  - Status Code -> A 3-digit number that indicates the status of the request
 *    (200 OK, 404 Not Found, 500 Internal Server Error, etc.)
 *  - Headers -> Key-value pairs of data that provide more information about the response
 *  - Body -> The main content that the server sends to the client (html, json, etc.)
 */

/**
 * HTTP response status codes
 *
 * Http response status codes indicate whether a specific HTTP request has been
 * successfully completed. Responses are grouped into five classes
 *
 * 100 - 199: Informational response
 * 200 - 299: Success response
 * 300 - 399: Redirection response
 * 400 - 499: Client error response
 * 500 - 599: Server error response
 */

/**
 * Listen for incoming requests on a specific port
 */

const port = 8000

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
