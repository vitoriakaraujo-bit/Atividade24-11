async function load() {
    const API = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(API)
}


// objeto e JSON, qual a diferença?


let json = [
    {
        "nome": "Keully",
        "idade":19
    },
    {
        "nome": "Ana Maria",
        "idade": 22
    },
    {
        "nome": "Matheus",
        "idade": 55
    }
]
console.log(json[0].nome)










// let array = [
//     "Keully",
//     19,
//     1.67
// ]


// let obj = {
//     nome: "Keully",
//     idade: 19,
//     altura: 1.67
// }

// console.log(obj.nome)