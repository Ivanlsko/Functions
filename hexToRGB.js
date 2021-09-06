hexToRGB("ff00cc");

function hexToRGB(hexCode) {
  let r = hexCode.substring(0, 2);
  r = parseInt(r, 16);
  let g = hexCode.substring(2, 4);
  g = parseInt(g, 16);
  let b = hexCode.substring(4, 6);
  b = parseInt(b, 16);
  console.log(`${r} ${g} ${b}`);
}
