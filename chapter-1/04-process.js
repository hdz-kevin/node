/**
 * process
 *
 * Is an global object in NodeJS that provide information and control over the
 * current execution process.
 *
 * Has properties and methods related with the environment, such as:
 * - Platform
 * - Version of Node
 * - Arguments passed to the program
 * - Environment variables
 */

console.log('-> Environment variables:')
console.log(process.env.JAVA_HOME)
console.log(process.env.SHELL)

console.log('\n-> Arguments passed when the process was launched:')
console.log(process.argv)

console.log('\n-> cwd: The directory from which the process was launched')
console.log(process.cwd())

/** Handle process events */
process.on('exit', (code) => {
  console.log(`\n-> The process is exiting with code: ${code}`)
})

/**
 * Handle the process exit
 *
 * 0 -> Success
 * 1 -> Error
 */
process.exit(0)
