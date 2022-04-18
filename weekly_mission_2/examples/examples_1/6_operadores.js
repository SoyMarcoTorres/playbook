/* OPERADORES */ 

// Example 6: Uso de map para convertir todos los nombres de una lista a mayúsculas

const countries6 = ['Finland', 'Denmark', ' Sweden', 'Norway', 'Iceland']
const countriesFirtsThreeLetters = countries6.map((country) => country.toUpperCase().slice(0, 3))
// El método *slice* obtiene solo la ongitud marcada del string

console.log("Example 6: Uso de map para convertir todos los nombres de una lista a mayúsculas")
console.log(countriesFirtsThreeLetters)