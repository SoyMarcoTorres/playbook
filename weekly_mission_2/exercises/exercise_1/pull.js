const pull = {
    tittle: "My Blog",
    branchName: "carlogilmar",
    dateCreated: "1 de Abril",
    status: "Open",
    repositoryNameAssociated: "LaunchX",

    getStatus: function(){
        return this.status
    },

    getTittleAndAuthor: function(){
        return `This repository ${this.tittle} was created by ${this.branchName}`
    }
}

console.log(pull.getStatus())
console.log(pull.getTittleAndAuthor())