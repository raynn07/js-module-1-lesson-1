/*
    Refractor the code so that the value is assigned to the value variable variable incomingValue if it is not equal to undefined or null.
    Otherwise, defaultValue must be assigned. Check work script for the following values of the incomingValue variable: null , undefined , 0
    Use operator ?? (nullish coalescing operator).
*/



const incomingValue = null;
const defaultValue = 10;
const value = incomingValue ?? defaultValue; // 10 pt incomingValue = null , daca incomingValue != null , o sa fie valoare lui
console.log(value);