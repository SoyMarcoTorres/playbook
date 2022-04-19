/* CLASES Y OBJETOS */

// Example 5: Atributos con valores por default

class PullRequest {
    constructor(repo, tittle, lines_changes){
        this.repo = repo
        this.tittle = tittle
        this.lines_changes = lines_changes
        this.status = "OPEN"
        this.dateCreated = new Date() // Esto guardará la fecha actual en que se instancia el obejto
    }

    getInfo(){
        return `This PR is in the repo: ${this.repo} (status: ${this.status} and was created on ${this.dateCreated})`
    }
}

console.log("Exaample 5: Atributos con valores por default")

const myPR1 = new PullRequest("Launch X", "Mi Primer PR", 100)
console.log(myPR1.getInfo())