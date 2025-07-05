const path = require('node:path')

console.log(path.sep);
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath);

console.log(path.basename(filePath));
console.log(path.basename(filePath, '.txt')); // to remove the extension
