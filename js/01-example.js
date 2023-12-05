// Display the total number of apples and grapes on the screen. The difference between apples and grapes.

const apples = prompt("Please insert number of apples");
const grapes = prompt("Please insert number of grapes");
const total = Number.parseInt(apples) + Number.parseInt(grapes);
console.log("Total:" , total);
const diff =  Number.parseInt(apples) - Number.parseInt(grapes);
console.log("diff:" ,diff);