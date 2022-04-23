class pull {
    constructor(tittle, branchName, dateCreated, status, repositoryNameAssociated){
        this.tittle = tittle
        this.branchName = branchName
        this.dateCreated = dateCreated
        this.status = status
        this.repositoryNameAssociated = repositoryNameAssociated
    }

    get getStatus(){
        return this.status
    }

    get getTitleAndAuthor(){
        return `This repository ${this.tittle} was created by ${this.branchName}`
    }
}

const pullNew = new pull('MyBlog', 'carlogilmar', '1 Abril', 'Open', 'LaunchX')
console.log(pullNew.getTitleAndAuthor)
console.log('This repo is: ', pullNew.getStatus)