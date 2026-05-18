const os = require('node:os')

console.log('Información del sistema operativo:')
console.log('-------------------\n')

console.log('Nombre del sistema operativo:', os.platform())
console.log('Versión del sistema operativo:', os.release())
console.log('Arquitectura:', os.arch())
console.log('CPUs:', os.cpus())
console.log('Memoria total (GB):', os.totalmem() / 1024 / 1024 / 1024)
console.log('Memoria usada (GB):', (os.totalmem() - os.freemem()) / 1024 / 1024 / 1024)
console.log('Memoria disponible (GB):', os.freemem() / 1024 / 1024 / 1024)
console.log('uptime', os.uptime() / 60 / 60)
