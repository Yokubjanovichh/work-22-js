"use strict";

// const number ={
//     x: 6,
//     y: 5,
// }

// const newNumber = number;

// newNumber.x = 15;

// // console.log(number);
// // console.log(newNumber);

function nusxaObj(obj){
    let objNusxa = {};

    for(let key in obj ){
        objNusxa[key] = obj[key];
    }

    return objNusxa;
}

const number = {
  x: 6,
  y: 5,
};

const newNumber = nusxaObj(number);

console.log(number);
newNumber.x = 15;
console.log(newNumber);
