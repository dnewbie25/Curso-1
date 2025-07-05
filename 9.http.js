const http = require('node:http')

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola mundo!')
})

// el puerto 0 busca el primer puerto libre, no se recomienda en desarrollo
server.listen(0, () => {
  console.log(`http://localhost:${server.address().port}`)
})
