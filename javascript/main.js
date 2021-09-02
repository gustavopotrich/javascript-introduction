let nome = "Gustavo Potrich"
let age = 25

//alert("My first JavaScript alert! :)")
//alert("Welcome, " + nome)
//alert(nome + " is " + age + " years old")


let list = ["maçã", "laranja", "banana"]
// COMMAND PUSH - Increment a new element on the array
list.push("goiaba")
console.log(list)

// COMMAND POP
list.pop()
console.log(list)

// COMMAND LENGHT
console.log(list.length)

// COMMAND REVERSE
console.log(list.reverse())

// COMMAND JOIN 
console.log(list.join(" | "))

let fruta = {nome: "uva", cor: "roxo", tamanho: "pequeno"}
console.log(fruta.nome, fruta.cor, fruta.tamanho)

let frutas = [{nome: "uva", cor: "roxo"}, {nome: "maçã", cor: "vermelho"}]
console.log(frutas)

// 

/*let name2 = prompt("tell me your name")
let age2 = prompt("how old are you?")

console.log("Hi, " + name2)
if(age2 >= 18)
{
    console.log("You are adult!")
} else {
    console.log("You are teenager!")
}*/

//

let d = new Date()
console.log(d.getHours(), d.getMinutes())


function clicar(){
    document.getElementById("clicou").innerHTML = "Thank you!"
}

function redirect(){
    window.open("https://www.google.com.br")
}