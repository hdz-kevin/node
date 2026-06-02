const fs = require('node:fs/promises')

/**
 * Read file asynchronously with promises way (non-blocking thread)
 *
 * A Promise is an object that represents the eventual completion (or failure)
 * of an asynchronous operation and its resulting value.
 *
 * A Promise acts as a placeholder for a value that will be available at some point in the future,
 * allowing you to handle asynchronous code in a cleaner way than traditional callbacks.
 */

console.log('Reading the first file...')
fs.readFile('./file-system/file.txt', 'utf-8')
  .then(text => {
    console.log('====== First file ======')
    console.log(text)
  })

// This is executed as the same time as the file is being read, because the thread is not blocked
console.log('--> Do something while reading file...')

console.log('Reading the second file...')
fs.readFile('./file-system/file2.txt', 'utf-8')
  .then(text => {
    console.log('====== Second file ======')
    console.log(text)
  })
