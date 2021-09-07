"use strict";

const theName = "   iVAn  ";
const cap = capitalize(theName);
console.log(cap);

function capitalize(name) {
  name = name.trim();
  name = name.toLowerCase();
  let firstLetter = name.substring(0, 1).toUpperCase();
  name = `${firstLetter}${name.substring(1)}`;
  return name;
}
