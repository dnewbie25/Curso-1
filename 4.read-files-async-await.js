const fs = require('node:fs/promises');
// asincrono secuencial
// IIFE
(
  async () => {
    console.log('Leyendo el primer archivo\n')

    const text = await fs.readFile('archivo.txt', 'utf-8')
    console.log(text)
    console.log('***hacienco algo***')

    console.log('\n=========\n')

    console.log('Leyendo el segundo archivo\n')

    const text2 = await fs.readFile('archivo2.txt', 'utf-8')
    console.log(text2)
  })()
