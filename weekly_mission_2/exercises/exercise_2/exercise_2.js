const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
]


// Imprime en nombre de cada exploerer de la lista *explorer*
explorers.forEach(nombre => console.log(nombre.name))
// Imprime el stack de cada explorer
explorers.forEach(stacks => console.log(stacks.stack))

// Crea una nueva lista con el nombre y el stack de la lista original *explorer*
const explorersInfo = explorers.map(function(Info){ return `${Info.name}: ${Info.stack}` })
console.log(explorersInfo)

// Imprime los exploerers que tengan JS en su stack
const explorersStack1 = explorers.filter((stacks) => // Obteniendo stack de la lista original *explorers*
    stacks.stack.includes('js')
)
console.log(explorersStack1)

// Imprime los exploerers que tengan JS en su stack 
const explorersStack2 = explorersInfo.filter((stacks) => // Obteniendo stack de la lista creada *explorersInfo*
    stacks.includes('js')
)
console.log(explorersStack2)

// Busca el primer explorer que sea de la CDMX
const explorersFind = explorers.find((cities) => cities.city = 'CDMX' )
console.log(explorersFind)

// Obtiene la suma de todos los exercises 
const explorerExercisesCompleted = explorers.map(function(ec){ return ec.exercises_completed })
const explorersSuma = explorerExercisesCompleted.reduce((anterior, actual) => anterior + actual)
console.log(explorersSuma)

// Obtiene la validación de si al menos de los explorers tiene la propiedad exercisesFinished en frontend
const explorersExrcisesFinished = explorers.some((ef) => ef.missions.frontend.exercisesFinished === true)
console.log(explorersExrcisesFinished)

// Obtiene la validación de si todos los explorers tiene la propiedad isFinished del onboarding como true
const explorersIsFinished = explorers.every((isF) => isF.missions.onboarding.isFinished === true)
console.log(explorersIsFinished)