/* CLASES Y OBJETOS */

// Example 8: Métodos static nos ayudan a escribir métodos en una clase que podemos usar sin necesidad de instanciar algún objeto

class Toolbox {
    static getMostUsefulTool(){
        return ["Command line", "git", "Text Editor"]
    }
}

console.log("Example 8: Métodos static")
//Puedo llmar el método static directamente con el nommbre de la clase
console.log(Toolbox.getMostUsefulTool())
// Si intentamos instanciar un objeto, no podremos llamar este método static
// const toolbox = new Toolbox()
// console.log(toolbox.getMostUsefulTools()) // is not a function

/*

HERENCIA: Nos permite relacionar clases entre sí y rehusar sus componenetes 

*/

