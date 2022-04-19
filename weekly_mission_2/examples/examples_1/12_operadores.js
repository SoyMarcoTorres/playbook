/* OPERADORES */

// Example 12: Uso de find en una lista de objetos

const scores12 = [
    { name: 'A', score: 95 },
    { name: 'M', score: 80 },
    { name: 'E', score: 50 },
    { name: 'M', score: 85 },
    { name: 'J', score: 100 }
]

const score_less_than_80 = scores12.find((user) => user.score > 80)

console.log("Example 12: \nName score found: " + score_less_than_80.name)