class fb{
    constructor(user, post, biography, age){
        this.user = user
        this.post = post
        this.biography = biography
        this.age = age
    }

    get getSaludo(){
        return `Bienvenido de nuevo ${this.user}`
    }

    get getLastPost(){
        return `Tu último post ha sido: ${this.post}`
    }
}

const fbNew = new fb('Marco Torres', 'Hola facebook', 'Futuro Ing. en Informática', 23)
console.log(fbNew.getSaludo)
console.log(fbNew.getLastPost)