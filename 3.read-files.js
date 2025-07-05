const fs = require('node:fs/promises')

console.log('Leyendo el primer archivo\n')

fs.readFile('archivo.txt', 'utf-8')
  .then(text => console.log(text))
console.log('***hacienco algo***')

console.log('\n=========\n')

console.log('Leyendo el segundo archivo\n')

fs.readFile('archivo2.txt', 'utf-8')
  .then(text => console.log(text))
