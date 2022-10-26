// 1. Declare uma variável de nome weight
//let weight

// 2. Que tipo de dado é variável acima?
//console.log(typeof weight)

/*
  3. Declare uma variável e atribua valores para cada um dos dados:
  * name: String
  * age: Number(integer)
  * stars: number
  * isSubscribed: Boolean
*/

//let name = "Gabriel"
//let age = 18
//let stars = 8.4
//let isSubscribed = false

/*
  4. A variável student abaixo é de que tipo de dados?

  4.1 Atribua a ela as mesmas propriedades e valores do exercicio anterior.

  4.2 Mostre no console a seguinte mensagem:

    <name> de idade <age> pesa <weight> kg.

*/

let gabriel = {
  name: "Gabriel",
  age: 18,
  weight: 70.4,
  isSubscribed: false,
}

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)

/* 
  5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/

//let students = []

/* 6. Retribua valor para a variável acima, colocando dentro dela o objeto
student da questão 4.*/

let students = [
  gabriel
]

/* 7. Coloque no console o valor da posição zero do Array acima */

console.log(students[0])

/* 
  8. Crie um novo student e coloque na posição 1 do Array students
*/

const felipe = { 
  name: "Felipe",
  age: 17,
  weight: 63.4,
  isSubscribed: true,
}

students[1] = felipe

/*
  9. Sem rodar o código responda qual é a resposta do 
  código abaixo e por que? Após sua resposta, rode o
  código e veja se você acertou.

  console.log(a)
  var a = 1

  R: Undefined
*/
