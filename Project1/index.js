//operadores aritméticos

let num1 = 2
let num2 = 3

let total = num1 + num2

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);
console.log(num1 ** num2);
console.log(++total);

// operadores de incremento e decremento ++ e --


//operadores de atribuição
let num3 = 3

num1 += 20

console.log(num3)

//operadores de comparação

let num4 = 3

console.log(num4 > 0)
console.log(num4 < 0)

// operadores de igualdade

///=== verifica o valor e o tipo
///== verifica apenas o valor
//!= diferente

let num5 = '3'
let num6 = 3

console.log(num5 === num6)

//operadores ternarios

let driver = 90
let speed = driver > 110 ? 'Above' : 'Below'

console.log(speed)

//operadores lógicos and - e - && / or - ou - || / not - não - !

let temIdadeMinima = true
let temTituloDeEleitor = true

let podeVotar = temIdadeMinima && temTituloDeEleitor
console.log('pode votar:', podeVotar)

let podeViajar = !podeVotar
console.log('pode viajar:', podeViajar)

let corCliente = 'white' // valor definido pelo cliente 
let corEstoque = 'black'
let corVendida = corCliente || corEstoque

console.log('cor vendida:', corVendida)

//precedencia dos operadores

let resultado = 2 + 3 * 4 //usar parenteses para alterar a precedencia
console.log(resultado)


//Declarações condicionais

let driverSpeed = 80

if (driverSpeed > 110) {
    console.log('Driving too fast')
}

else if (driverSpeed > 40 && driverSpeed <= 110) {
    console.log('OK')
}

else {
    console.log('Driving too slow')
}

//switch case

let airport = 'MCO'

switch (airport) {
    case 'MCO':
        console.log('Orlando')
        break
    case 'JFK':
        console.log('New York')
        break
    case 'SEA':
        console.log('Seattle')
        break
    default:
        console.log('Unknown airport')
}


///for loo  (variavel de controle; condição; incremento)

for (i = 0; i < 10; i++) {
    console.log('i:', i)
}


// while loop

i = 1
while (i <= 10) {
    console.log('i:', i)
    i++
}

// do while loop

i = 1
do {
    console.log('Numero', i)
    i++
} while (i <= 10)


//for of loop 

const myCar = {
    model: 'BMW',
    year: 2023,
    km: 6888
}

for (let i in myCar) {
    console.log(i, myCar[i])
}

//for of loop

const friends = ['Alice', 'Bob', 'Charlie']

for (let i in friends) {
    console.log(friends[i])
}

//break

i = 1
while (i <= 10) {
    if (i === 8) break
    console.log('i:', i)
    i++
}

///Desafio




