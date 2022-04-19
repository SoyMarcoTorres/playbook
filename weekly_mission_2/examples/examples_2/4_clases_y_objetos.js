/* CLASES Y OBJETOS */

// Example 4: Métodos en los objetos

class Repository {
    constructor(name, author, language, stars){
        this.name = name
        this.author = author
        this.language = language
        this.stars = stars
    }

    getInfo(){ // Es una función que ejecutará cualquier objeto instanciado de esta clase
        return `Repository ${this.name} has ${this.stars} stars`
    }
}

console.log("Example 4: Métodos en los objetos")

const myRepo = new Repository("Launch X", "soymarcotorres", "js", 0)
console.log(myRepo.getInfo())