/* CLASES Y OBJETOS */ 

// Example 7: Setters para modificar los atributos del objeto

class MissionComander {
    constructor(name, mission){
        this.name = name
        this.mission = mission
        this.students = 0
        this.lives = 0
    }

    get getStudents(){
        return this.students
    }

    get getLives(){
        return this.lives
    }

    set setStudents(students){
        this.students = students
    }

    set setLives(lives){
        this.lives = lives
    }
}

console.log("Example 7: Setters para modificar los atributos del objeto")

const missionComanderNode = new MissionComander("Marco", "NodeJS")

console.log(missionComanderNode.getStudents)  // 0 por default
console.log(missionComanderNode.getLives)  //  0 por default

// actualizamos los atributos por medido de los setters
missionComanderNode.setStudents = 100
missionComanderNode.setLives = 3

console.log(missionComanderNode.getStudents) 
console.log(missionComanderNode.getLives)