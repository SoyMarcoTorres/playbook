/* CLASES Y OBJETOS */

// Example 9: Herencia entre dos clases

class Developer {
    constructor(name, mainLang, stack){
        this.name = name
        this.mainLang = mainLang
        this.stack = stack
    }

    get getName(){
        return this.name
    }
}

console.log("Example 9: Herencia entre dos clases")

const marcoDev = new Developer ("Marco", "js", ["elixir", "groovy", "lisp"])
console.log(marcoDev)

// Se usa la palabra extends para indicar que heredarás las propiedades de la clase (Developer) en la clase definida
// Podemos definir una clase vacía y rehusar todos los componentes de la clase padre

class LaunchXStudent extends Developer {

}

const marcoLaunchXDev = new LaunchXStudent("Marco", "js", ["elixir", "groovy", "lisp"])

console.log(marcoLaunchXDev)
console.log(marcoLaunchXDev.getName)  //  Getter de la clase padre rehusada en la clase hija