class uber {
    constructor(name, age, travel){
        this.name = name
        this.age = age
        this.travel = travel
    }

    get getName(){
        return `Hola ${this.name}`
    }

    get getTravel(){
        return `Tu último viaje fue: ${this.travel}`
    }
}

const uberNew = new uber('Marco', '23', 'Centro Histórico - Aeropuerto')
console.log(uberNew.getName)
console.log(uberNew.getTravel)