class spiderman {
    constructor(name, age, actor, numberOfMovies, cinemaStudio){
        this.name = name
        this.age = age
        this.actor = actor
        this.numberOfMovies = numberOfMovies
        this.cinemaStudio = cinemaStudio
    }

    get getInfo(){
        return `Hey, I'm ${this.actor} from ${this.cinemaStudio}`
    }
}

module.exports = spiderman