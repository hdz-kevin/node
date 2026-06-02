import http from 'node:http'

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
 * Listen for incoming requests on a specific port
 *
 * Using port 0, node will automatically assign a random available port
 */
server.listen(0, () => {
  console.log(`Server running on http://localhost:${server.address().port}`)
})
