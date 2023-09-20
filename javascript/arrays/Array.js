let string = 'HugoLClavinas' //variable type string

let array = string.split('L'); //tableau de 2 valeurs separer par la place du "L"
console.log(array);

array = string.split('') //letres du string divise en tableau par lettre
console.log(array);


const sheeps = ['🐑', '🐑', '🐑'];
//copier la refairence d un Array
const fakeSheeps = sheeps;
fakeSheeps.push("hello")
console.log( sheeps);     //[ '🐑', '🐑', '🐑', 'hello' ]
console.log( fakeSheeps); //[ '🐑', '🐑', '🐑', 'hello' ]
//copier un Array
const fakeSheeps2 = [...sheeps];
fakeSheeps2.push("hello")
console.log( sheeps);      //[ '🐑', '🐑', '🐑' ]
console.log( fakeSheeps2); //[ '🐑', '🐑', '🐑', 'hello' ]


