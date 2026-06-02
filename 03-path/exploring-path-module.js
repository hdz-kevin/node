import path from 'node:path'

/**
 * Join path segments
 *
 * Create paths manually is a bad idea because the separator
 * changes depending on the operating system.
 *
 * Example:
 * ./content/subdirectory/file.txt ❌
 */

// Get the OS path separator
console.log('OS Path Separator:', path.sep)

/** Join paths */
const filePath = path.join('tmp', 'tommy', 'password.txt')
// content/subdirectory/file.txt   <-  unix
// content\subdirectory\file.txt  <-  windows
console.log('\nJoined path:', filePath)

/** Get file name or last directory name if path doesn't have a file extension */
console.log('File name: ', path.basename(filePath))

/** Get file name without extension */
console.log('File name without extension: ', path.basename(filePath, '.txt'))

/** Get extension */
console.log('File extension: ', path.extname(filePath))
