class issue {
    constructor(tittle, repository, status, numberOfCommits, labels, author, dateCreated, lastUpdated){
        this.tittle = tittle
        this.repository = repository
        this.status = status
        this.numberOfCommits = numberOfCommits
        this.labels = labels
        this.author = author
        this.dateCreated = dateCreated
        this.lastUpdated = lastUpdated
    }

    get getTittleAndAuthor(){
        return `${this.tittle} by ${this.author}`
    }

    get getInfo(){
        return `This repository is ${this.status} and was created ${this.dateCreated}`
    }
}

const issueNew = new issue('Live 2', 'MissionNoseJS', 'Open', 48, ['Finalizado', 'LIVE 2', ' Semana-2'], 'carlogilmar', '13 Abril', '7 days ago')
console.log(issueNew.getTittleAndAuthor)
console.log(issueNew.getInfo)