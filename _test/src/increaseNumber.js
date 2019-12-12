/*
*
*
*
*
*
*
**/


let number = 1;

let elNumber = document.getElementById('number');
let buttonIcrease = document.getElementById('increase');

buttonIcrease.onclick = function() {
  number += 2;
  elNumber.innerText = number;
}
