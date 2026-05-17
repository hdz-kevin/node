
// js -> por defecto utiliza CommonJS
// .mjs -> utiliza ES modules
// .cjs -> utiliza CommonJS

// importar un módulo con CommonJS

// destructuring del objeto exports del módulo
const { sum } = require("./sum")
const { mult } = require("./mult")

console.log(sum(3, 5));
console.log(mult(3, 5));


