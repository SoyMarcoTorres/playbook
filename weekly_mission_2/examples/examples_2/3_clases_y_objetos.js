/* CLASES Y OBJETOS */

// Example 3: Instanciar un objeto con atributos 

class Student {
    // El constructor nos permite instanciar un objeto y asignarle atributos, this nos ayuda a realizar esto
    constructor(name, age, subjects){
        this.name = name
        this.age = age
        this.subjects = subjects
    }
}

// Crear un objeto de la clase Student (esto se le llama instanciación)
const marcoStudent = new Student("Marco", 23, ["NodeJS", "Python"])

console.log("Example 3: Instanciar un objeto con atributos")
console.log(marcoStudent)