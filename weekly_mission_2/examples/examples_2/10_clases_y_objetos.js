/* CLASES Y OBJETOS */

// Example 10: Overrinding methods

class Explorer {
    constructor(name, username, mission){
        this.name = name
        this.username = username
        this.mission = mission
    }

    getNameAndUsername(){
        return `Explorer ${this.name}, username: ${this.username}`
    }
}

class Viajero extends Explorer {
    constructor(name, username, mission, cycle){
        super(name, username, mission)  // SUPER nos ayudará a llamar el constructor padre
        this.cycle = cycle // Agegamos este atributo de la clase Viajero, es exclusiva de esta clase y no de la clase padre
    }

    getGeneralInfo(){
        let nameAndUsername = this.getNameAndUsername()  // Llamamos el método de la clase padre
        // nameAndUsername es una variable de esta función, no necesitas usar this para referenciarla
        return `${nameAndUsername}, Ciclo ${this.cycle}`
    }
}

const viajero1 = new Viajero("Marco", "Launch x", "NodeJS", "Abril 2022")

console.log("Ejemplo 10: Overrinding methods")
console.log(viajero1)
console.log(viajero1.getNameAndUsername())
console.log(viajero1.getGeneralInfo()) 