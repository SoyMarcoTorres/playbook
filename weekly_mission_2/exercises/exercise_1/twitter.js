/* Modelar Objetos */

const user = {
    user: "Marco",
    username: "soymarcotorres",
    bio: "Estudiante de Ing. en Informática \nIPN UPIICSA",
    age: 23,
    trending_topic: "Imola GP",
    hashtag: "#f1",

    getSaludo: function(){
        return `Hola ${this.user}`
    },

    getInfo: function(){
        return `La tendencia No. 1 del día es: ${this.trending_topic}, con el hashtag ${this.hashtag}`
    }
}

console.log(user.getSaludo())
console.log(user.getInfo())