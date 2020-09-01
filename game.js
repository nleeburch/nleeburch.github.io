var draw = SVG("game").size(500, 500);
var px = 20;
////////////////////////////////////////////

////////////////////////////////////////////
class Level {
  constructor(room, bullets) {
    this.room = room;
    this.bullets = bullets;
    this.player = {};
    this.snake = [];
  }
}
let bulletsRoom1 = [];
let arrayRoom1 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, "p", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 2.1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 3.1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 2.01, 0, 0, 0, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 8, 8, 8, 1, 1, 1, 1, 1, 1],
];
//1 = wall
//2 = eastward turret
//3 = westward turret
//9 = player
/////////////////////////////////////////////

let bulletsRoom2 = [];
let arrayRoom2 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 4.35, 0, 0, 4.4, 0, 0, 0, 0, 0, 0, 4.3, 0, 0, 0, 1],
  [1, 0, "p", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 2.22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3.55, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 2.33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3.44, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 2.44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3.33, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 2.55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 0, 0, 5.35, 0, 0, 0, 0, 0, 0, 5.4, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 8, 8, 8, 1],
];
//1 = wall
//2 = eastward turret  (0,1,2)
//3 = westward turret  (3,4,5)
//4 = southward turret (6,7)
//5 = northward turret (8,9)
//9 = player

let bulletsRoom3 = [];
let arrayRoom3 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, "p", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "s", 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

///////////////////////////////////////////////////
let Level1 = new Level(arrayRoom1, bulletsRoom1);
let Level2 = new Level(arrayRoom2, bulletsRoom2);
let Level3 = new Level(arrayRoom3, bulletsRoom3);

let allLevels = [Level1, Level2, Level3];

////////////////////////////////////////////////////

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function BuildArray(Level) {
  for (let i = 0; i < Level.room.length; i++) {
    for (let j = 0; j < Level.room[0].length; j++) {
      if (Level.room[i][j] == "p") {
        Level.player = draw
          .rect(px / 2, px / 2)
          .fill("#0a0aff")
          .x(j * px + 3)
          .y(i * px + 3)
          .attr({ dx: 0.5, dy: 0.5 });
        Level.room[i][j] = 0;
      } else if (Level.room[i][j] == 1) {
        draw
          .rect(px, px)
          .x(j * px)
          .y(i * px);
      } else if (Math.floor(Level.room[i][j]) === 2) {
        let v = Level.room[i][j] - Math.floor(Level.room[i][j]);
        draw
          .polygon("0,0 0,20 10,10")
          .x(j * px)
          .y(i * px);
        Level.bullets.push(
          draw
            .polygon("0,0 15,0 18,3 15,6 0,6 3,3")
            .x(j * px)
            .y(i * px + 7)
            .attr({ t: 0, dx: v, dy: 0 })
        );
      } else if (Math.floor(Level.room[i][j]) === 3) {
        let v = Level.room[i][j] - Math.floor(Level.room[i][j]);
        draw
          .polygon("20,0 20,20 10,10")
          .x(j * px + 10)
          .y(i * px);
        Level.bullets.push(
          draw
            .polygon("5,0 20,0 17,3 20,6 5,6 2,3")
            .x(j * px)
            .y(i * px + 7)
            .attr({ t: 0, dx: -v, dy: 0 })
        );
      } else if (Math.floor(Level.room[i][j]) === 4) {
        let v = Level.room[i][j] - Math.floor(Level.room[i][j]);
        draw
          .polygon("0,0 20,0 10,20")
          .x(j * px)
          .y(i * px);
        Level.bullets.push(
          draw
            .polygon("0,0 3,3 6,0 6,17 3,20 0,17")
            .x(j * px + 7)
            .y(i * px)
            .attr({ t: 0, dx: 0, dy: v })
        );
      } else if (Math.floor(Level.room[i][j]) === 5) {
        let v = Level.room[i][j] - Math.floor(Level.room[i][j]);
        draw
          .polygon("10,0 20,20 0,20")
          .x(j * px)
          .y(i * px);
        Level.bullets.push(
          draw
            .polygon("3,0 6,3 6,20 3,17 0,20 0,3")
            .x(j * px + 7)
            .y(i * px)
            .attr({ t: 0, dx: 0, dy: -v })
        );
      } else if (Level.room[i][j] === 8) {
        draw
          .rect(16, 5)
          .x(j * px + 2)
          .y(i * px);
      } else if (Level.room[i][j] === "s") {
        for (let k = 0; k < 10; k++) {
          Level.snake.push(
            draw
              .rect(px - 3, px - 3)
              .x(j * px)
              .y(i * px + k * px)
              .attr({ x: j * px, y: i * px + k * px, id: k })
          );
        }
      }
    }
  }
  return true;
}

function MovePlayer(Level, key) {
  //w
  if (key == "w") {
    Level.player.attr({ dx: 0, dy: -0.5 });
  }
  //a
  else if (key == "a") {
    Level.player.attr({ dx: -0.5, dy: 0 });
  }
  //s
  else if (key == "s") {
    Level.player.attr({ dx: 0, dy: 0.5 });
  }
  //d
  else if (key == "d") {
    Level.player.attr({ dx: 0.5, dy: 0 });
  }
  if (
    Level.room[
      Math.round((Level.player.y() + Level.player.attr("dy") * px) / px)
    ][Math.round((Level.player.x() + Level.player.attr("dx") * px) / px)] < 1 ||
    Level.room[
      Math.round((Level.player.y() + Level.player.attr("dy") * px) / px)
    ][Math.round((Level.player.x() + Level.player.attr("dx") * px) / px)] > 7
  ) {
    Level.player.dmove(
      Level.player.attr("dx") * px,
      Level.player.attr("dy") * px
    );
  }
}

function MoveBullets(Level) {
  for (let i = 0; i < Level.bullets.length; i++) {
    Level.bullets[i]
      .dx(Level.bullets[i].attr("dx") * px)
      .dy(Level.bullets[i].attr("dy") * px)
      .attr("t", Level.bullets[i].attr("t") + 1);
    if (
      Level.room[Math.round(Level.bullets[i].y() / px)][
        Math.round(Level.bullets[i].x() / px)
      ] == 1
    ) {
      Level.bullets[i]
        .dx(-(Level.bullets[i].attr("dx") * px) * Level.bullets[i].attr("t"))
        .dy(-(Level.bullets[i].attr("dy") * px) * Level.bullets[i].attr("t"))
        .attr("t", 0);
    }
  }
}

function MoveSnake(Level) {
  //10 20x20 squares which individually have positions and interchange positions but the head determines the new position
  //splits in half creates two smaller entities
}

function HitDetection(Level) {
  for (let i = 0; i < Level.bullets.length; i++) {
    if (
      (Level.player.x() <= Level.bullets[i].x() &&
        Level.player.x() + 9 >= Level.bullets[i].x() &&
        Level.player.y() <= Level.bullets[i].y() &&
        Level.player.y() + 9 >= Level.bullets[i].y()) ||
      (Level.player.x() <= Level.bullets[i].x() + 17 &&
        Level.player.x() + 9 >= Level.bullets[i].x() + 17 &&
        Level.player.y() <= Level.bullets[i].y() &&
        Level.player.y() + 9 >= Level.bullets[i].y()) ||
      (Level.player.x() <= Level.bullets[i].x() &&
        Level.player.x() + 9 >= Level.bullets[i].x() &&
        Level.player.y() <= Level.bullets[i].y() + 5 &&
        Level.player.y() + 9 >= Level.bullets[i].y() + 5) ||
      (Level.player.x() <= Level.bullets[i].x() + 17 &&
        Level.player.x() + 9 >= Level.bullets[i].x() + 17 &&
        Level.player.y() <= Level.bullets[i].y() + 5 &&
        Level.player.y() + 9 >= Level.bullets[i].y() + 5)
    ) {
      Level.player.x(26);
      Level.player.y(26);
    }
  }
}

function WinCondition(Level) {
  if (
    Level.room[
      Math.floor((Level.player.y() + Level.player.attr("dy") * px) / px)
    ][Math.floor((Level.player.x() + Level.player.attr("dx") * px) / px)] == 8
  ) {
    alert("you wan");
    Level.player = {};
    return true;
  }
  return false;
}

function EraseArray(Level) {
  for (let i = 0; i < Level.room.length; i++) {
    for (let j = 0; j < Level.room[0].length; j++) {
      draw
        .rect(px, px)
        .fill("#ffffff")
        .x(j * px)
        .y(i * px);
    }
  }
}

///////////////////////////////////////////////

let interval = 1;
let roomFlag = false;

async function GameLoop(levelIndex, roomFlag) {
  let Level = allLevels[levelIndex];
  let moveToNextLevel = false;
  if (roomFlag == false) {
    roomFlag = BuildArray(Level);
  }
  window.document.addEventListener("keydown", (event) => {
    if (interval === 1) {
      MovePlayer(Level, event.key);
      interval = 0;
    }
  });
  interval = 1;
  HitDetection(Level);
  MoveBullets(Level);
  moveToNextLevel = WinCondition(Level);
  if (moveToNextLevel) {
    roomFlag = false;
    EraseArray(Level);
    levelIndex++;
  }
  await sleep(33);
  window.requestAnimationFrame(() => GameLoop(levelIndex, roomFlag));
}

window.requestAnimationFrame(() => GameLoop(2, roomFlag));
