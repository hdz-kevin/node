import http from 'node:http'
import findFreePort from './07.ff-port.js'

/**
 * Create a http server
 * The callback is invoked every time a request is received
 *
 * Request -> what the client sends to the server
 * Response -> what the server sends to the client
 */
const server = http.createServer((req, res) => {
  console.log('Request received!')
  res.end('Hey there!')
})

/**
 * Read process.env.PORT to get the port number from the environment
 * If PORT is not defined, use 8000 as the default port
 */
const PORT = process.env.PORT ?? 8000

/**
 * Listen for incoming requests on a specific port
 *
 * Using port 0, node will automatically assign a random available port
 */

findFreePort(PORT).then((port) => {
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
  })
})
