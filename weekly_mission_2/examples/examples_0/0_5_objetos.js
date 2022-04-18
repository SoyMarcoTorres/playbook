/* OBJETOS */

// Example 5: Objeto con método que recibe parámetros

const myPet = {
    name: "Woopa", 
    sayHelloToMyPet: function (yourPet) {
        console.log(`${this.name} say's hello to ${yourPet}`)
    }
}

console.log("Example 5: Objeto con método que recibe parámetros")
myPet.sayHelloToMyPet("Koda")