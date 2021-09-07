"use strict";
const correct = fullName("Potter", "Harry", "James", "Pottypotpot");
console.log(correct);

function fullName(lastName, firstName, middleName) {
  let realFirstName = firstName;
  let realLastName = lastName;
  let realMiddleName = middleName;
  if (realMiddleName == undefined) {
    let nameInOrder = `${realFirstName} ${realLastName}`;
    console.log(nameInOrder);
  } else {
    let nameInOrder = `${realFirstName} ${realMiddleName} ${realLastName}`;
    return nameInOrder;
  }
}
