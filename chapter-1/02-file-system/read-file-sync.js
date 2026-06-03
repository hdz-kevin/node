// fs is a built-in module for working with the file system
const fs = require('node:fs')

/**
 * Get file stats synchronously (block the thread until the file is read)
 */
const stats = fs.statSync('./file.txt')

console.log({
  'is-file': stats.isFile(),
  'is-directory': stats.isDirectory(),
  'size (bytes)': stats.size,
  'created at': stats.birthtime
})

/**
 * Read file synchronously
 */
console.log('Reading the first file...')
const text = fs.readFileSync('./file.txt', 'utf-8')
console.log(text)

console.log('Reading the second file...')
const secondText = fs.readFileSync('./file2.txt', 'utf-8')

console.log(secondText)
