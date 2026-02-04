console.log("Hello, World!");

let firstName = 'pedro'; // tipo string
let lastName = 'dourado';
console.log(`Meu nome é ${firstName} ${lastName}`);
let itemAvailable = true; // tipo boolean
let itemColor; // tipo undefined

const price = 19.99; //tipo number
// price = 29.99; // This will cause an error because 'price' is a constant

let itemName = 'notebook'; // tipo string
console.log(typeof itemName); // Output: string



let itemName2 = 'Pen'; // tipo string
let itemPrice = 3; // tipo number
let itemAvailablek = true; // tipo boolean
let itemColor2 = 'red'; // tipo string

//objeto

let pen = {
    itemName2: 'pen',
    itemPrice: 3,
    itemAvailablek: true,
    itemColor2: 'red'
};

pen.itemColor2 = 'blue'; // Modifying the color property
console.log(pen);

// array

let friends = ['João', 'Maria', 'Pedro', 'Ana'];
friends[1] = 'Carla'; // Modifying the second element (Maria to Carla)
console.log(friends[2]); // Accessing the third element (Pedro)

//funções

function salesStatus(status) {
    console.log("Transaction " + status);
    }

   salesStatus("completed"); // Calling the function to display the message func


function percentage10(price) {
   return price - (price - 10 / 100)
}

percentage10(20);
console.log(percentage10(20)); // Calling the function with a price of 200


