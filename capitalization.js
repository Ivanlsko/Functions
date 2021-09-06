"use strict";

capitalization("    IVAn   ");

function capitalization(name) {
  name = name.trim();
  name = name.toLowerCase();
  let firstLetter = name.substring(0, 1).toUpperCase();
  name = `${firstLetter}${name.substring(1)}`;
  console.log(name);
}
