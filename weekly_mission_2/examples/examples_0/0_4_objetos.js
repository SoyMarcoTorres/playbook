/* OBJETOS */

// Example 4: Objeto con métodos

const pet = {
    name: "Koda",
    // Esta es una función que se guarda como propiedad 
    sayHello: function(){
        // this.name hace referencia a la propiedad del objeto
        console.log(`${this.name} te saluda en español !Woow¡`)
    }
}

console.log("Example 4: Objeto con métodos")
pet.sayHello()