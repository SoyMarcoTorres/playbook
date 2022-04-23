/* De objetos a definiciones de clases */

class repo {
    constructor(name, author, language, numberOfCommits, stars, forks, issues_open, issues_close){
        this.name = name
        this.author = author
        this.language = language
        this.numberOfCommits = numberOfCommits
        this.stars = stars
        this.forks = forks
        this.issues_open = issues_open
        this.issues_close = issues_close
    }

    get getTotalIssues(){
        return this.issues_open + this.issues_close
    }
}


const repoNew = new repo('Launch X', 'SoyMarcoTorres', 'JavaScript', 100, 199, 299, 10, 10)
console.log(repoNew.getTotalIssues)