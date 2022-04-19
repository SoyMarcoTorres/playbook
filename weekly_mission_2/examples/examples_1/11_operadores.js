/* OPERADORES */

// Example 11: Uso de find para encontrar el primer elemento de una lista que cumpla con lo que indiques

const ages = [24, 22, 19, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log("Example 11: \nPrimera edad menor a 20 es: " + age)