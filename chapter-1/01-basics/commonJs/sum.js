// CommonJS module pattern es la forma clásica de exportar e importar módulos en node
// module.exports es el objeto que se exporta

function sum (a, b) {
  return a + b
}

// module es un objeto global que indica que es lo que exporta este fichero
// console.log(module);
module.exports = { sum }
