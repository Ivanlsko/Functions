"use strict";

RGBtoHex("135", "22", "23");
function RGBtoHex(r, g, b) {
  r = Math.abs(r).toString(16);
  g = Math.abs(g).toString(16);
  b = Math.abs(b).toString(16);
  console.log(`${r} ${g} ${b}`);
}
