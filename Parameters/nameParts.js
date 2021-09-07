"use strict";

/* Find the old code you made to split a string into three variables: firstName, middleName and lastName, and put it inside 
a function named getNameParts( fullname ), where fullname is the parameter, the string you want to split up.

Use your original code with indexOf and substring, don't "cheat" and use .split()!

Make sure that the function creates three new strings: firstName, middleName and lastName. 
Console.log them at the end of the function. You can console.log them as an object to make it easier, like console.log( { firstName, middleName, lastName } );
 
Test the function by calling it with various combinations of names with no, one, two or more middle names.

For an extra challenge, fix it so that the middleName is either null or undefined, if there were no middle name in the fullname! */

getNameParts("   Hans Andersen  ");
function getNameParts(name) {
  name = name.trim();
  let firstSpace = name.indexOf(" ");
  let lastSpace = name.lastIndexOf(" ");
  //create firstName
  let firstName = name.substring(0, firstSpace);

  console.log(`the first name is: ${firstName}`);
  //create middleName
  let middleName = name.substring(firstSpace, lastSpace);
  if (middleName.length === 0) {
    middleName = "This guy has no middle name";
  } else {
    middleName = middleName.trim();
  }
  console.log(`the middle name is: ${middleName}`);

  //create lastName
  let lastName = name.substring(lastSpace);
  lastName = lastName.trim();
  console.log(`the last name is: ${lastName}`);
}
