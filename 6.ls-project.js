const fs = require('node:fs/promises')
const path = require('node:path')
const process = require('node:process')

// Get the path from the command line argument
const directoryPath = process.argv[2]

// Get the relative path from the current directory to the specified path
const relativePath = path.relative('.', directoryPath)

// Read the contents of the directory
fs.readdir(relativePath)
  .then(async files => {
    // Loop through each file in the directory
    for (const file of files) {
      const filePath = path.join(relativePath, file)
      const stats = await fs.stat(filePath)
      // Check if the file is a directory
      if (stats.isDirectory()) {
        // If it is, add a slash to the end of the file name
        console.log(file + '/')
      } else {
        // If not, just print the file name
        console.log(file)
      }
    }
  })
  .catch(err => {
    // If there's an error, print an error message
    console.log('Error en el directorio: ', err)
  })
