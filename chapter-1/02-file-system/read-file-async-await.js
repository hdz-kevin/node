import fs from 'node:fs/promises'

/**
 * Read file asynchronously with async/await (non-blocking thread)
 *
 * Async/await is a syntactic sugar over promises that allows you
 * to write asynchronous code in a synchronous-looking way.
 */

async function readFile (path, encoding = 'utf-8') {
  const text = await fs.readFile(path, encoding)
  console.log('\n')
  console.log(text)
}

console.log('Reading the first file...')
readFile('./file-system/file.txt')

// This is executed as the same time as the file is being read, because the thread is not blocked
console.log('--> Do something while reading file...')

console.log('Reading the second file...')
readFile('./file-system/file2.txt')
