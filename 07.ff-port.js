/**
 * ff-port -> Find Free Port
 *
 * Receives a optional default port, if it's free, it will use it,
 * if not, it will return another available port
 */

import net from 'node:net'

const findFreePort = (defaultPort) => new Promise((resolve, reject) => {
  const server = net.createServer()

  server.listen(defaultPort, () => {
    const { port } = server.address()
    server.close(() => {
      resolve(port)
    })
  })

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      findFreePort(0).then(resolve)
    } else {
      reject(err)
    }
  })
})

export default findFreePort
