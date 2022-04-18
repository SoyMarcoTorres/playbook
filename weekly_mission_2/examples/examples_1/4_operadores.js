/* OPERADORES */ 

// Example 4: Uso de map para recorrer los elementos de una lista y crear una nueva lista

/* Arrow function and explicit return 
cosnt modifedArray = arr.map((elemnt, index) => element)
*/

const numbers4 = [1, 2, 3, 4, 5]
const numbersSquare = numbers4.map(function(num) { return num * num})
// También pudes escribir la función como fat arrow
// const numbersSquare = numbers4.map((num) => retunr num* num)
console.log("Example 4: Imprimiendo la lista de elemntos al cuadrado")
console.log(numbersSquare)