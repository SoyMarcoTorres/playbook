const issue = {
    tittle: "Live 2 Semana 2",
    repositoryNameAssociated: "MissionNodeJS",
    status: "Open",
    numberOfComments: 48,
    labels: ["Finalizado", "LIVE 2", "Semana-2"],
    author: "carlogilmar",
    dateCreated: "13 de Abril",
    lastUpdated: "7 days ago",

    getTittleAndAuthor: function(){
        return `${this.tittle} was created by ${this.author}`
    },

    getGeneralInfo: function(){
        return `This repository is ${this.status} and was created on ${this.dateCreated}`
    }
}

console.log("Nombre del issue: " + issue.getTittleAndAuthor())
console.log(issue.getGeneralInfo())