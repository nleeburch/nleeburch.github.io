var draw = SVG("cube").size(1000, 1000);

let Town = [
  ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
  ["w", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "w"],
  ["w", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "w"],
  ["w", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "w"],
  ["w", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "w"],
  ["w", "e", "g", "r", "b", "g", "r", "b", "g", "r", "b", "g", "r", "e", "e", "e", "e", "e", "e", "e", "w"],
  ["w", "e", "g", "r", "b", "g", "r", "b", "g", "r", "b", "g", "r", "e", "e", "e", "e", "e", "e", "e", "w"],
  ["w", "e", "g", "r", "b", "g", "r", "b", "g", "r", "b", "g", "r", "e", "e", "e", "e", "e", "e", "e", "w"],
  ["w", "e", "g", "r", "b", "g", "r", "b", "g", "r", "b", "g", "r", "e", "e", "e", "e", "e", "e", "e", "w"],
  ["w", "e", "g", "r", "b", "g", "r", "b", "g", "r", "b", "g", "r", "e", "e", "e", "e", "e", "e", "e", "w"],
  ["w", "e", "r", "b", "g", "r", "b", "e", "r", "b", "g", "r", "b", "e", "e", "e", "e", "e", "e", "e", "w"],
  ["w", "e", "r", "b", "g", "r", "b", "e", "r", "b", "g", "r", "b", "e", "e", "e", "e", "e", "e", "e", "w"],
  ["w", "e", "r", "b", "g", "r", "b", "p", "r", "b", "g", "r", "b", "e", "e", "e", "e", "e", "e", "e", "w"],
  ["w", "e", "r", "b", "g", "r", "b", "e", "r", "b", "g", "r", "b", "e", "e", "e", "e", "e", "e", "e", "w"],
  ["w", "e", "r", "b", "g", "r", "b", "e", "r", "b", "g", "r", "b", "e", "e", "e", "e", "e", "e", "e", "w"],
  ["w", "e", "b", "g", "r", "b", "g", "r", "b", "g", "r", "b", "g", "e", "e", "w", "e", "e", "e", "e", "w"],
  ["w", "e", "b", "g", "r", "b", "g", "r", "b", "g", "r", "b", "g", "e", "e", "e", "e", "e", "e", "e", "w"],
  ["w", "e", "b", "g", "r", "b", "g", "r", "b", "g", "r", "b", "g", "e", "e", "e", "e", "e", "e", "e", "w"],
  ["w", "e", "b", "g", "r", "b", "g", "r", "b", "g", "r", "b", "g", "e", "e", "e", "e", "e", "e", "e", "w"],
  ["w", "e", "b", "g", "r", "b", "g", "r", "b", "g", "r", "b", "g", "e", "e", "e", "e", "e", "e", "e", "w"],
  ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
];

let Screen = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

let px = 15;

function drawGreen(i, j, h, k) {
  return draw
    .rect(px, px)
    .fill("#1f7")
    .x(j * px + (k - 3) * px)
    .y(i * px + (h - 3) * px);
}

function drawRed(i, j, h, k) {
  return draw
    .rect(px, px)
    .fill("#f00")
    .x(j * px + (k - 3) * px)
    .y(i * px + (h - 3) * px);
}

function drawBlue(i, j, h, k) {
  return draw
    .rect(px, px)
    .fill("#00f")
    .x(j * px + (k - 3) * px)
    .y(i * px + (h - 3) * px);
}

function drawEmpty(i, j, h, k) {
  return draw
    .rect(px, px)
    .fill("#fff")
    .x(j * px + (k - 3) * px)
    .y(i * px + (h - 3) * px);
}

//initial draw
for (let i = 0; i < Town.length; i++) {
  for (let j = 0; j < Town[i].length; j++) {
    if (Town[i][j] == "p") {
      draw
        .rect(px, px)
        .fill("#000")
        .x(j * px)
        .y(i * px);
      for (let h = 0; h < 7; h++) {
        for (let k = 0; k < 7; k++) {
          if (Town[i + h - 3][j + k - 3] == "g") {
            Screen[h][k] = drawGreen(i, j, h, k);
          } else if (Town[i + h - 3][j + k - 3] == "r") {
            Screen[h][k] = drawRed(i, j, h, k);
          } else if (Town[i + h - 3][j + k - 3] == "b") {
            Screen[h][k] = drawBlue(i, j, h, k);
          } else if (Town[i + h - 3][j + k - 3] == "e") {
            Screen[h][k] = drawEmpty(i, j, h, k);
          }
        }
      }
      Town[i][j] = e;
    }
  }
}


/*
create a dictionary for different tiles and their codes
design different tile patterns
create movement code which shifts squares in and out of the Screen array
draw screen outline

if I move left (d), then move every thing in Screen to the right and print the new squares on the left most of Screen
*/