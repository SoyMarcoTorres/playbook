/* OPERADORES */

// Example 7: Uso de filter para filtrar una lista de elementos

const countries7 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesContainLand = countries7.filter((country) => country.includes('land'))
// Indicación para solo filtrar elemntos que incluyan "land"

console.log("Example 7: Uso de filter para filtar una lista de elemntos")
console.log(countriesContainLand)

const countriesEndsByia = countries7.filter((country) => country.endsWith('ia'))

console.log("Example 7: Países que terminan en ia")
console.log(countriesEndsByia)