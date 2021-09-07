"use strict";
const fullName = "   ";
let nameInOrder = getNameParts(fullName);
let newArr = handleTheArr(nameInOrder);
let correctName = correctTheName(newArr);
console.log(correctName);

function getNameParts(name) {
  name = name.trim();
  let firstSpace = name.indexOf(" ");
  let lastSpace = name.lastIndexOf(" ");
  console.log(firstSpace);
  console.log(lastSpace);
  //create firstName
  let firstName;
  if (firstSpace > 0) {
    firstName = name.substring(0, firstSpace);
  } else {
    firstName = name.trim();
  }

  console.log(firstName);
  //create middleName
  let middleName = name.substring(firstSpace, lastSpace);
  if (middleName.length === 0) {
    middleName = undefined;
  } else {
    middleName = middleName.trim();
  }
  console.log(middleName);

  //create lastName
  let lastName;
  if (lastSpace > 0) {
    lastName = name.substring(lastSpace).trim();
  } else {
    lastName = undefined;
  }

  console.log(lastName);

  return [firstName, middleName, lastName];
}

function handleTheArr(array) {
  if (nameInOrder[1] == undefined) {
    console.log(nameInOrder);
    array = [nameInOrder[0], nameInOrder[2]];
  } else {
    array = nameInOrder;
  }
  return array;
}

// correct the capitalization

function correctTheName(arr) {
  console.log(newArr);
  newArr.forEach((e) => {
    e = e.toLowerCase();
    let firstLetter = e.substring(0, 1).toUpperCase();
    let capitalizedName = `${firstLetter}${e.substring(1)}`;
    arr.push(capitalizedName);
  });
  console.log(arr.length);
  if (arr.length == 4) {
    return arr.splice(2, 4);
  }
  if (arr.length > 4) {
    return arr.splice(3);
  }
}
