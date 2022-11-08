// Estrutura de repetiçaõ
// for 
// break - para a execução do loop
// continue - pula a execução do momento

for(let i = 100; i > 0; i--){
  if(i === 50){
    break;
  }

  console.log(i)
}


// Estrutura de repetição
// while

let i = 0;
while(i < 10){
  console.log(i)

  i++;
}

// for...of

let name = 'Maia'
let names = ['Maia', 'Vitor', 'Pedro']

for(let name of names){
  console.log(name)

}

// for...in

let person = {
  name: 'John',
  age: 30,
  weight: 88.6
}

for(let property in person){
  console.log(property)
  console.log(person[property])
}


