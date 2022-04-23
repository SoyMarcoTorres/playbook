/* Modelar Objetos */

const user = {
    profile: "Marco Torres",
    travel: "Centro Histórico - Aeropuerto",
    age: 23,
    
    getName: function(){
        return `Hola ${this.profile}` 
    },

    getTravel: function(){
        return `Tú último viaje fue: ${this.travel}`
    }
}

console.log(user.getName())
console.log(user.getTravel())