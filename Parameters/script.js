"use strict";

/* // I call the function and sending the specific information as a firstName
sayHello("Ivan");

// Function has defined one parameter
function sayHello(firstName) {
  //I call the specific information I defined when I was calling function
  console.log(`Hello ${firstName}`);
}

const lastName = "Lesko";
sayHello1(lastName);
function sayHello1(lastName) {
  console.log(`Hello ${lastName}`);
} */

capitalization("    IVAn   ");

function capitalization(name) {
  name = name.trim();
  name = name.toLowerCase();
  let firstLetter = name.substring(0, 1).toUpperCase();
  name = `${firstLetter}${name.substring(1)}`;
  console.log(name);
}
