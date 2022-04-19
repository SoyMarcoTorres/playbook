/* OPERADORES */

/* Example 14: Uso de some, este método validadrá todos los elementos de la lista, 
            y si alguno cumple con la validación indicada, regresará true, de lo contrario será false */

// Lista de elementos 
const bools = [true, true, false, false]

// Uso de some para ver si al menos uno de los elementos es false
const areSomeTrue = bools.some((b) => b === false)
console.log("Example 14: \nAlguno de los elementos en el array es false: " + areSomeTrue)  // true