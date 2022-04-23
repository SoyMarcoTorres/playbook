class twitter {
    constructor(user, username, bio, age, trendig_topic, hashtag){
        this.user = user
        this.username = username
        this.bio = bio
        this.age = age
        this.trendig_topic = trendig_topic
        this.hashtag = hashtag
    }

    get getSaludo(){
        return `Hola ${this.user}`
    }

    get getInfo(){
        return `La tendencia No. 1 del día es: ${this.trendig_topic}, con el hashtag: ${this.hashtag}`
    }
}

const twitterNew = new twitter('Marco Torres', 'soymarcotorres', 'Futuro Ingeniero', '23', 'ImolaGP', '#F1')
console.log(twitterNew.getSaludo)
console.log(twitterNew.getInfo)