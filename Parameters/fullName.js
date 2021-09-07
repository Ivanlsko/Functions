"use strict";

fullName("Potter", "Harry", "James", "Pottypotpot");
function fullName(lastName, firstName, middleName) {
  let realFirstName = firstName;
  let realLastName = lastName;
  let realMiddleName = middleName;
  if (realMiddleName == undefined) {
    let nameInOrder = `${realFirstName} ${realLastName}`;
    console.log(nameInOrder);
  } else {
    let nameInOrder = `${realFirstName} ${realMiddleName} ${realLastName}`;
    console.log(nameInOrder);
  }
}
