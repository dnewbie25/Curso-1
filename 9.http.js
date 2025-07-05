const http = require('node:http')
const { findAvailablePort } = require('./10.free-port')
require('dotenv').config()

const desiredPort = process.env.PORT ?? 3000 // 3000 is default

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola mundo!')
})

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`http://localhost:${port}`)
  })
})

// // el puerto 0 busca el primer puerto libre, no se recomienda en desarrollo
// server.listen(findAvailablePort(3000), () => {
//   console.log(`http://localhost:${server.address().port}`)
// })
