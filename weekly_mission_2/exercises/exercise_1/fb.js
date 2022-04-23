/* Modelar Objetos */

const user = {
    user: "Marco Torres",
    bio: "Estudia Ing. en Informática, en UPIICSA",
    age: 23,
    post: "Hola Facebook",

    getSaludo: function(){
        return `Bienvenido de nuevo ${this.user}`
    },

    getLastPost: function(){
        return `Tú ultimo post ha sido: ${this.post}`
    }
}

console.log(user.getSaludo())
console.log(user.getLastPost())